import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import { fetchTCSStations } from './api.js';
import { FUEL_CONSUMPTION } from './vehicles.js';
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');
  const navItems = document.querySelectorAll('.nav-item');

  // ── State ──────────────────────────────────────────────
  let allStations = [];
  let userProfile = JSON.parse(localStorage.getItem('fillz_profile') || 'null');
  let selectedFuel = userProfile?.fuelType || 'SP95';
  let favorites = JSON.parse(localStorage.getItem('fillz_favs') || '[]');
  let dataLoaded = false;
  let isFirstVisit = !userProfile;
  let currentUser = null;
  let sortBy = 'price';
  let currentMapTheme = localStorage.getItem('fillz_map_theme') || 'dark';
  let mapInstance = null, markersLayer = null, tileLayer = null;
  let userLat = 46.52, userLng = 6.63;

  // ── Firestore Sync ────────────────────────────────────
  async function syncToFirestore() {
    if (!currentUser) return;
    try {
      const refuels = JSON.parse(localStorage.getItem('fillz_refuels') || '[]');
      await setDoc(doc(db, "users", currentUser.uid), {
        profile: userProfile,
        favorites: favorites,
        refuels: refuels
      });
    } catch(err) { console.error('Erreur Sync Firestore', err); }
  }

  async function loadFromFirestore(user) {
    try {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        const data = snap.data();
        if (data.profile) {
          userProfile = data.profile;
          selectedFuel = userProfile.fuelType || 'SP95';
          localStorage.setItem('fillz_profile', JSON.stringify(userProfile));
        }
        if (data.favorites) {
          favorites = data.favorites;
          localStorage.setItem('fillz_favs', JSON.stringify(favorites));
        }
        if (data.refuels) {
          localStorage.setItem('fillz_refuels', JSON.stringify(data.refuels));
        }
        return true;
      }
    } catch(err) { console.error('Erreur Load Firestore', err); }
    return false;
  }

  onAuthStateChanged(auth, user => {
    currentUser = user;
    if (user && userProfile) syncToFirestore();
  });

  // ── Vehicle helpers ────────────────────────────────────
  function getDistKm(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  function getTankSize() {
    if (!userProfile?.vehicleMotorization) return 50;
    const match = userProfile.vehicleMotorization.match(/(\d+)L/);
    if (match) return parseInt(match[1], 10);
    return userProfile.vehicleMotorization.includes('Électrique') ? 0 : 50;
  }

  function getVehicleFuel() {
    return selectedFuel;
  }

  function vehicleSummary() {
    if (!userProfile?.vehicleBrand) return 'Véhicule non configuré';
    return userProfile.vehicleBrand + ' ' + userProfile.vehicleModel
      + (userProfile.vehicleYear ? ' (' + userProfile.vehicleYear + ')' : '')
      + (userProfile.vehicleMotorization && userProfile.vehicleMotorization !== '0' ? ' — ' + userProfile.vehicleMotorization : '');
  }

  // ── Geolocation ────────────────────────────────────────
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(p => { userLat = p.coords.latitude; userLng = p.coords.longitude; });
  }

  // ── HTML: Onboarding ───────────────────────────────────
  const obDisplay = isFirstVisit ? '' : 'display:none';

  const onboardingHTML = `<div id="onboarding" style="${obDisplay}">
    <div class="onboarding-step active" data-step="1">
      <i class="ph-fill ph-broadcast step-icon"></i>
      <h1 class="ob-title">Bienvenue sur OptiTank</h1>
      <p class="ob-text">La première App de surveillance intelligente des prix de carburant en Suisse.</p>
      
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin: 24px 0 16px;">
        <p style="font-size:13px; margin-bottom:12px; font-weight:600; color:var(--accent-purple)">Créer un compte ou se connecter</p>
        <input type="email" id="auth-email" class="ob-input" placeholder="Adresse email" style="margin-bottom:8px" />
        <input type="password" id="auth-pwd" class="ob-input" placeholder="Mot de passe" />
        <div id="auth-error" style="color:var(--accent-red); font-size:12px; margin-top:8px; display:none;"></div>
      </div>
      
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" id="btn-auth-login" style="flex:1">Connexion</button>
        <button class="btn-primary" id="btn-auth-register" style="flex:1; background:var(--accent-purple); color:white">Inscription</button>
      </div>
    </div>
    <div class="onboarding-step" data-step="2">
      <i class="ph-fill ph-user step-icon" style="color:white"></i>
      <h1 class="ob-title">Votre identité</h1>
      <p class="ob-text">Personnalisez votre expérience OptiTank.</p>
      <input type="text" id="ob-name" class="ob-input" placeholder="Votre prénom (ex: Alex)"/>
      <button class="btn-primary ob-next">Continuer</button>
    </div>
    <div class="onboarding-step" data-step="3">
      <i class="ph-fill ph-gas-pump step-icon" style="color:var(--accent-purple)"></i>
      <h1 class="ob-title">Quel carburant ?</h1>
      <p class="ob-text">Filtre par défaut pour le radar et la carte.</p>
      <div class="fuel-grid">
        <div class="fuel-btn selected" data-fuel="SP95"><i class="ph-bold ph-drop"></i> SP95</div>
        <div class="fuel-btn" data-fuel="SP98"><i class="ph-bold ph-drop-half-bottom"></i> SP98</div>
        <div class="fuel-btn" data-fuel="Diesel"><i class="ph-bold ph-truck"></i> Diesel</div>
        <div class="fuel-btn" data-fuel="GPL"><i class="ph-bold ph-leaf"></i> GPL</div>
      </div>
      <button class="btn-primary ob-next">Continuer</button>
    </div>
    <div class="onboarding-step" data-step="4">
      <i class="ph-fill ph-car step-icon" style="color:#3b82f6"></i>
      <h1 class="ob-title">Votre véhicule</h1>
      <p class="ob-text">Marque → Modèle → Motorisation pour calculer le coût exact.</p>
      ${buildVehicleStepHTML('ob')}
      <button class="btn-primary ob-next">Continuer</button>
      <button class="ob-skip">Passer cette étape</button>
    </div>
    <div class="onboarding-step" data-step="5">
      <i class="ph-fill ph-check-circle step-icon" style="color:var(--accent-green)"></i>
      <h1 class="ob-title">Tout est prêt !</h1>
      <p class="ob-text">Vos préférences sont enregistrées dans le cloud. L'IA va scanner le meilleur choix pour <strong>${selectedFuel}</strong>.</p>
      <button class="btn-primary" id="ob-finish">Lancer le radar IA</button>
    </div>
  </div>`;

  // ── HTML: Profile info ─────────────────────────────────
  const profName = userProfile?.name || 'Utilisateur';
  const profEmail = userProfile?.email || 'email@exemple.com';

  // ── HTML: Views ────────────────────────────────────────
  const radarActive = isFirstVisit ? '' : 'active';
  const viewsHTML = `
    <div class="view view-radar ${radarActive}" id="view-radar">
      <div class="top-brand">
        <img src="/logo.png" alt="OptiTank Logo" style="height:28px; width:28px; object-fit:contain; filter:drop-shadow(0 0 8px rgba(192,132,252,0.4)); mix-blend-mode: screen;"/>
        <span style="font-size:20px;font-weight:700;letter-spacing:-0.5px;margin-left:6px;">OptiTank</span>
        <div class="premium-badge"><i class="ph-fill ph-sparkle"></i> IA</div>
      </div>
      <div class="radar-header">
        <h1><i class="ph-fill ph-brain" style="color:var(--accent-purple)"></i> Radar IA</h1>
        <p>Classement intelligent — prix du plein <strong>+</strong> coût du trajet aller-retour</p>
      </div>
      <div class="radar-container">
        <div class="radar-viz">
          <div class="rv-ring rv-r3"></div>
          <div class="rv-ring rv-r2"></div>
          <div class="rv-ring rv-r1"></div>
          <div class="rv-sweep"></div>
          <div class="rv-cross rv-h"></div>
          <div class="rv-cross rv-v"></div>
          <div class="rv-dot"></div>
        </div>
      </div>
      <div id="radar-results" class="radar-results"></div>
      <div class="radar-footer">
        <div style="margin-bottom: 12px; display: flex; justify-content: center;">
          <select id="radar-range" class="ob-input ob-select" style="max-width: 250px; margin: 0; padding: 12px 20px; font-size: 14px;">
            <option value="10">Rayon de recherche : 10 km</option>
            <option value="20">Rayon de recherche : 20 km</option>
            <option value="40" selected>Rayon de recherche : 40 km</option>
            <option value="80">Rayon de recherche : 80 km</option>
          </select>
        </div>
        <button class="btn-primary" id="btn-radar-scan"><i class="ph-bold ph-brain"></i> Analyser</button>
      </div>
    </div>

    <div class="view view-map" id="view-map">
      <div class="map-top-bar">
        <div class="search-input"><i class="ph ph-magnifying-glass"></i><input type="text" id="search-field" placeholder="Rechercher une station..."/></div>
        <button class="icon-btn" id="btn-theme-toggle"><i class="ph ph-palette"></i></button>
      </div>
      <div class="map-filters">
        <button class="filter-chip active" id="chip-fuel"><i class="ph ph-gas-pump"></i> ${selectedFuel} <i class="ph ph-caret-down"></i></button>
        <button class="filter-chip" id="chip-sort"><i class="ph ph-funnel"></i> Trier par prix <i class="ph ph-caret-down"></i></button>
        <button class="filter-chip" id="chip-count"><i class="ph ph-map-trifold"></i> 0 stations</button>
      </div>
      <div id="leaflet-map"></div>
      <button id="btn-gps-locate" class="btn-fab" aria-label="Recentrer"><i class="ph ph-crosshair"></i></button>
      <div class="map-loading-overlay" id="map-loader"><div class="spinner"></div><p>Chargement des stations TCS...</p></div>
      <div class="bottom-sheet" id="station-bottom-sheet"><div class="sheet-handle"></div><div class="sheet-content" id="sheet-content"></div></div>
      <div class="filter-dropdown" id="fuel-dropdown">
        <div class="dropdown-item" data-fuel="SP95">SP95</div>
        <div class="dropdown-item" data-fuel="SP98">SP98</div>
        <div class="dropdown-item" data-fuel="Diesel">Diesel</div>
        <div class="dropdown-item" data-fuel="Diesel Premium">Diesel Premium</div>
        <div class="dropdown-item" data-fuel="GPL">GPL</div>
        <div class="dropdown-item" data-fuel="GNC">GNC</div>
        <div class="dropdown-item" data-fuel="Ethanol 85">E85</div>
      </div>
      <div class="filter-dropdown" id="sort-dropdown">
        <div class="dropdown-item" data-sort="price"><i class="ph ph-sort-ascending"></i> Prix croissant</div>
        <div class="dropdown-item" data-sort="name"><i class="ph ph-sort-ascending"></i> Nom A-Z</div>
      </div>
      <div class="filter-dropdown" id="theme-dropdown">
        <div class="dropdown-item theme-opt" data-theme="dark"><i class="ph ph-moon"></i> Sombre</div>
        <div class="dropdown-item theme-opt" data-theme="light"><i class="ph ph-sun"></i> Clair</div>
        <div class="dropdown-item theme-opt" data-theme="satellite"><i class="ph ph-globe-hemisphere-west"></i> Satellite</div>
      </div>
    </div>

    <div class="view view-route" id="view-route">
      <div class="top-brand">
        <img src="/logo.png" alt="OptiTank Logo" style="height:28px; width:28px; object-fit:contain; filter:drop-shadow(0 0 8px rgba(192,132,252,0.4)); mix-blend-mode: screen;"/>
        <span style="font-size:20px;font-weight:700;letter-spacing:-0.5px;margin-left:6px;">OptiTank</span>
        <div class="premium-badge"><i class="ph-fill ph-navigation-arrow"></i> Trajet IA</div>
      </div>
      <div class="radar-header" style="text-align:left; padding: 0 16px 10px;">
        <h1><i class="ph-fill ph-map-trifold" style="color:var(--accent-purple)"></i> Trajets Intelligents</h1>
        <p>Entrez votre destination pour trouver les meilleures stations <strong>sur votre route</strong>, sans détour.</p>
      </div>
      <div style="padding: 0 16px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 14px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <i class="ph-fill ph-record" style="color:#60a5fa"></i>
            <input type="text" id="route-start" class="ob-input" style="flex:1; margin:0; padding:10px;" placeholder="Départ (ex: Genève)"/>
          </div>
          <div style="width:2px; height:8px; background:rgba(255,255,255,0.1); margin-left:6px;"></div>
          <div style="display:flex; align-items:center; gap:10px;">
            <i class="ph-fill ph-map-pin" style="color:#ef4444"></i>
            <input type="text" id="route-end" class="ob-input" style="flex:1; margin:0; padding:10px;" placeholder="Arrivée (ex: Lausanne)"/>
          </div>
          <button class="btn-primary" id="btn-calc-route" style="margin-top:4px;"><i class="ph-bold ph-route"></i> Calculer l'itinéraire IA</button>
        </div>
      </div>
      <div id="route-results" class="radar-results" style="padding-top:16px;"></div>
    </div>

    <div class="view view-profile" id="view-profile">
      <div class="top-brand">
        <img src="/logo.png" alt="OptiTank Logo" style="height:28px; width:28px; object-fit:contain; filter:drop-shadow(0 0 8px rgba(192,132,252,0.4)); mix-blend-mode: screen;"/>
        <span style="font-size:20px;font-weight:700;letter-spacing:-0.5px;margin-left:6px;">OptiTank</span>
        <div class="premium-badge"><i class="ph-fill ph-shield-check"></i> Premium</div>
      </div>
      <div class="profile-header">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Avatar" class="avatar"/>
        <h2 id="prof-name">${profName}</h2>
        <p class="email" id="prof-email">${profEmail}</p>
      </div>
      <div class="profile-cards">
        <div class="section-title">Mon véhicule</div>
        <div class="vehicle-card" id="vehicle-card">
          <div class="vehicle-card-info">
            <i class="ph-fill ph-car" style="font-size:26px;color:var(--accent-purple)"></i>
            <div>
              <strong id="prof-vehicle">${vehicleSummary()}</strong>
              <span class="text-muted" id="prof-moto" style="font-size:12px;display:block">${userProfile?.vehicleMotorization || ''}</span>
            </div>
          </div>
          <button class="btn-sm" id="btn-change-vehicle">Modifier</button>
        </div>
        <div class="section-title">Préférences</div>
        <div class="list-item" style="padding-right: 12px;">
          <div class="item-left"><i class="ph-fill ph-gas-pump"></i> Carburant préféré</div>
          <select id="prof-fuel-sel" class="ob-input ob-select" style="width: auto; margin: 0; padding: 6px 30px 6px 12px; background: rgba(255,255,255,0.08); border: none; font-size: 14px; text-align: right;">
            <option value="SP95" ${selectedFuel === 'SP95' ? 'selected' : ''}>SP95</option>
            <option value="SP98" ${selectedFuel === 'SP98' ? 'selected' : ''}>SP98</option>
            <option value="Diesel" ${selectedFuel === 'Diesel' ? 'selected' : ''}>Diesel</option>
            <option value="Diesel Premium" ${selectedFuel === 'Diesel Premium' ? 'selected' : ''}>Diesel Premium</option>
            <option value="GPL" ${selectedFuel === 'GPL' ? 'selected' : ''}>GPL</option>
            <option value="GNC" ${selectedFuel === 'GNC' ? 'selected' : ''}>GNC</option>
            <option value="Ethanol 85" ${selectedFuel === 'Ethanol 85' ? 'selected' : ''}>E85</option>
          </select>
        </div>
        <div class="section-title">Suivi Consommation</div>
        <div class="list-item" id="btn-add-refuel" style="cursor:pointer; background:rgba(74, 222, 128, 0.05); border:1px solid rgba(74, 222, 128, 0.1);">
          <div class="item-left"><i class="ph-fill ph-gas-pump" style="color:var(--accent-green)"></i> <b style="color:var(--accent-green)">Ajouter un plein manuellement</b></div>
          <i class="ph ph-plus-circle" style="color:var(--accent-green)"></i>
        </div>
        <div id="refuels-list" style="margin-top:6px; display:flex; flex-direction:column; gap:6px;"></div>
        
        <div class="list-item" id="btn-reset" style="margin-top:20px;"><div class="item-left"><i class="ph ph-sign-out" style="color:#ef4444"></i> <span style="color:#ef4444">Réinitialiser l'application</span></div><i class="ph ph-caret-right text-muted"></i></div>
      </div>
    </div>`;

  // Inject
  document.body.insertAdjacentHTML('afterbegin', onboardingHTML);
  mainContent.innerHTML = viewsHTML;
  
  function buildVehicleStepHTML(prefix) {
    return `<select id="${prefix}-brand" class="ob-input ob-select"><option value="">Chargement des marques...</option></select>`
      + `<select id="${prefix}-model" class="ob-input ob-select" disabled><option value="">Sélectionnez une marque d'abord...</option></select>`
      + `<select id="${prefix}-year" class="ob-input ob-select" disabled><option value="">Sélectionnez un modèle d'abord...</option></select>`
      + `<div id="${prefix}-badge" class="tank-info-badge" style="display:none; margin-top:12px; justify-content:center;"></div>`;
  }

  // ── Onboarding & Auth Logic ────────────────────────────
  const obContainer = document.getElementById('onboarding');
  const tempProfile = {};

  async function handleAuth(action) {
    const email = document.getElementById('auth-email').value;
    const pwd = document.getElementById('auth-pwd').value;
    const errEl = document.getElementById('auth-error');
    if (!email || !pwd) { errEl.textContent = 'Tous les champs sont requis'; errEl.style.display = 'block'; return; }
    
    document.getElementById('btn-auth-login').disabled = true;
    document.getElementById('btn-auth-register').disabled = true;
    errEl.style.display = 'none';
    
    try {
      if (action === 'register') {
        const cred = await createUserWithEmailAndPassword(auth, email, pwd);
        currentUser = cred.user;
        nextStep(1);
      } else {
        const cred = await signInWithEmailAndPassword(auth, email, pwd);
        currentUser = cred.user;
        const exists = await loadFromFirestore(cred.user);
        if (exists && userProfile) {
          obContainer.style.display = 'none';
          isFirstVisit = false;
          refreshProfile(); // CRUCIAL : Met à jour l'interface avec les vraies données Firestore !
          switchView('radar');
          runRadarScan();
        } else {
          nextStep(1);
        }
      }
    } catch(err) {
      errEl.textContent = "Erreur: " + err.message;
      errEl.style.display = 'block';
      document.getElementById('btn-auth-login').disabled = false;
      document.getElementById('btn-auth-register').disabled = false;
    }
  }

  document.getElementById('btn-auth-login')?.addEventListener('click', () => handleAuth('login'));
  document.getElementById('btn-auth-register')?.addEventListener('click', () => handleAuth('register'));

  function nextStep(current) {
    const currentEl = document.querySelector(`.onboarding-step[data-step="${current}"]`);
    const nextEl = document.querySelector(`.onboarding-step[data-step="${current + 1}"]`);
    if (currentEl) {
      currentEl.classList.remove('active');
      currentEl.classList.add('prev');
    }
    if (nextEl) {
      nextEl.classList.add('active');
    }
  }

  document.querySelectorAll('.ob-next').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const step = parseInt(e.target.closest('.onboarding-step').dataset.step);
      if (step === 2) {
        tempProfile.name = document.getElementById('ob-name').value || 'Utilisateur';
      }
      if (step === 3) {
        selectedFuel = tempProfile.fuelType || 'SP95';
        document.getElementById('chip-fuel').innerHTML = `<i class="ph ph-gas-pump"></i> ${selectedFuel} <i class="ph ph-caret-down"></i>`;
      }
      nextStep(step);
    });
  });

  // Re-câblage des étapes d'inscription
  wireVehicleSelects('ob', tempProfile, () => {});

  document.querySelectorAll('.fuel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fuel-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      tempProfile.fuelType = btn.dataset.fuel;
    });
  });

  document.querySelector('.ob-skip')?.addEventListener('click', () => {
    nextStep(4);
  });

  document.getElementById('ob-finish')?.addEventListener('click', () => {
    userProfile = {
      name: tempProfile.name || 'Utilisateur',
      email: currentUser?.email || '',
      fuelType: tempProfile.fuelType || selectedFuel,
      vehicleBrand: tempProfile.brand || 'Inconnu',
      vehicleModel: tempProfile.model || 'Modèle',
      vehicleYear: tempProfile.year || new Date().getFullYear(),
      vehicleMotorization: tempProfile.moto || 'Standard (50L)'
    };
    selectedFuel = userProfile.fuelType;
    localStorage.setItem('fillz_profile', JSON.stringify(userProfile));
    
    syncToFirestore();
    
    obContainer.style.opacity = '0';
    setTimeout(() => { 
      obContainer.style.display = 'none'; 
      refreshProfile();
      switchView('radar'); 
      runRadarScan();
    }, 400);
  });

  // ── Vehicle modal ──────────────────────────────────────
  const modalHTML = `<div class="modal-overlay" id="vehicle-modal" style="display:none">
    <div class="modal-card">
      <h3><i class="ph-fill ph-car" style="color:var(--accent-purple)"></i> Sélectionner un véhicule</h3>
      <div class="vehicle-steps">
        <div class="vstep-label">1 · Marque</div>
        ${buildVehicleStepHTML('md')}
      </div>
      <div style="display:flex;gap:10px;margin-top:16px">
        <button class="btn-primary" id="modal-save-vehicle" disabled>Enregistrer</button>
        <button class="btn-link" id="md-cancel">Annuler</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // ── Refuel Modal ──────────────────────────────────────
  const refuelModalHTML = `<div class="modal-overlay" id="refuel-modal" style="display:none">
    <div class="modal-card">
      <h3><i class="ph-fill ph-gas-pump" style="color:var(--accent-green)"></i> Enregistrer un plein</h3>
      <p class="text-muted" style="margin-bottom:14px;font-size:12px;">Calculez votre consommation réelle.</p>
      <input type="number" id="rf-liters" class="ob-input" step="0.1" placeholder="Litres (ex: 45.2)"/>
      <input type="number" id="rf-price" class="ob-input" step="0.01" placeholder="Prix Total CHF (ex: 80.50)"/>
      <input type="number" id="rf-km" class="ob-input" placeholder="Kilométrage actuel (ex: 125000)"/>
      <div style="display:flex;gap:10px;margin-top:16px">
        <button class="btn-primary" id="rf-save">Enregistrer</button>
        <button class="btn-link" id="rf-cancel">Annuler</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', refuelModalHTML);

  // ── Vehicle selection logic (Static JSON DB) ───────────────
  async function loadBrands(selectEl) {
    try {
      const res = await fetch('/vehicles.json');
      window.vehicleDB = await res.json();
      const makes = Object.keys(window.vehicleDB).sort((a,b) => a.localeCompare(b));
      selectEl.innerHTML = '<option value="">Choisir une marque...</option>';
      makes.forEach(m => selectEl.add(new Option(m, m)));
    } catch(e) {
      selectEl.innerHTML = '<option value="">Erreur base de données locales</option>';
    }
  }

  function wireVehicleSelects(prefix, tempObj, onComplete) {
    const brandEl = document.getElementById(`${prefix}-brand`);
    const modelEl = document.getElementById(`${prefix}-model`);
    const yearEl = document.getElementById(`${prefix}-year`);
    const badge = document.getElementById(`${prefix}-badge`);

    loadBrands(brandEl);

    brandEl.addEventListener('change', () => {
      const b = brandEl.value;
      tempObj.brand = b; tempObj.model = ''; tempObj.year = ''; tempObj.moto = '';
      if (b && window.vehicleDB && window.vehicleDB[b]) {
        const models = window.vehicleDB[b].map(x => x.model).sort((a,b) => a.localeCompare(b));
        modelEl.innerHTML = '<option value="">Choisir un modèle...</option>';
        models.forEach(m => modelEl.add(new Option(m, m)));
        modelEl.disabled = false;
      } else {
        modelEl.innerHTML = "<option value=''>Sélectionnez une marque d'abord...</option>";
        modelEl.disabled = true;
      }
      yearEl.innerHTML = "<option value=''>Sélectionnez un modèle d'abord...</option>";
      yearEl.disabled = true;
      badge.style.display = 'none';
      if (onComplete) onComplete(false);
    });

    modelEl.addEventListener('change', () => {
      const m = modelEl.value;
      tempObj.model = m; tempObj.year = ''; tempObj.moto = '';
      if (m && window.vehicleDB) {
        let yearsHTML = "<option value=''>Choisir l'année (ex: 2018)...</option>";
        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= 1990; y--) {
          yearsHTML += `<option value="${y}">${y}</option>`;
        }
        yearEl.innerHTML = yearsHTML;
        yearEl.disabled = false;
      } else {
        yearEl.innerHTML = "<option value=''>Sélectionnez un modèle d'abord...</option>";
        yearEl.disabled = true;
      }
      badge.style.display = 'none';
      if (onComplete) onComplete(false);
    });

    yearEl.addEventListener('change', () => {
      const y = yearEl.value;
      tempObj.year = y;
      tempObj.moto = '';
      if (y && window.vehicleDB) {
        const b = brandEl.value;
        const m = modelEl.value;
        const car = window.vehicleDB[b]?.find(x => x.model === m);
        if (car) {
          const tank = car.tank;
          tempObj.moto = tank > 0 ? `Standard (${tank}L)` : 'Électrique (0L)';
          badge.innerHTML = tank > 0
            ? `<i class="ph-fill ph-gas-pump"></i> Réservoir exact : <strong>${tank} L</strong>`
            : `<i class="ph-fill ph-lightning"></i> <strong>100% Électrique</strong>`;
          badge.style.display = 'flex';
          if (onComplete) onComplete(true);
          return;
        }
      }
      badge.style.display = 'none';
      if (onComplete) onComplete(false);
    });
  }

  // Modal vehicle wiring
  wireVehicleSelects('md', tempProfile, ok => {
    document.getElementById('modal-save-vehicle').disabled = !ok;
  });
  document.getElementById('modal-save-vehicle')?.addEventListener('click', () => {
    userProfile = {
      ...userProfile,
      fuelType: selectedFuel,
      vehicleBrand: tempProfile.brand || 'Inconnu',
      vehicleModel: tempProfile.model || 'Modèle',
      vehicleYear: tempProfile.year || new Date().getFullYear(),
      vehicleMotorization: tempProfile.moto || 'Standard (50L)'
    };
    localStorage.setItem('fillz_profile', JSON.stringify(userProfile));
    document.getElementById('vehicle-modal').style.display = 'none';
    refreshProfile();
    syncToFirestore();
    if (dataLoaded) renderMarkers();
    runRadarScan();
  });
  document.getElementById('md-cancel').addEventListener('click', () => {
    document.getElementById('vehicle-modal').style.display = 'none';
  });
  document.getElementById('btn-change-vehicle')?.addEventListener('click', () => {
    document.getElementById('vehicle-modal').style.display = 'flex';
  });

  function refreshProfile() {
    const profNameEl = document.getElementById('prof-name');
    if (profNameEl) profNameEl.textContent = userProfile?.name || 'Utilisateur';

    const profEmailEl = document.getElementById('prof-email');
    if (profEmailEl) profEmailEl.textContent = userProfile?.email || 'email@exemple.com';

    const el = document.getElementById('prof-vehicle');
    if (el) el.textContent = vehicleSummary();
    const motoEl = document.getElementById('prof-moto');
    if (motoEl) motoEl.textContent = userProfile?.vehicleMotorization || '';
  }

  // Changer de carburant depuis le profil
  document.getElementById('prof-fuel-sel')?.addEventListener('change', (e) => {
    if (!userProfile) return;
    const newFuel = e.target.value;
    userProfile.fuelType = newFuel;
    selectedFuel = newFuel;
    localStorage.setItem('fillz_profile', JSON.stringify(userProfile));
    syncToFirestore(); // Synchronisation back-up pour le cloud
    document.getElementById('chip-fuel').innerHTML = `<i class="ph ph-gas-pump"></i> ${selectedFuel} <i class="ph ph-caret-down"></i>`;
    if (dataLoaded) renderMarkers();
    setTimeout(runRadarScan, 50);
  });

  // ── MAP THEMES ─────────────────────────────────────────
  const MAP_TILES = {
    dark: { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', opts: { subdomains: 'abcd', maxZoom: 19 } },
    light: { url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', opts: { subdomains: 'abcd', maxZoom: 19 } },
    satellite: { url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', opts: { maxZoom: 19 } }
  };

  function setMapTheme(name) {
    if (!mapInstance) return;
    currentMapTheme = name;
    localStorage.setItem('fillz_map_theme', name);
    if (tileLayer) mapInstance.removeLayer(tileLayer);
    tileLayer = L.tileLayer(MAP_TILES[name].url, MAP_TILES[name].opts).addTo(mapInstance);
    document.getElementById('leaflet-map').className = 'theme-' + name;
  }

  // ── MAP DATA ───────────────────────────────────────────
  async function loadMapData() {
    if (dataLoaded) { renderMarkers(); return; }
    const loader = document.getElementById('map-loader');
    if (loader) loader.classList.add('active');
    allStations = await fetchTCSStations();
    if (!allStations.length) {
      allStations = [
        { id:'f1', name:'Garage Emery Sàrl', address:'Route de Sullens 9, 1303 Penthaz', lat:46.5947, lng:6.5413, prices:{SP95:'1.920',Diesel:'2.230'} },
        { id:'f2', name:'Station Bavois', address:'Autoroute A1, 1372 Bavois', lat:46.6833, lng:6.5667, prices:{SP95:'1.950',Diesel:'2.100'} },
      ];
    }
    if (loader) loader.classList.remove('active');
    dataLoaded = true;
    renderMarkers();
  }

  function getFilteredStations() {
    let f = allStations.filter(s => s.prices[selectedFuel]);
    if (sortBy === 'price') f.sort((a, b) => parseFloat(a.prices[selectedFuel]) - parseFloat(b.prices[selectedFuel]));
    else f.sort((a, b) => a.name.localeCompare(b.name));
    return f;
  }

  function renderMarkers() {
    if (!mapInstance) return;
    if (markersLayer) mapInstance.removeLayer(markersLayer);
    markersLayer = L.markerClusterGroup({
      maxClusterRadius: 60, disableClusteringAtZoom: 14,
      showCoverageOnHover: false, spiderfyOnMaxZoom: true,
      iconCreateFunction(cluster) {
        const c = cluster.getChildCount();
        const sz = c > 50 ? 'large' : c > 20 ? 'medium' : 'small';
        return L.divIcon({ html: `<div class="cluster-icon cluster-${sz}">${c}</div>`, className: 'custom-cluster', iconSize: [44, 44] });
      }
    });
    const filtered = getFilteredStations();
    document.getElementById('chip-count').innerHTML = `<i class="ph ph-map-trifold"></i> ${filtered.length} stations`;
    filtered.forEach(s => {
      const icon = L.divIcon({ className: 'custom-marker', html: `<div class="marker-pill"><i class="ph-fill ph-gas-pump"></i> CHF ${s.prices[selectedFuel]}</div>`, iconSize: [120, 36], iconAnchor: [60, 18] });
      const m = L.marker([s.lat, s.lng], { icon });
      m.on('click', () => showBottomSheet(s));
      markersLayer.addLayer(m);
    });
    mapInstance.addLayer(markersLayer);
    const b = markersLayer.getBounds();
    if (b.isValid()) mapInstance.fitBounds(b, { padding: [50, 50], maxZoom: 12 });
  }

  function initMap() {
    if (mapInstance) return;
    mapInstance = L.map('leaflet-map', { zoomControl: false, attributionControl: false }).setView([46.8, 8.2], 8);
    tileLayer = L.tileLayer(MAP_TILES[currentMapTheme].url, MAP_TILES[currentMapTheme].opts).addTo(mapInstance);
    document.getElementById('leaflet-map').classList.add('theme-' + currentMapTheme);
    const userIcon = L.divIcon({ className: 'user-marker', html: '<div class="user-dot"></div>', iconSize: [24, 24], iconAnchor: [12, 12] });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(p => {
        userLat = p.coords.latitude; userLng = p.coords.longitude;
        window.userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(mapInstance);
      });
    }
    loadMapData();

    // GPS Locate Button Logic
    document.getElementById('btn-gps-locate')?.addEventListener('click', () => {
      if (!mapInstance) return;
      const btn = document.getElementById('btn-gps-locate');
      const ico = btn.querySelector('i');
      ico.className = 'ph-fill ph-spinner-gap spin';
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(p => {
          userLat = p.coords.latitude; 
          userLng = p.coords.longitude;
          mapInstance.flyTo([userLat, userLng], 14, { animate: true, duration: 1.2 });
          
          if (window.userMarker) {
            window.userMarker.setLatLng([userLat, userLng]);
          } else {
            window.userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(mapInstance);
          }
          setTimeout(() => ico.className = 'ph ph-crosshair', 1000);
        }, () => {
          ico.className = 'ph ph-crosshair';
        }, { enableHighAccuracy: true });
      }
    });
  }

  // ── Navigate to station on map ─────────────────────────
  function flyToStation(station) {
    switchView('map');
    setTimeout(() => {
      if (!mapInstance) { initMap(); setTimeout(() => flyToStation(station), 600); return; }
      mapInstance.invalidateSize();
      mapInstance.flyTo([station.lat, station.lng], 16, { animate: true, duration: 1.2 });
      setTimeout(() => showBottomSheet(station), 800);
    }, 150);
  }

  // ── Bottom sheet ───────────────────────────────────────
  let selectedStation = null;
  const bsFavBtn = document.getElementById('bs-fav');
  // Note: Assuming elements exist in DOM based on context
  const bsTitle = document.getElementById('bs-title');
  const bsAddress = document.getElementById('bs-address');
  const bsDistance = document.getElementById('bs-distance');
  const bsOpen = document.getElementById('bs-open');
  const bsPrices = document.getElementById('bs-prices');

  bsFavBtn?.addEventListener('click', () => {
    if (!selectedStation) return;
    const isFav = favorites.includes(selectedStation.id);
    const favIco = bsFavBtn.querySelector('i');
    
    if (isFav) {
      favorites = favorites.filter(id => id !== selectedStation.id);
      favIco.classList.replace('ph-fill', 'ph');
      favIco.style.color = '';
    } else {
      favorites.push(selectedStation.id);
      favIco.classList.replace('ph', 'ph-fill');
      favIco.style.color = '#ef4444';
    }
    
    localStorage.setItem('fillz_favs', JSON.stringify(favorites));
    syncToFirestore();
  });

  const bsheet = document.getElementById('station-bottom-sheet');
  function showBottomSheet(st) {
    selectedStation = st;
    if (bsTitle) bsTitle.textContent = st.name;
    if (bsAddress) bsAddress.textContent = st.address;
    if (bsDistance) bsDistance.textContent = getDistKm(userLat, userLng, st.lat, st.lng).toFixed(1) + ' km';
    
    let pricesHTML = '';
    const vTank = getTankSize();
    Object.entries(st.prices).forEach(([f, val]) => {
      const price = parseFloat(val);
      pricesHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
          <span>${f}</span>
          <div style="text-align:right">
            <strong>${price.toFixed(3)} CHF</strong>
            <div style="font-size:11px; color:var(--text-muted)">Plein : ${(price * vTank).toFixed(1)} CHF</div>
          </div>
        </div>`;
    });
    if (bsPrices) bsPrices.innerHTML = pricesHTML || '<div style="padding:10px 0; color:var(--text-muted)">Aucun prix connu</div>';
    
    const isFav = favorites.includes(st.id);
    const favIco = bsFavBtn.querySelector('i');
    if (isFav) {
      favIco.classList.replace('ph', 'ph-fill');
      favIco.style.color = '#ef4444';
    } else {
      favIco.classList.replace('ph-fill', 'ph');
      favIco.style.color = '';
    }

    bsheet.classList.add('active');
  };

  // ── Radar IA ───────────────────────────────────────────
  async function runRadarScan() {
    const resultsDiv = document.getElementById('radar-results');
    const btn = document.getElementById('btn-radar-scan');
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner-small"></div> Analyse...';
    if (!allStations.length) allStations = await fetchTCSStations();

    const vFuel = getVehicleFuel();
    const tank = getTankSize();
    const conso = FUEL_CONSUMPTION[vFuel] || 7.5;
    const rangeSelect = document.getElementById('radar-range');
    const RADIUS = rangeSelect ? parseInt(rangeSelect.value, 10) : 40;

    const scored = allStations
      .filter(s => s.prices[vFuel])
      .map(s => {
        const dist = getDistKm(userLat, userLng, s.lat, s.lng);
        const pricePerL = parseFloat(s.prices[vFuel]);
        const fullCost = tank > 0 ? pricePerL * tank : 0;
        const tripCost = tank > 0 ? (dist * 2 * conso / 100) * pricePerL : 0;
        return { ...s, dist, pricePerL, fullCost, tripCost, total: fullCost + tripCost };
      })
      .filter(s => s.dist <= RADIUS)
      .sort((a, b) => a.total - b.total);

    const top = scored.slice(0, 5);
    
    if (!top.length) {
      resultsDiv.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:30px">Aucune station trouvée.</p>';
      btn.disabled = false; btn.innerHTML = '<i class="ph-bold ph-brain"></i> Analyser';
      return;
    }

    let html = '<div class="radar-cards">';
    top.forEach((s, i) => {
      html += `<div class="radar-result-card" data-id="${s.id}">
        <div class="rrc-left">
          <span class="rrc-medal">${i+1}</span>
          <div><div class="rrc-name">${s.name}</div></div>
        </div>
        <div class="rrc-right"><span class="rrc-price">CHF ${s.pricePerL.toFixed(3)}</span></div>
      </div>`;
    });
    html += '</div>';
    resultsDiv.innerHTML = html;
    btn.disabled = false; btn.innerHTML = '<i class="ph-bold ph-brain"></i> Relancer';
  }

  document.getElementById('btn-radar-scan').addEventListener('click', runRadarScan);

  // ── Filter dropdowns ───────────────────────────────────
  const fuelDD = document.getElementById('fuel-dropdown');
  const sortDD = document.getElementById('sort-dropdown');
  const themeDD = document.getElementById('theme-dropdown');

  document.getElementById('chip-fuel').addEventListener('click', e => { e.stopPropagation(); fuelDD.classList.toggle('visible'); });
  document.getElementById('chip-sort').addEventListener('click', e => { e.stopPropagation(); sortDD.classList.toggle('visible'); });
  document.getElementById('btn-theme-toggle').addEventListener('click', e => { e.stopPropagation(); themeDD.classList.toggle('visible'); });

  fuelDD.querySelectorAll('.dropdown-item').forEach(it => it.addEventListener('click', () => {
    selectedFuel = it.dataset.fuel;
    document.getElementById('chip-fuel').innerHTML = `<i class="ph ph-gas-pump"></i> ${selectedFuel} <i class="ph ph-caret-down"></i>`;
    fuelDD.classList.remove('visible'); renderMarkers();
  }));
  sortDD.querySelectorAll('.dropdown-item').forEach(it => it.addEventListener('click', () => {
    sortBy = it.dataset.sort;
    sortDD.classList.remove('visible'); renderMarkers();
  }));
  themeDD.querySelectorAll('.theme-opt').forEach(it => it.addEventListener('click', () => {
    setMapTheme(it.dataset.theme); themeDD.classList.remove('visible');
  }));
  document.addEventListener('click', () => { fuelDD.classList.remove('visible'); sortDD.classList.remove('visible'); themeDD.classList.remove('visible'); });

  // Search
  document.getElementById('search-field').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    if (!markersLayer) return;
    markersLayer.clearLayers();
    getFilteredStations().filter(s => s.name.toLowerCase().includes(q) || s.address.toLowerCase().includes(q)).forEach(s => {
      const icon = L.divIcon({ className: 'custom-marker', html: `<div class="marker-pill"><i class="ph-fill ph-gas-pump"></i> CHF ${s.prices[selectedFuel]}</div>`, iconSize: [120, 36], iconAnchor: [60, 18] });
      const m = L.marker([s.lat, s.lng], { icon });
      m.on('click', () => showBottomSheet(s));
      markersLayer.addLayer(m);
    });
    const cc = document.getElementById('chip-count');
    if (cc) cc.innerHTML = `<i class="ph ph-map-trifold"></i> ${markersLayer.getLayers().length} stations`;
  });

  // Close bottom sheet on map click
  document.getElementById('view-map')?.addEventListener('click', e => {
    if (!e.target.closest('.custom-marker,.bottom-sheet,.map-filters,.map-top-bar,.filter-dropdown'))
      document.getElementById('station-bottom-sheet')?.classList.remove('active');
  });

  // Reset
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    localStorage.clear();
    if (currentUser) {
      signOut(auth).then(() => { location.reload(); });
    } else {
      location.reload();
    }
  });

  // ── Router ─────────────────────────────────────────────
  const viewElements = {
    radar: document.getElementById('view-radar'),
    map: document.getElementById('view-map'),
    route: document.getElementById('view-route'),
    profile: document.getElementById('view-profile'),
  };

  function switchView(name) {
    navItems.forEach(it => it.classList.toggle('active', it.dataset.view === name));
    Object.entries(viewElements).forEach(([k, el]) => {
      if (k === name) {
        el.classList.add('active'); el.style.display = 'flex';
        if (name === 'map') setTimeout(() => { initMap(); mapInstance?.invalidateSize(); }, 100);
      } else {
        el.classList.remove('active'); el.style.display = 'none';
      }
    });
  }

  navItems.forEach(it => it.addEventListener('click', () => switchView(it.dataset.view)));
  if (!isFirstVisit) switchView('radar');

  // ── ADD-ON 3 : SUIVI CONSOMMATION ──────────────────────
  function loadRefuels() {
    const listEl = document.getElementById('refuels-list');
    if (!listEl) return;
    const refuels = JSON.parse(localStorage.getItem('fillz_refuels') || '[]');
    if (!refuels.length) {
      listEl.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:10px;"><i class="ph-bold ph-gas-pump" style="font-size:24px;display:block;margin-bottom:8px;opacity:0.5"></i>Aucun plein enregistré.</p>';
      return;
    }
    
    let html = '';
    refuels.sort((a,b) => b.km - a.km).forEach((rf, i) => {
      let badge = '';
      if (i < refuels.length - 1) {
        const prev = refuels[i+1];
        const diffKm = rf.km - prev.km;
        if (diffKm > 0) {
          const conso = (rf.liters / diffKm) * 100;
          badge = `<span style="font-size:12px;color:var(--accent-purple);font-weight:700;"><i class="ph-fill ph-trend-down"></i> ${conso.toFixed(1)} L/100</span>`;
        }
      } else {
        badge = `<span style="font-size:11px;color:var(--text-muted);">Plein Initial</span>`;
      }
      const d = new Date(rf.date).toLocaleDateString('fr-CH');
      html += `<div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="display:block;font-size:14px;color:white;">${rf.liters} L — CHF ${rf.price.toFixed(2)}</strong>
          <span style="color:var(--text-muted);font-size:11px;">${d} · ${rf.km} km</span>
        </div>
        ${badge}
      </div>`;
    });
    listEl.innerHTML = html;
  }

  const rm = document.getElementById('refuel-modal');
  document.getElementById('btn-add-refuel')?.addEventListener('click', () => rm.style.display = 'flex');
  document.getElementById('rf-cancel')?.addEventListener('click', () => rm.style.display = 'none');
  document.getElementById('rf-save')?.addEventListener('click', () => {
    const l = parseFloat(document.getElementById('rf-liters').value);
    const p = parseFloat(document.getElementById('rf-price').value);
    const k = parseInt(document.getElementById('rf-km').value, 10);
    if (!l || !p || !k) return alert('Veuillez remplir tous les champs');
    
    const refuels = JSON.parse(localStorage.getItem('fillz_refuels') || '[]');
    refuels.push({ date: Date.now(), liters: l, price: p, km: k });
    localStorage.setItem('fillz_refuels', JSON.stringify(refuels));
    syncToFirestore(); // Synchronisation au cloud
    
    document.getElementById('rf-liters').value = '';
    document.getElementById('rf-price').value = '';
    document.getElementById('rf-km').value = '';
    rm.style.display = 'none';
    loadRefuels();
  });
  loadRefuels();

  // ── ADD-ON 1 : TRAJETS INTELLIGENTS ────────────────────
  let currentRoutePolyline = null;

  async function geocode(query) {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`);
    const data = await res.json();
    return data.length ? data[0] : null;
  }

  document.getElementById('btn-calc-route')?.addEventListener('click', async () => {
    const startQ = document.getElementById('route-start').value;
    const endQ = document.getElementById('route-end').value;
    const btn = document.getElementById('btn-calc-route');
    const resDiv = document.getElementById('route-results');
    
    if (!startQ || !endQ) return alert('Veuillez entrer un départ et une arrivée.');
    
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner-small"></div> Recherche...';
    resDiv.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Géocodage des adresses...</p>';

    try {
      const startLoc = await geocode(startQ);
      const endLoc = await geocode(endQ);
      
      if (!startLoc || !endLoc) throw new Error('Cité/Code Postal introuvable. Soyez plus précis.');
      
      resDiv.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Calcul du trajet (OSRM)...</p>';
      
      const osrmRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${startLoc.lon},${startLoc.lat};${endLoc.lon},${endLoc.lat}?overview=simplified&geometries=geojson`);
      const osrmData = await osrmRes.json();
      
      if (osrmData.code !== 'Ok') throw new Error('Trajet impossible.');
      
      const routeCoords = osrmData.routes[0].geometry.coordinates; // [lon, lat][]
      const distRoute = osrmData.routes[0].distance / 1000;
      
      // Dessin de la route sur la carte Leaflet
      if (!mapInstance) initMap();
      if (currentRoutePolyline) mapInstance.removeLayer(currentRoutePolyline);
      const latLngs = routeCoords.map(c => [c[1], c[0]]);
      currentRoutePolyline = L.polyline(latLngs, { color: 'var(--accent-purple)', weight: 5, opacity: 0.8, dashArray: '10, 10' }).addTo(mapInstance);
      mapInstance.fitBounds(currentRoutePolyline.getBounds(), { padding: [40, 40] });

      resDiv.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:20px;">Analyse de ${allStations.length} stations sur ${distRoute.toFixed(0)}km...</p>`;
      
      if (!allStations.length) allStations = await fetchTCSStations();
      
      const vFuel = getVehicleFuel();
      const MAX_DEV = 4; // km de déviation max
      
      const stationsOnRoute = allStations
        .filter(s => s.prices[vFuel])
        .map(s => {
          let minD = Infinity;
          for (let i=0; i<routeCoords.length; i+=3) { // optim speed
            const d = getDistKm(s.lat, s.lng, routeCoords[i][1], routeCoords[i][0]);
            if (d < minD) minD = d;
          }
          return { ...s, devDist: minD, pricePerL: parseFloat(s.prices[vFuel]) };
        })
        .filter(s => s.devDist <= MAX_DEV)
        .sort((a, b) => a.pricePerL - b.pricePerL);
        
      const topRoute = stationsOnRoute.slice(0, 5);
      
      if (!topRoute.length) {
        resDiv.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">Aucune station trouvée le long de ce trajet sans faire un énorme détour.</p>';
      } else {
        let html = `<div class="radar-cards-label"><i class="ph-fill ph-check-circle" style="color:var(--accent-green)"></i> ${topRoute.length} top stations sur votre trajet</div><div class="radar-cards">`;
        topRoute.forEach((s, i) => {
          html += `<div class="radar-result-card" data-id="${s.id}" style="animation-delay:${i*0.07}s">
            <div class="rrc-left">
              <span class="rrc-medal" style="font-size:16px;">${i+1}</span>
              <div>
                <div class="rrc-name">${s.name}</div>
                <div class="rrc-tags">
                  <span class="rrc-tag"><i class="ph-bold ph-arrows-split"></i> Détour ${s.devDist.toFixed(1)} km</span>
                </div>
              </div>
            </div>
            <div class="rrc-right">
              <span class="rrc-price">CHF ${s.pricePerL.toFixed(3)}</span>
              <button class="rrc-map-btn"><i class="ph-bold ph-map-pin"></i></button>
            </div>
          </div>`;
        });
        html += '</div>';
        resDiv.innerHTML = html;
        
        // Navigation auto vers la carte au clic !
        resDiv.querySelectorAll('.radar-result-card').forEach(card => {
          const st = topRoute.find(s => s.id === card.dataset.id);
          card.addEventListener('click', () => {
            switchView('map');      // Switch active view to Map
            setTimeout(() => {
              flyToStation(st);     // Fly and open bottomsheet
            }, 300);                // Wait for map layout stabilization
          });
        });
      }
    } catch(err) {
      resDiv.innerHTML = `<p style="text-align:center;color:#ef4444;padding:20px;">${err.message}</p>`;
    }
    
    btn.disabled = false;
    btn.innerHTML = '<i class="ph-bold ph-route"></i> Calculer l\'itinéraire IA';
  });
});
