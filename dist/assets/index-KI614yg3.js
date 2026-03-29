(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var al={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(xh,function(e){var r="1.9.4";function a(n){var s,u,d,_;for(u=1,d=arguments.length;u<d;u++){_=arguments[u];for(s in _)n[s]=_[s]}return n}var o=Object.create||function(){function n(){}return function(s){return n.prototype=s,new n}}();function l(n,s){var u=Array.prototype.slice;if(n.bind)return n.bind.apply(n,u.call(arguments,1));var d=u.call(arguments,2);return function(){return n.apply(s,d.length?d.concat(u.call(arguments)):arguments)}}var h=0;function f(n){return"_leaflet_id"in n||(n._leaflet_id=++h),n._leaflet_id}function m(n,s,u){var d,_,w,P;return P=function(){d=!1,_&&(w.apply(u,_),_=!1)},w=function(){d?_=arguments:(n.apply(u,arguments),setTimeout(P,s),d=!0)},w}function v(n,s,u){var d=s[1],_=s[0],w=d-_;return n===d&&u?n:((n-_)%w+w)%w+_}function y(){return!1}function E(n,s){if(s===!1)return n;var u=Math.pow(10,s===void 0?6:s);return Math.round(n*u)/u}function S(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function B(n){return S(n).split(/\s+/)}function V(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?o(n.options):{});for(var u in s)n.options[u]=s[u];return n.options}function j(n,s,u){var d=[];for(var _ in n)d.push(encodeURIComponent(u?_.toUpperCase():_)+"="+encodeURIComponent(n[_]));return(!s||s.indexOf("?")===-1?"?":"&")+d.join("&")}var $=/\{ *([\w_ -]+) *\}/g;function X(n,s){return n.replace($,function(u,d){var _=s[d];if(_===void 0)throw new Error("No value provided for variable "+u);return typeof _=="function"&&(_=_(s)),_})}var et=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function Mt(n,s){for(var u=0;u<n.length;u++)if(n[u]===s)return u;return-1}var bt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Bt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var R=0;function I(n){var s=+new Date,u=Math.max(0,16-(s-R));return R=s+u,window.setTimeout(n,u)}var A=window.requestAnimationFrame||Bt("RequestAnimationFrame")||I,k=window.cancelAnimationFrame||Bt("CancelAnimationFrame")||Bt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function C(n,s,u){if(u&&A===I)n.call(s);else return A.call(window,l(n,s))}function x(n){n&&k.call(window,n)}var b={__proto__:null,extend:a,create:o,bind:l,get lastId(){return h},stamp:f,throttle:m,wrapNum:v,falseFn:y,formatNum:E,trim:S,splitWords:B,setOptions:V,getParamString:j,template:X,isArray:et,indexOf:Mt,emptyImageUrl:bt,requestFn:A,cancelFn:k,requestAnimFrame:C,cancelAnimFrame:x};function pt(){}pt.extend=function(n){var s=function(){V(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,d=o(u);d.constructor=s,s.prototype=d;for(var _ in this)Object.prototype.hasOwnProperty.call(this,_)&&_!=="prototype"&&_!=="__super__"&&(s[_]=this[_]);return n.statics&&a(s,n.statics),n.includes&&(Ne(n.includes),a.apply(null,[d].concat(n.includes))),a(d,n),delete d.statics,delete d.includes,d.options&&(d.options=u.options?o(u.options):{},a(d.options,n.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var w=0,P=d._initHooks.length;w<P;w++)d._initHooks[w].call(this)}},s},pt.include=function(n){var s=this.prototype.options;return a(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},pt.mergeOptions=function(n){return a(this.prototype.options,n),this},pt.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),u=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function Ne(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=et(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Yt={on:function(n,s,u){if(typeof n=="object")for(var d in n)this._on(d,n[d],s);else{n=B(n);for(var _=0,w=n.length;_<w;_++)this._on(n[_],s,u)}return this},off:function(n,s,u){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var d in n)this._off(d,n[d],s);else{n=B(n);for(var _=arguments.length===1,w=0,P=n.length;w<P;w++)_?this._off(n[w]):this._off(n[w],s,u)}return this},_on:function(n,s,u,d){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,u)===!1){u===this&&(u=void 0);var _={fn:s,ctx:u};d&&(_.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(_)}},_off:function(n,s,u){var d,_,w;if(this._events&&(d=this._events[n],!!d)){if(arguments.length===1){if(this._firingCount)for(_=0,w=d.length;_<w;_++)d[_].fn=y;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var P=this._listens(n,s,u);if(P!==!1){var O=d[P];this._firingCount&&(O.fn=y,this._events[n]=d=d.slice()),d.splice(P,1)}}},fire:function(n,s,u){if(!this.listens(n,u))return this;var d=a({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var _=this._events[n];if(_){this._firingCount=this._firingCount+1||1;for(var w=0,P=_.length;w<P;w++){var O=_[w],N=O.fn;O.once&&this.off(n,N,O.ctx),N.call(O.ctx||this,d)}this._firingCount--}}return u&&this._propagateEvent(d),this},listens:function(n,s,u,d){typeof n!="string"&&console.warn('"string" type argument expected');var _=s;typeof s!="function"&&(d=!!s,_=void 0,u=void 0);var w=this._events&&this._events[n];if(w&&w.length&&this._listens(n,_,u)!==!1)return!0;if(d){for(var P in this._eventParents)if(this._eventParents[P].listens(n,s,u,d))return!0}return!1},_listens:function(n,s,u){if(!this._events)return!1;var d=this._events[n]||[];if(!s)return!!d.length;u===this&&(u=void 0);for(var _=0,w=d.length;_<w;_++)if(d[_].fn===s&&d[_].ctx===u)return _;return!1},once:function(n,s,u){if(typeof n=="object")for(var d in n)this._on(d,n[d],s,!0);else{n=B(n);for(var _=0,w=n.length;_<w;_++)this._on(n[_],s,u,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[f(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[f(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,a({layer:n.target,propagatedFrom:n.target},n),!0)}};Yt.addEventListener=Yt.on,Yt.removeEventListener=Yt.clearAllEventListeners=Yt.off,Yt.addOneTimeEventListener=Yt.once,Yt.fireEvent=Yt.fire,Yt.hasEventListeners=Yt.listens;var Nn=pt.extend(Yt);function lt(n,s,u){this.x=u?Math.round(n):n,this.y=u?Math.round(s):s}var Vn=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};lt.prototype={clone:function(){return new lt(this.x,this.y)},add:function(n){return this.clone()._add(rt(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(rt(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new lt(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new lt(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Vn(this.x),this.y=Vn(this.y),this},distanceTo:function(n){n=rt(n);var s=n.x-this.x,u=n.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(n){return n=rt(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=rt(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function rt(n,s,u){return n instanceof lt?n:et(n)?new lt(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new lt(n.x,n.y):new lt(n,s,u)}function St(n,s){if(n)for(var u=s?[n,s]:n,d=0,_=u.length;d<_;d++)this.extend(u[d])}St.prototype={extend:function(n){var s,u;if(!n)return this;if(n instanceof lt||typeof n[0]=="number"||"x"in n)s=u=rt(n);else if(n=Gt(n),s=n.min,u=n.max,!s||!u)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=u.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(n){return rt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return rt(this.min.x,this.max.y)},getTopRight:function(){return rt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,u;return typeof n[0]=="number"||n instanceof lt?n=rt(n):n=Gt(n),n instanceof St?(s=n.min,u=n.max):s=u=n,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(n){n=Gt(n);var s=this.min,u=this.max,d=n.min,_=n.max,w=_.x>=s.x&&d.x<=u.x,P=_.y>=s.y&&d.y<=u.y;return w&&P},overlaps:function(n){n=Gt(n);var s=this.min,u=this.max,d=n.min,_=n.max,w=_.x>s.x&&d.x<u.x,P=_.y>s.y&&d.y<u.y;return w&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,u=this.max,d=Math.abs(s.x-u.x)*n,_=Math.abs(s.y-u.y)*n;return Gt(rt(s.x-d,s.y-_),rt(u.x+d,u.y+_))},equals:function(n){return n?(n=Gt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Gt(n,s){return!n||n instanceof St?n:new St(n,s)}function ne(n,s){if(n)for(var u=s?[n,s]:n,d=0,_=u.length;d<_;d++)this.extend(u[d])}ne.prototype={extend:function(n){var s=this._southWest,u=this._northEast,d,_;if(n instanceof Tt)d=n,_=n;else if(n instanceof ne){if(d=n._southWest,_=n._northEast,!d||!_)return this}else return n?this.extend(ht(n)||Ot(n)):this;return!s&&!u?(this._southWest=new Tt(d.lat,d.lng),this._northEast=new Tt(_.lat,_.lng)):(s.lat=Math.min(d.lat,s.lat),s.lng=Math.min(d.lng,s.lng),u.lat=Math.max(_.lat,u.lat),u.lng=Math.max(_.lng,u.lng)),this},pad:function(n){var s=this._southWest,u=this._northEast,d=Math.abs(s.lat-u.lat)*n,_=Math.abs(s.lng-u.lng)*n;return new ne(new Tt(s.lat-d,s.lng-_),new Tt(u.lat+d,u.lng+_))},getCenter:function(){return new Tt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Tt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Tt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof Tt||"lat"in n?n=ht(n):n=Ot(n);var s=this._southWest,u=this._northEast,d,_;return n instanceof ne?(d=n.getSouthWest(),_=n.getNorthEast()):d=_=n,d.lat>=s.lat&&_.lat<=u.lat&&d.lng>=s.lng&&_.lng<=u.lng},intersects:function(n){n=Ot(n);var s=this._southWest,u=this._northEast,d=n.getSouthWest(),_=n.getNorthEast(),w=_.lat>=s.lat&&d.lat<=u.lat,P=_.lng>=s.lng&&d.lng<=u.lng;return w&&P},overlaps:function(n){n=Ot(n);var s=this._southWest,u=this._northEast,d=n.getSouthWest(),_=n.getNorthEast(),w=_.lat>s.lat&&d.lat<u.lat,P=_.lng>s.lng&&d.lng<u.lng;return w&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=Ot(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Ot(n,s){return n instanceof ne?n:new ne(n,s)}function Tt(n,s,u){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,u!==void 0&&(this.alt=+u)}Tt.prototype={equals:function(n,s){if(!n)return!1;n=ht(n);var u=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return u<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ee.distance(this,ht(n))},wrap:function(){return Ee.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,u=s/Math.cos(Math.PI/180*this.lat);return Ot([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new Tt(this.lat,this.lng,this.alt)}};function ht(n,s,u){return n instanceof Tt?n:et(n)&&typeof n[0]!="object"?n.length===3?new Tt(n[0],n[1],n[2]):n.length===2?new Tt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new Tt(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new Tt(n,s,u)}var he={latLngToPoint:function(n,s){var u=this.projection.project(n),d=this.scale(s);return this.transformation._transform(u,d)},pointToLatLng:function(n,s){var u=this.scale(s),d=this.transformation.untransform(n,u);return this.projection.unproject(d)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(n),d=this.transformation.transform(s.min,u),_=this.transformation.transform(s.max,u);return new St(d,_)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?v(n.lng,this.wrapLng,!0):n.lng,u=this.wrapLat?v(n.lat,this.wrapLat,!0):n.lat,d=n.alt;return new Tt(u,s,d)},wrapLatLngBounds:function(n){var s=n.getCenter(),u=this.wrapLatLng(s),d=s.lat-u.lat,_=s.lng-u.lng;if(d===0&&_===0)return n;var w=n.getSouthWest(),P=n.getNorthEast(),O=new Tt(w.lat-d,w.lng-_),N=new Tt(P.lat-d,P.lng-_);return new ne(O,N)}},Ee=a({},he,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var u=Math.PI/180,d=n.lat*u,_=s.lat*u,w=Math.sin((s.lat-n.lat)*u/2),P=Math.sin((s.lng-n.lng)*u/2),O=w*w+Math.cos(d)*Math.cos(_)*P*P,N=2*Math.atan2(Math.sqrt(O),Math.sqrt(1-O));return this.R*N}}),Ye=6378137,Je={R:Ye,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,u=this.MAX_LATITUDE,d=Math.max(Math.min(u,n.lat),-u),_=Math.sin(d*s);return new lt(this.R*n.lng*s,this.R*Math.log((1+_)/(1-_))/2)},unproject:function(n){var s=180/Math.PI;return new Tt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:function(){var n=Ye*Math.PI;return new St([-n,-n],[n,n])}()};function ai(n,s,u,d){if(et(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=u,this._d=d}ai.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new lt((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function Xe(n,s,u,d){return new ai(n,s,u,d)}var pn=a({},Ee,{code:"EPSG:3857",projection:Je,transformation:function(){var n=.5/(Math.PI*Je.R);return Xe(n,.5,-n,.5)}()}),Vi=a({},pn,{code:"EPSG:900913"});function mr(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function mn(n,s){var u="",d,_,w,P,O,N;for(d=0,w=n.length;d<w;d++){for(O=n[d],_=0,P=O.length;_<P;_++)N=O[_],u+=(_?"L":"M")+N.x+" "+N.y;u+=s?W.svg?"z":"x":""}return u||"M0 0"}var ke=document.documentElement.style,Ve="ActiveXObject"in window,zt=Ve&&!document.addEventListener,Ut="msLaunchUri"in navigator&&!("documentMode"in document),_n=Zt("webkit"),tn=Zt("android"),li=Zt("android 2")||Zt("android 3"),Fi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Fe=tn&&Zt("Google")&&Fi<537&&!("AudioNode"in window),Fn=!!window.opera,ci=!Ut&&Zt("chrome"),Bn=Zt("gecko")&&!_n&&!Fn&&!Ve,_r=!ci&&Zt("safari"),Bi=Zt("phantom"),ui="OTransition"in ke,zi=navigator.platform.indexOf("Win")===0,en=Ve&&"transition"in ke,gn="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!li,zn="MozPerspective"in ke,Be=!window.L_DISABLE_3D&&(en||gn||zn)&&!ui&&!Bi,nn=typeof orientation<"u"||Zt("mobile"),Un=nn&&_n,Ui=nn&&gn,F=!window.PointerEvent&&window.MSPointerEvent,G=!!(window.PointerEvent||F),q="ontouchstart"in window||!!window.TouchEvent,Q=!window.L_NO_TOUCH&&(q||G),nt=nn&&Fn,gt=nn&&Bn,ie=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Dt=function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",y,s),window.removeEventListener("testPassiveEventSupport",y,s)}catch{}return n}(),Nt=function(){return!!document.createElement("canvas").getContext}(),Ht=!!(document.createElementNS&&mr("svg").createSVGRect),kt=!!Ht&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),re=!Ht&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),de=navigator.platform.indexOf("Mac")===0,hi=navigator.platform.indexOf("Linux")===0;function Zt(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var W={ie:Ve,ielt9:zt,edge:Ut,webkit:_n,android:tn,android23:li,androidStock:Fe,opera:Fn,chrome:ci,gecko:Bn,safari:_r,phantom:Bi,opera12:ui,win:zi,ie3d:en,webkit3d:gn,gecko3d:zn,any3d:Be,mobile:nn,mobileWebkit:Un,mobileWebkit3d:Ui,msPointer:F,pointer:G,touch:Q,touchNative:q,mobileOpera:nt,mobileGecko:gt,retina:ie,passiveEvents:Dt,canvas:Nt,svg:Ht,vml:re,inlineSvg:kt,mac:de,linux:hi},ae=W.msPointer?"MSPointerDown":"pointerdown",$t=W.msPointer?"MSPointerMove":"pointermove",yn=W.msPointer?"MSPointerUp":"pointerup",as=W.msPointer?"MSPointerCancel":"pointercancel",Hi={touchstart:ae,touchmove:$t,touchend:yn,touchcancel:as},gr={touchstart:ls,touchmove:ze,touchend:ze,touchcancel:ze},Hn={},lo=!1;function co(n,s,u){return s==="touchstart"&&ji(),gr[s]?(u=gr[s].bind(this,u),n.addEventListener(Hi[s],u,!1),u):(console.warn("wrong event specified:",s),y)}function Va(n,s,u){if(!Hi[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(Hi[s],u,!1)}function yr(n){Hn[n.pointerId]=n}function uo(n){Hn[n.pointerId]&&(Hn[n.pointerId]=n)}function vr(n){delete Hn[n.pointerId]}function ji(){lo||(document.addEventListener(ae,yr,!0),document.addEventListener($t,uo,!0),document.addEventListener(yn,vr,!0),document.addEventListener(as,vr,!0),lo=!0)}function ze(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var u in Hn)s.touches.push(Hn[u]);s.changedTouches=[s],n(s)}}function ls(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Jt(s),ze(n,s)}function Fa(n){var s={},u,d;for(d in n)u=n[d],s[d]=u&&u.bind?u.bind(n):u;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var ho=200;function fo(n,s){n.addEventListener("dblclick",s);var u=0,d;function _(w){if(w.detail!==1){d=w.detail;return}if(!(w.pointerType==="mouse"||w.sourceCapabilities&&!w.sourceCapabilities.firesTouchEvents)){var P=fs(w);if(!(P.some(function(N){return N instanceof HTMLLabelElement&&N.attributes.for})&&!P.some(function(N){return N instanceof HTMLInputElement||N instanceof HTMLSelectElement}))){var O=Date.now();O-u<=ho?(d++,d===2&&s(Fa(w))):d=1,u=O}}}return n.addEventListener("click",_),{dblclick:s,simDblclick:_}}function po(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var qi=wr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),jn=wr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),cs=jn==="webkitTransition"||jn==="OTransition"?jn+"End":"transitionend";function us(n){return typeof n=="string"?document.getElementById(n):n}function di(n,s){var u=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(n,null);u=d?d[s]:null}return u==="auto"?null:u}function Et(n,s,u){var d=document.createElement(n);return d.className=s||"",u&&u.appendChild(d),d}function Pt(n){var s=n.parentNode;s&&s.removeChild(n)}function Ie(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Ue(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function He(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function Gi(n,s){if(n.classList!==void 0)return n.classList.contains(s);var u=vn(n);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function J(n,s){if(n.classList!==void 0)for(var u=B(s),d=0,_=u.length;d<_;d++)n.classList.add(u[d]);else if(!Gi(n,s)){var w=vn(n);qn(n,(w?w+" ":"")+s)}}function Vt(n,s){n.classList!==void 0?n.classList.remove(s):qn(n,S((" "+vn(n)+" ").replace(" "+s+" "," ")))}function qn(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function vn(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Se(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&mo(n,s)}function mo(n,s){var u=!1,d="DXImageTransform.Microsoft.Alpha";try{u=n.filters.item(d)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):n.style.filter+=" progid:"+d+"(opacity="+s+")"}function wr(n){for(var s=document.documentElement.style,u=0;u<n.length;u++)if(n[u]in s)return n[u];return!1}function Gn(n,s,u){var d=s||new lt(0,0);n.style[qi]=(W.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(u?" scale("+u+")":"")}function Wt(n,s){n._leaflet_pos=s,W.any3d?Gn(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function Zn(n){return n._leaflet_pos||new lt(0,0)}var rn,xe,Tr;if("onselectstart"in document)rn=function(){ct(window,"selectstart",Jt)},xe=function(){xt(window,"selectstart",Jt)};else{var fi=wr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);rn=function(){if(fi){var n=document.documentElement.style;Tr=n[fi],n[fi]="none"}},xe=function(){fi&&(document.documentElement.style[fi]=Tr,Tr=void 0)}}function Er(){ct(window,"dragstart",Jt)}function Ir(){xt(window,"dragstart",Jt)}var Zi,wn;function hs(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(br(),Zi=n,wn=n.style.outlineStyle,n.style.outlineStyle="none",ct(window,"keydown",br))}function br(){Zi&&(Zi.style.outlineStyle=wn,Zi=void 0,wn=void 0,xt(window,"keydown",br))}function _o(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function je(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var Ba={__proto__:null,TRANSFORM:qi,TRANSITION:jn,TRANSITION_END:cs,get:us,getStyle:di,create:Et,remove:Pt,empty:Ie,toFront:Ue,toBack:He,hasClass:Gi,addClass:J,removeClass:Vt,setClass:qn,getClass:vn,setOpacity:Se,testProp:wr,setTransform:Gn,setPosition:Wt,getPosition:Zn,get disableTextSelection(){return rn},get enableTextSelection(){return xe},disableImageDrag:Er,enableImageDrag:Ir,preventOutline:hs,restoreOutline:br,getSizedParentNode:_o,getScale:je};function ct(n,s,u,d){if(s&&typeof s=="object")for(var _ in s)Pr(n,_,s[_],u);else{s=B(s);for(var w=0,P=s.length;w<P;w++)Pr(n,s[w],u,d)}return this}var be="_leaflet_events";function xt(n,s,u,d){if(arguments.length===1)pi(n),delete n[be];else if(s&&typeof s=="object")for(var _ in s)Wi(n,_,s[_],u);else if(s=B(s),arguments.length===2)pi(n,function(O){return Mt(s,O)!==-1});else for(var w=0,P=s.length;w<P;w++)Wi(n,s[w],u,d);return this}function pi(n,s){for(var u in n[be]){var d=u.split(/\d/)[0];(!s||s(d))&&Wi(n,d,null,null,u)}}var Wn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Pr(n,s,u,d){var _=s+f(u)+(d?"_"+f(d):"");if(n[be]&&n[be][_])return this;var w=function(O){return u.call(d||n,O||window.event)},P=w;!W.touchNative&&W.pointer&&s.indexOf("touch")===0?w=co(n,s,w):W.touch&&s==="dblclick"?w=fo(n,w):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(Wn[s]||s,w,W.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(w=function(O){O=O||window.event,ms(n,O)&&P(O)},n.addEventListener(Wn[s],w,!1)):n.addEventListener(s,P,!1):n.attachEvent("on"+s,w),n[be]=n[be]||{},n[be][_]=w}function Wi(n,s,u,d,_){_=_||s+f(u)+(d?"_"+f(d):"");var w=n[be]&&n[be][_];if(!w)return this;!W.touchNative&&W.pointer&&s.indexOf("touch")===0?Va(n,s,w):W.touch&&s==="dblclick"?po(n,w):"removeEventListener"in n?n.removeEventListener(Wn[s]||s,w,!1):n.detachEvent("on"+s,w),n[be][_]=null}function Ct(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ds(n){return Pr(n,"wheel",Ct),this}function $i(n){return ct(n,"mousedown touchstart dblclick contextmenu",Ct),n._leaflet_disable_click=!0,this}function Jt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Tn(n){return Jt(n),Ct(n),this}function fs(n){if(n.composedPath)return n.composedPath();for(var s=[],u=n.target;u;)s.push(u),u=u.parentNode;return s}function Ki(n,s){if(!s)return new lt(n.clientX,n.clientY);var u=je(s),d=u.boundingClientRect;return new lt((n.clientX-d.left)/u.x-s.clientLeft,(n.clientY-d.top)/u.y-s.clientTop)}var En=W.linux&&W.chrome?window.devicePixelRatio:W.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ps(n){return W.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/En:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ms(n,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==n;)u=u.parentNode}catch{return!1}return u!==n}var Qi={__proto__:null,on:ct,off:xt,stopPropagation:Ct,disableScrollPropagation:ds,disableClickPropagation:$i,preventDefault:Jt,stop:Tn,getPropagationPath:fs,getMousePosition:Ki,getWheelDelta:ps,isExternalTarget:ms,addListener:ct,removeListener:xt},_s=Nn.extend({run:function(n,s,u,d){this.stop(),this._el=n,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=Zn(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=C(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var u=this._startPos.add(this._offset.multiplyBy(n));s&&u._round(),Wt(this._el,u),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),mt=Nn.extend({options:{crs:pn,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=V(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ht(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=jn&&W.any3d&&!W.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ct(this._proxy,cs,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(ht(n),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=a({animate:u.animate},u.zoom),u.pan=a({animate:u.animate,duration:u.duration},u.pan));var d=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,u.zoom):this._tryAnimatedPan(n,u.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,u.pan&&u.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(W.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(W.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,u){var d=this.getZoomScale(s),_=this.getSize().divideBy(2),w=n instanceof lt?n:this.latLngToContainerPoint(n),P=w.subtract(_).multiplyBy(1-1/d),O=this.containerPointToLatLng(_.add(P));return this.setView(O,s,{zoom:u})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():Ot(n);var u=rt(s.paddingTopLeft||s.padding||[0,0]),d=rt(s.paddingBottomRight||s.padding||[0,0]),_=this.getBoundsZoom(n,!1,u.add(d));if(_=typeof s.maxZoom=="number"?Math.min(s.maxZoom,_):_,_===1/0)return{center:n.getCenter(),zoom:_};var w=d.subtract(u).divideBy(2),P=this.project(n.getSouthWest(),_),O=this.project(n.getNorthEast(),_),N=this.unproject(P.add(O).divideBy(2).add(w),_);return{center:N,zoom:_}},fitBounds:function(n,s){if(n=Ot(n),!n.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(n,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=rt(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new _s,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){J(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,u){if(u=u||{},u.animate===!1||!W.any3d)return this.setView(n,s,u);this._stop();var d=this.project(this.getCenter()),_=this.project(n),w=this.getSize(),P=this._zoom;n=ht(n),s=s===void 0?P:s;var O=Math.max(w.x,w.y),N=O*this.getZoomScale(P,s),U=_.distanceTo(d)||1,K=1.42,st=K*K;function _t(Xt){var xo=Xt?-1:1,Qp=Xt?N:O,Yp=N*N-O*O+xo*st*st*U*U,Jp=2*Qp*st*U,qa=Yp/Jp,Kc=Math.sqrt(qa*qa+1)-qa,Xp=Kc<1e-9?-18:Math.log(Kc);return Xp}function Pe(Xt){return(Math.exp(Xt)-Math.exp(-Xt))/2}function le(Xt){return(Math.exp(Xt)+Math.exp(-Xt))/2}function Ze(Xt){return Pe(Xt)/le(Xt)}var Le=_t(0);function Fr(Xt){return O*(le(Le)/le(Le+K*Xt))}function Zp(Xt){return O*(le(Le)*Ze(Le+K*Xt)-Pe(Le))/st}function Wp(Xt){return 1-Math.pow(1-Xt,1.5)}var $p=Date.now(),Wc=(_t(1)-Le)/K,Kp=u.duration?1e3*u.duration:1e3*Wc*.8;function $c(){var Xt=(Date.now()-$p)/Kp,xo=Wp(Xt)*Wc;Xt<=1?(this._flyToFrame=C($c,this),this._move(this.unproject(d.add(_.subtract(d).multiplyBy(Zp(xo)/U)),P),this.getScaleZoom(O/Fr(xo),P),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),$c.call(this),this},flyToBounds:function(n,s){var u=this._getBoundsCenterZoom(n,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(n){return n=Ot(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var u=this.getCenter(),d=this._limitCenter(u,this._zoom,Ot(n));return u.equals(d)||this.panTo(d,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var u=rt(s.paddingTopLeft||s.padding||[0,0]),d=rt(s.paddingBottomRight||s.padding||[0,0]),_=this.project(this.getCenter()),w=this.project(n),P=this.getPixelBounds(),O=Gt([P.min.add(u),P.max.subtract(d)]),N=O.getSize();if(!O.contains(w)){this._enforcingBounds=!0;var U=w.subtract(O.getCenter()),K=O.extend(w).getSize().subtract(N);_.x+=U.x<0?-K.x:K.x,_.y+=U.y<0?-K.y:K.y,this.panTo(this.unproject(_),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=a({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),d=s.divideBy(2).round(),_=u.divideBy(2).round(),w=d.subtract(_);return!w.x&&!w.y?this:(n.animate&&n.pan?this.panBy(w):(n.pan&&this._rawPanBy(w),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=a({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,n):navigator.geolocation.getCurrentPosition(s,u,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,u=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,u=n.coords.longitude,d=new Tt(s,u),_=d.toBounds(n.coords.accuracy*2),w=this._locateOptions;if(w.setView){var P=this.getBoundsZoom(_);this.setView(d,w.maxZoom?Math.min(P,w.maxZoom):P)}var O={latlng:d,bounds:_,timestamp:n.timestamp};for(var N in n.coords)typeof n.coords[N]=="number"&&(O[N]=n.coords[N]);this.fire("locationfound",O)}},addHandler:function(n,s){if(!s)return this;var u=this[n]=new s(this);return this._handlers.push(u),this.options[n]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Pt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Pt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var u="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),d=Et("div",u,s||this._mapPane);return n&&(this._panes[n]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),u=this.unproject(n.getTopRight());return new ne(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,u){n=Ot(n),u=rt(u||[0,0]);var d=this.getZoom()||0,_=this.getMinZoom(),w=this.getMaxZoom(),P=n.getNorthWest(),O=n.getSouthEast(),N=this.getSize().subtract(u),U=Gt(this.project(O,d),this.project(P,d)).getSize(),K=W.any3d?this.options.zoomSnap:1,st=N.x/U.x,_t=N.y/U.y,Pe=s?Math.max(st,_t):Math.min(st,_t);return d=this.getScaleZoom(Pe,d),K&&(d=Math.round(d/(K/100))*(K/100),d=s?Math.ceil(d/K)*K:Math.floor(d/K)*K),Math.max(_,Math.min(w,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new lt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var u=this._getTopLeftPoint(n,s);return new St(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(n)/u.scale(s)},getScaleZoom:function(n,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var d=u.zoom(n*u.scale(s));return isNaN(d)?1/0:d},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ht(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(rt(n),s)},layerPointToLatLng:function(n){var s=rt(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(ht(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ht(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Ot(n))},distance:function(n,s){return this.options.crs.distance(ht(n),ht(s))},containerPointToLayerPoint:function(n){return rt(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return rt(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(rt(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ht(n)))},mouseEventToContainerPoint:function(n){return Ki(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=us(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ct(s,"scroll",this._onScroll,this),this._containerId=f(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&W.any3d,J(n,"leaflet-container"+(W.touch?" leaflet-touch":"")+(W.retina?" leaflet-retina":"")+(W.ielt9?" leaflet-oldie":"")+(W.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=di(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Wt(this._mapPane,new lt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(J(n.markerPane,"leaflet-zoom-hide"),J(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,u){Wt(this._mapPane,new lt(0,0));var d=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var _=this._zoom!==s;this._moveStart(_,u)._move(n,s)._moveEnd(_),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,u,d){s===void 0&&(s=this._zoom);var _=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),d?u&&u.pinch&&this.fire("zoom",u):((_||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Wt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[f(this._container)]=this;var s=n?xt:ct;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),W.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=C(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var u=[],d,_=s==="mouseout"||s==="mouseover",w=n.target||n.srcElement,P=!1;w;){if(d=this._targets[f(w)],d&&(s==="click"||s==="preclick")&&this._draggableMoved(d)){P=!0;break}if(d&&d.listens(s,!0)&&(_&&!ms(w,n)||(u.push(d),_))||w===this._container)break;w=w.parentNode}return!u.length&&!P&&!_&&this.listens(s,!0)&&(u=[this]),u},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var u=n.type;u==="mousedown"&&hs(s),this._fireDOMEvent(n,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,u){if(n.type==="click"){var d=a({},n);d.type="preclick",this._fireDOMEvent(d,d.type,u)}var _=this._findEventTargets(n,s);if(u){for(var w=[],P=0;P<u.length;P++)u[P].listens(s,!0)&&w.push(u[P]);_=w.concat(_)}if(_.length){s==="contextmenu"&&Jt(n);var O=_[0],N={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var U=O.getLatLng&&(!O._radius||O._radius<=10);N.containerPoint=U?this.latLngToContainerPoint(O.getLatLng()):this.mouseEventToContainerPoint(n),N.layerPoint=this.containerPointToLayerPoint(N.containerPoint),N.latlng=U?O.getLatLng():this.layerPointToLatLng(N.layerPoint)}for(P=0;P<_.length;P++)if(_[P].fire(s,N,!0),N.originalEvent._stopped||_[P].options.bubblingMouseEvents===!1&&Mt(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return Zn(this._mapPane)||new lt(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var u=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var u=this.getSize()._divideBy(2);return this.project(n,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,u){var d=this._getNewPixelOrigin(u,s);return this.project(n,s)._subtract(d)},_latLngBoundsToNewLayerBounds:function(n,s,u){var d=this._getNewPixelOrigin(u,s);return Gt([this.project(n.getSouthWest(),s)._subtract(d),this.project(n.getNorthWest(),s)._subtract(d),this.project(n.getSouthEast(),s)._subtract(d),this.project(n.getNorthEast(),s)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,u){if(!u)return n;var d=this.project(n,s),_=this.getSize().divideBy(2),w=new St(d.subtract(_),d.add(_)),P=this._getBoundsOffset(w,u,s);return Math.abs(P.x)<=1&&Math.abs(P.y)<=1?n:this.unproject(d.add(P),s)},_limitOffset:function(n,s){if(!s)return n;var u=this.getPixelBounds(),d=new St(u.min.add(n),u.max.add(n));return n.add(this._getBoundsOffset(d,s))},_getBoundsOffset:function(n,s,u){var d=Gt(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),_=d.min.subtract(n.min),w=d.max.subtract(n.max),P=this._rebound(_.x,-w.x),O=this._rebound(_.y,-w.y);return new lt(P,O)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),u=this.getMaxZoom(),d=W.any3d?this.options.zoomSnap:1;return d&&(n=Math.round(n/d)*d),Math.max(s,Math.min(u,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Vt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var u=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var n=this._proxy=Et("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var u=qi,d=this._proxy.style[u];Gn(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),d===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Pt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();Gn(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(s),_=this._getCenterOffset(n)._divideBy(1-1/d);return u.animate!==!0&&!this.getSize().contains(_)?!1:(C(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,u,d){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,J(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Vt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ar(n,s){return new mt(n,s)}var Ce=pt.extend({options:{position:"topright"},initialize:function(n){V(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),u=this.getPosition(),d=n._controlCorners[u];return J(s,"leaflet-control"),u.indexOf("bottom")!==-1?d.insertBefore(s,d.firstChild):d.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Pt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),In=function(n){return new Ce(n)};mt.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",u=this._controlContainer=Et("div",s+"control-container",this._container);function d(_,w){var P=s+_+" "+s+w;n[_+w]=Et("div",P,u)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Pt(this._controlCorners[n]);Pt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var go=Ce.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,u,d){return u<d?-1:d<u?1:0}},initialize:function(n,s,u){V(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in n)this._addLayer(n[d],d);for(d in s)this._addLayer(s[d],d,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Ce.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(f(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){J(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(J(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Vt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Vt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=Et("div",n),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),$i(s),ds(s);var d=this._section=Et("section",n+"-list");u&&(this._map.on("click",this.collapse,this),ct(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var _=this._layersLink=Et("a",n+"-toggle",s);_.href="#",_.title="Layers",_.setAttribute("role","button"),ct(_,{keydown:function(w){w.keyCode===13&&this._expandSafely()},click:function(w){Jt(w),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=Et("div",n+"-base",d),this._separator=Et("div",n+"-separator",d),this._overlaysList=Et("div",n+"-overlays",d),s.appendChild(d)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&f(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,u){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(d,_){return this.options.sortFunction(d.layer,_.layer,d.name,_.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ie(this._baseLayersList),Ie(this._overlaysList),this._layerControlInputs=[];var n,s,u,d,_=0;for(u=0;u<this._layers.length;u++)d=this._layers[u],this._addItem(d),s=s||d.overlay,n=n||!d.overlay,_+=d.overlay?0:1;return this.options.hideSingleBase&&(n=n&&_>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(f(n.target)),u=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(n,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=u,d.firstChild},_addItem:function(n){var s=document.createElement("label"),u=this._map.hasLayer(n.layer),d;n.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=u):d=this._createRadioElement("leaflet-base-layers_"+f(this),u),this._layerControlInputs.push(d),d.layerId=f(n.layer),ct(d,"click",this._onInputClick,this);var _=document.createElement("span");_.innerHTML=" "+n.name;var w=document.createElement("span");s.appendChild(w),w.appendChild(d),w.appendChild(_);var P=n.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,u,d=[],_=[];this._handlingClick=!0;for(var w=n.length-1;w>=0;w--)s=n[w],u=this._getLayer(s.layerId).layer,s.checked?d.push(u):s.checked||_.push(u);for(w=0;w<_.length;w++)this._map.hasLayer(_[w])&&this._map.removeLayer(_[w]);for(w=0;w<d.length;w++)this._map.hasLayer(d[w])||this._map.addLayer(d[w]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,u,d=this._map.getZoom(),_=n.length-1;_>=0;_--)s=n[_],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&d<u.options.minZoom||u.options.maxZoom!==void 0&&d>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ct(n,"click",Jt),this.expand();var s=this;setTimeout(function(){xt(n,"click",Jt),s._preventClick=!1})}}),yo=function(n,s,u){return new go(n,s,u)},$n=Ce.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",u=Et("div",s+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,u,d,_){var w=Et("a",u,d);return w.innerHTML=n,w.href="#",w.title=s,w.setAttribute("role","button"),w.setAttribute("aria-label",s),$i(w),ct(w,"click",Tn),ct(w,"click",_,this),ct(w,"click",this._refocusOnMap,this),w},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";Vt(this._zoomInButton,s),Vt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(J(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(J(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});mt.mergeOptions({zoomControl:!0}),mt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new $n,this.addControl(this.zoomControl))});var vo=function(n){return new $n(n)},gs=Ce.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",u=Et("div",s),d=this.options;return this._addScales(d,s+"-line",u),n.on(d.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),u},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,u){n.metric&&(this._mScale=Et("div",s,u)),n.imperial&&(this._iScale=Et("div",s,u))},_update:function(){var n=this._map,s=n.getSize().y/2,u=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/n)},_updateImperial:function(n){var s=n*3.2808399,u,d,_;s>5280?(u=s/5280,d=this._getRoundNum(u),this._updateScale(this._iScale,d+" mi",d/u)):(_=this._getRoundNum(s),this._updateScale(this._iScale,_+" ft",_/s))},_updateScale:function(n,s,u){n.style.width=Math.round(this.options.maxWidth*u)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),u=n/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),ys=function(n){return new gs(n)},vs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Sr=Ce.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(W.inlineSvg?vs+" ":"")+"Leaflet</a>"},initialize:function(n){V(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Et("div","leaflet-control-attribution"),$i(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),n.length&&u.push(n.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});mt.mergeOptions({attributionControl:!0}),mt.addInitHook(function(){this.options.attributionControl&&new Sr().addTo(this)});var Cr=function(n){return new Sr(n)};Ce.Layers=go,Ce.Zoom=$n,Ce.Scale=gs,Ce.Attribution=Sr,In.layers=yo,In.zoom=vo,In.scale=ys,In.attribution=Cr;var Me=pt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Me.addTo=function(n,s){return n.addHandler(s,this),this};var wo={Events:Yt},bn=W.touch?"touchstart mousedown":"mousedown",sn=Nn.extend({options:{clickTolerance:3},initialize:function(n,s,u,d){V(this,d),this._element=n,this._dragStartTarget=s||n,this._preventOutline=u},enable:function(){this._enabled||(ct(this._dragStartTarget,bn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(sn._dragging===this&&this.finishDrag(!0),xt(this._dragStartTarget,bn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Gi(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){sn._dragging===this&&this.finishDrag();return}if(!(sn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(sn._dragging=this,this._preventOutline&&hs(this._element),Er(),rn(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,u=_o(this._element);this._startPoint=new lt(s.clientX,s.clientY),this._startPos=Zn(this._element),this._parentScale=je(u);var d=n.type==="mousedown";ct(document,d?"mousemove":"touchmove",this._onMove,this),ct(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,u=new lt(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,Jt(n),this._moved||(this.fire("dragstart"),this._moved=!0,J(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),J(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Wt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Vt(document.body,"leaflet-dragging"),this._lastTarget&&(Vt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),xt(document,"mousemove touchmove",this._onMove,this),xt(document,"mouseup touchend touchcancel",this._onUp,this),Ir(),xe();var s=this._moved&&this._moving;this._moving=!1,sn._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function ws(n,s,u){var d,_=[1,4,2,8],w,P,O,N,U,K,st,_t;for(w=0,K=n.length;w<K;w++)n[w]._code=D(n[w],s);for(O=0;O<4;O++){for(st=_[O],d=[],w=0,K=n.length,P=K-1;w<K;P=w++)N=n[w],U=n[P],N._code&st?U._code&st||(_t=M(U,N,st,s,u),_t._code=D(_t,s),d.push(_t)):(U._code&st&&(_t=M(U,N,st,s,u),_t._code=D(_t,s),d.push(_t)),d.push(N));n=d}return n}function Ts(n,s){var u,d,_,w,P,O,N,U,K;if(!n||n.length===0)throw new Error("latlngs not passed");At(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var st=ht([0,0]),_t=Ot(n),Pe=_t.getNorthWest().distanceTo(_t.getSouthWest())*_t.getNorthEast().distanceTo(_t.getNorthWest());Pe<1700&&(st=Lr(n));var le=n.length,Ze=[];for(u=0;u<le;u++){var Le=ht(n[u]);Ze.push(s.project(ht([Le.lat-st.lat,Le.lng-st.lng])))}for(O=N=U=0,u=0,d=le-1;u<le;d=u++)_=Ze[u],w=Ze[d],P=_.y*w.x-w.y*_.x,N+=(_.x+w.x)*P,U+=(_.y+w.y)*P,O+=P*3;O===0?K=Ze[0]:K=[N/O,U/O];var Fr=s.unproject(rt(K));return ht([Fr.lat+st.lat,Fr.lng+st.lng])}function Lr(n){for(var s=0,u=0,d=0,_=0;_<n.length;_++){var w=ht(n[_]);s+=w.lat,u+=w.lng,d++}return ht([s/d,u/d])}var Rr={__proto__:null,clipPolygon:ws,polygonCenter:Ts,centroid:Lr};function _e(n,s){if(!s||!n.length)return n.slice();var u=s*s;return n=p(n,u),n=mi(n,u),n}function Es(n,s,u){return Math.sqrt(ut(n,s,u,!0))}function To(n,s,u){return ut(n,s,u)}function mi(n,s){var u=n.length,d=typeof Uint8Array<"u"?Uint8Array:Array,_=new d(u);_[0]=_[u-1]=1,c(n,_,s,0,u-1);var w,P=[];for(w=0;w<u;w++)_[w]&&P.push(n[w]);return P}function c(n,s,u,d,_){var w=0,P,O,N;for(O=d+1;O<=_-1;O++)N=ut(n[O],n[d],n[_],!0),N>w&&(P=O,w=N);w>u&&(s[P]=1,c(n,s,u,d,P),c(n,s,u,P,_))}function p(n,s){for(var u=[n[0]],d=1,_=0,w=n.length;d<w;d++)Z(n[d],n[_])>s&&(u.push(n[d]),_=d);return _<w-1&&u.push(n[w-1]),u}var g;function T(n,s,u,d,_){var w=d?g:D(n,u),P=D(s,u),O,N,U;for(g=P;;){if(!(w|P))return[n,s];if(w&P)return!1;O=w||P,N=M(n,s,O,u,_),U=D(N,u),O===w?(n=N,w=U):(s=N,P=U)}}function M(n,s,u,d,_){var w=s.x-n.x,P=s.y-n.y,O=d.min,N=d.max,U,K;return u&8?(U=n.x+w*(N.y-n.y)/P,K=N.y):u&4?(U=n.x+w*(O.y-n.y)/P,K=O.y):u&2?(U=N.x,K=n.y+P*(N.x-n.x)/w):u&1&&(U=O.x,K=n.y+P*(O.x-n.x)/w),new lt(U,K,_)}function D(n,s){var u=0;return n.x<s.min.x?u|=1:n.x>s.max.x&&(u|=2),n.y<s.min.y?u|=4:n.y>s.max.y&&(u|=8),u}function Z(n,s){var u=s.x-n.x,d=s.y-n.y;return u*u+d*d}function ut(n,s,u,d){var _=s.x,w=s.y,P=u.x-_,O=u.y-w,N=P*P+O*O,U;return N>0&&(U=((n.x-_)*P+(n.y-w)*O)/N,U>1?(_=u.x,w=u.y):U>0&&(_+=P*U,w+=O*U)),P=n.x-_,O=n.y-w,d?P*P+O*O:new lt(_,w)}function At(n){return!et(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Lt(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),At(n)}function Kt(n,s){var u,d,_,w,P,O,N,U;if(!n||n.length===0)throw new Error("latlngs not passed");At(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var K=ht([0,0]),st=Ot(n),_t=st.getNorthWest().distanceTo(st.getSouthWest())*st.getNorthEast().distanceTo(st.getNorthWest());_t<1700&&(K=Lr(n));var Pe=n.length,le=[];for(u=0;u<Pe;u++){var Ze=ht(n[u]);le.push(s.project(ht([Ze.lat-K.lat,Ze.lng-K.lng])))}for(u=0,d=0;u<Pe-1;u++)d+=le[u].distanceTo(le[u+1])/2;if(d===0)U=le[0];else for(u=0,w=0;u<Pe-1;u++)if(P=le[u],O=le[u+1],_=P.distanceTo(O),w+=_,w>d){N=(w-d)/_,U=[O.x-N*(O.x-P.x),O.y-N*(O.y-P.y)];break}var Le=s.unproject(rt(U));return ht([Le.lat+K.lat,Le.lng+K.lng])}var qe={__proto__:null,simplify:_e,pointToSegmentDistance:Es,closestPointOnSegment:To,clipSegment:T,_getEdgeIntersection:M,_getBitCode:D,_sqClosestPointOnSegment:ut,isFlat:At,_flat:Lt,polylineCenter:Kt},on={project:function(n){return new lt(n.lng,n.lat)},unproject:function(n){return new Tt(n.y,n.x)},bounds:new St([-180,-90],[180,90])},Ge={R:6378137,R_MINOR:6356752314245179e-9,bounds:new St([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,u=this.R,d=n.lat*s,_=this.R_MINOR/u,w=Math.sqrt(1-_*_),P=w*Math.sin(d),O=Math.tan(Math.PI/4-d/2)/Math.pow((1-P)/(1+P),w/2);return d=-u*Math.log(Math.max(O,1e-10)),new lt(n.lng*s*u,d)},unproject:function(n){for(var s=180/Math.PI,u=this.R,d=this.R_MINOR/u,_=Math.sqrt(1-d*d),w=Math.exp(-n.y/u),P=Math.PI/2-2*Math.atan(w),O=0,N=.1,U;O<15&&Math.abs(N)>1e-7;O++)U=_*Math.sin(P),U=Math.pow((1-U)/(1+U),_/2),N=Math.PI/2-2*Math.atan(w*U)-P,P+=N;return new Tt(P*s,n.x*s/u)}},Pn={__proto__:null,LonLat:on,Mercator:Ge,SphericalMercator:Je},kr=a({},Ee,{code:"EPSG:3395",projection:Ge,transformation:function(){var n=.5/(Math.PI*Ge.R);return Xe(n,.5,-n,.5)}()}),xr=a({},Ee,{code:"EPSG:4326",projection:on,transformation:Xe(1/180,1,-1/180,.5)}),bp=a({},he,{projection:on,transformation:Xe(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var u=s.lng-n.lng,d=s.lat-n.lat;return Math.sqrt(u*u+d*d)},infinite:!0});he.Earth=Ee,he.EPSG3395=kr,he.EPSG3857=pn,he.EPSG900913=Vi,he.EPSG4326=xr,he.Simple=bp;var an=Nn.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[f(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[f(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});mt.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=f(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=f(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return f(n)in this._layers},eachLayer:function(n,s){for(var u in this._layers)n.call(s,this._layers[u]);return this},_addLayers:function(n){n=n?et(n)?n:[n]:[];for(var s=0,u=n.length;s<u;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[f(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=f(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,u=this._getZoomSpan();for(var d in this._zoomBoundLayers){var _=this._zoomBoundLayers[d].options;n=_.minZoom===void 0?n:Math.min(n,_.minZoom),s=_.maxZoom===void 0?s:Math.max(s,_.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Mr=an.extend({initialize:function(n,s){V(this,s),this._layers={};var u,d;if(n)for(u=0,d=n.length;u<d;u++)this.addLayer(n[u])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),u,d;for(u in this._layers)d=this._layers[u],d[n]&&d[n].apply(d,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var u in this._layers)n.call(s,this._layers[u]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return f(n)}}),Pp=function(n,s){return new Mr(n,s)},Kn=Mr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Mr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Mr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new ne;for(var s in this._layers){var u=this._layers[s];n.extend(u.getBounds?u.getBounds():u.getLatLng())}return n}}),Ap=function(n,s){return new Kn(n,s)},Or=pt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){V(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var u=this._getIconUrl(n);if(!u){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(d,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(n,s){var u=this.options,d=u[s+"Size"];typeof d=="number"&&(d=[d,d]);var _=rt(d),w=rt(s==="shadow"&&u.shadowAnchor||u.iconAnchor||_&&_.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(u.className||""),w&&(n.style.marginLeft=-w.x+"px",n.style.marginTop=-w.y+"px"),_&&(n.style.width=_.x+"px",n.style.height=_.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return W.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Sp(n){return new Or(n)}var Is=Or.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Is.imagePath!="string"&&(Is.imagePath=this._detectIconPath()),(this.options.imagePath||Is.imagePath)+Or.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(u,d,_){var w=d.exec(u);return w&&w[_]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Et("div","leaflet-default-icon-path",document.body),s=di(n,"background-image")||di(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),Cc=Me.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new sn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),J(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Vt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,u=s._map,d=this._marker.options.autoPanSpeed,_=this._marker.options.autoPanPadding,w=Zn(s._icon),P=u.getPixelBounds(),O=u.getPixelOrigin(),N=Gt(P.min._subtract(O).add(_),P.max._subtract(O).subtract(_));if(!N.contains(w)){var U=rt((Math.max(N.max.x,w.x)-N.max.x)/(P.max.x-N.max.x)-(Math.min(N.min.x,w.x)-N.min.x)/(P.min.x-N.min.x),(Math.max(N.max.y,w.y)-N.max.y)/(P.max.y-N.max.y)-(Math.min(N.min.y,w.y)-N.min.y)/(P.min.y-N.min.y)).multiplyBy(d);u.panBy(U,{animate:!1}),this._draggable._newPos._add(U),this._draggable._startPos._add(U),Wt(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=C(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=C(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,u=s._shadow,d=Zn(s._icon),_=s._map.layerPointToLatLng(d);u&&Wt(u,d),s._latlng=_,n.latlng=_,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Eo=an.extend({options:{icon:new Is,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){V(this,s),this._latlng=ht(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=ht(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=n.icon.createIcon(this._icon),d=!1;u!==this._icon&&(this._icon&&this._removeIcon(),d=!0,n.title&&(u.title=n.title),u.tagName==="IMG"&&(u.alt=n.alt||"")),J(u,s),n.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ct(u,"focus",this._panOnFocus,this);var _=n.icon.createShadow(this._shadow),w=!1;_!==this._shadow&&(this._removeShadow(),w=!0),_&&(J(_,s),_.alt=""),this._shadow=_,n.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),_&&w&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&xt(this._icon,"focus",this._panOnFocus,this),Pt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Pt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Wt(this._icon,n),this._shadow&&Wt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(J(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Cc)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Cc(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Se(this._icon,n),this._shadow&&Se(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,u=s.iconSize?rt(s.iconSize):rt(0,0),d=s.iconAnchor?rt(s.iconAnchor):rt(0,0);n.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:u.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Cp(n,s){return new Eo(n,s)}var _i=an.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return V(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Io=_i.extend({options:{fill:!0,radius:10},initialize:function(n,s){V(this,s),this._latlng=ht(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=ht(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return _i.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,u=this._clickTolerance(),d=[n+u,s+u];this._pxBounds=new St(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Lp(n,s){return new Io(n,s)}var za=Io.extend({initialize:function(n,s,u){if(typeof s=="number"&&(s=a({},u,{radius:s})),V(this,s),this._latlng=ht(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new ne(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:_i.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,u=this._map,d=u.options.crs;if(d.distance===Ee.distance){var _=Math.PI/180,w=this._mRadius/Ee.R/_,P=u.project([s+w,n]),O=u.project([s-w,n]),N=P.add(O).divideBy(2),U=u.unproject(N).lat,K=Math.acos((Math.cos(w*_)-Math.sin(s*_)*Math.sin(U*_))/(Math.cos(s*_)*Math.cos(U*_)))/_;(isNaN(K)||K===0)&&(K=w/Math.cos(Math.PI/180*s)),this._point=N.subtract(u.getPixelOrigin()),this._radius=isNaN(K)?0:N.x-u.project([U,n-K]).x,this._radiusY=N.y-P.y}else{var st=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(st).x}this._updateBounds()}});function Rp(n,s,u){return new za(n,s,u)}var Qn=_i.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){V(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,u=null,d=ut,_,w,P=0,O=this._parts.length;P<O;P++)for(var N=this._parts[P],U=1,K=N.length;U<K;U++){_=N[U-1],w=N[U];var st=d(n,_,w,!0);st<s&&(s=st,u=d(n,_,w))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Kt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=ht(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new ne,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return At(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],u=At(n),d=0,_=n.length;d<_;d++)u?(s[d]=ht(n[d]),this._bounds.extend(s[d])):s[d]=this._convertLatLngs(n[d]);return s},_project:function(){var n=new St;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new lt(n,n);this._rawPxBounds&&(this._pxBounds=new St([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,u){var d=n[0]instanceof Tt,_=n.length,w,P;if(d){for(P=[],w=0;w<_;w++)P[w]=this._map.latLngToLayerPoint(n[w]),u.extend(P[w]);s.push(P)}else for(w=0;w<_;w++)this._projectLatlngs(n[w],s,u)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,d,_,w,P,O,N;for(u=0,_=0,w=this._rings.length;u<w;u++)for(N=this._rings[u],d=0,P=N.length;d<P-1;d++)O=T(N[d],N[d+1],n,d,!0),O&&(s[_]=s[_]||[],s[_].push(O[0]),(O[1]!==N[d+1]||d===P-2)&&(s[_].push(O[1]),_++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,u=0,d=n.length;u<d;u++)n[u]=_e(n[u],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var u,d,_,w,P,O,N=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(u=0,w=this._parts.length;u<w;u++)for(O=this._parts[u],d=0,P=O.length,_=P-1;d<P;_=d++)if(!(!s&&d===0)&&Es(n,O[_],O[d])<=N)return!0;return!1}});function kp(n,s){return new Qn(n,s)}Qn._flat=Lt;var Dr=Qn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ts(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=Qn.prototype._convertLatLngs.call(this,n),u=s.length;return u>=2&&s[0]instanceof Tt&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(n){Qn.prototype._setLatLngs.call(this,n),At(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return At(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,u=new lt(s,s);if(n=new St(n.min.subtract(u),n.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,_=this._rings.length,w;d<_;d++)w=ws(this._rings[d],n,!0),w.length&&this._parts.push(w)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,u,d,_,w,P,O,N,U;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(w=0,N=this._parts.length;w<N;w++)for(u=this._parts[w],P=0,U=u.length,O=U-1;P<U;O=P++)d=u[P],_=u[O],d.y>n.y!=_.y>n.y&&n.x<(_.x-d.x)*(n.y-d.y)/(_.y-d.y)+d.x&&(s=!s);return s||Qn.prototype._containsPoint.call(this,n,!0)}});function xp(n,s){return new Dr(n,s)}var Yn=Kn.extend({initialize:function(n,s){V(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=et(n)?n:n.features,u,d,_;if(s){for(u=0,d=s.length;u<d;u++)_=s[u],(_.geometries||_.geometry||_.features||_.coordinates)&&this.addData(_);return this}var w=this.options;if(w.filter&&!w.filter(n))return this;var P=bo(n,w);return P?(P.feature=So(n),P.defaultOptions=P.options,this.resetStyle(P),w.onEachFeature&&w.onEachFeature(n,P),this.addLayer(P)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=a({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function bo(n,s){var u=n.type==="Feature"?n.geometry:n,d=u?u.coordinates:null,_=[],w=s&&s.pointToLayer,P=s&&s.coordsToLatLng||Ua,O,N,U,K;if(!d&&!u)return null;switch(u.type){case"Point":return O=P(d),Lc(w,n,O,s);case"MultiPoint":for(U=0,K=d.length;U<K;U++)O=P(d[U]),_.push(Lc(w,n,O,s));return new Kn(_);case"LineString":case"MultiLineString":return N=Po(d,u.type==="LineString"?0:1,P),new Qn(N,s);case"Polygon":case"MultiPolygon":return N=Po(d,u.type==="Polygon"?1:2,P),new Dr(N,s);case"GeometryCollection":for(U=0,K=u.geometries.length;U<K;U++){var st=bo({geometry:u.geometries[U],type:"Feature",properties:n.properties},s);st&&_.push(st)}return new Kn(_);case"FeatureCollection":for(U=0,K=u.features.length;U<K;U++){var _t=bo(u.features[U],s);_t&&_.push(_t)}return new Kn(_);default:throw new Error("Invalid GeoJSON object.")}}function Lc(n,s,u,d){return n?n(s,u):new Eo(u,d&&d.markersInheritOptions&&d)}function Ua(n){return new Tt(n[1],n[0],n[2])}function Po(n,s,u){for(var d=[],_=0,w=n.length,P;_<w;_++)P=s?Po(n[_],s-1,u):(u||Ua)(n[_]),d.push(P);return d}function Ha(n,s){return n=ht(n),n.alt!==void 0?[E(n.lng,s),E(n.lat,s),E(n.alt,s)]:[E(n.lng,s),E(n.lat,s)]}function Ao(n,s,u,d){for(var _=[],w=0,P=n.length;w<P;w++)_.push(s?Ao(n[w],At(n[w])?0:s-1,u,d):Ha(n[w],d));return!s&&u&&_.length>0&&_.push(_[0].slice()),_}function Nr(n,s){return n.feature?a({},n.feature,{geometry:s}):So(s)}function So(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var ja={toGeoJSON:function(n){return Nr(this,{type:"Point",coordinates:Ha(this.getLatLng(),n)})}};Eo.include(ja),za.include(ja),Io.include(ja),Qn.include({toGeoJSON:function(n){var s=!At(this._latlngs),u=Ao(this._latlngs,s?1:0,!1,n);return Nr(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),Dr.include({toGeoJSON:function(n){var s=!At(this._latlngs),u=s&&!At(this._latlngs[0]),d=Ao(this._latlngs,u?2:s?1:0,!0,n);return s||(d=[d]),Nr(this,{type:(u?"Multi":"")+"Polygon",coordinates:d})}}),Mr.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(n).geometry.coordinates)}),Nr(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var u=s==="GeometryCollection",d=[];return this.eachLayer(function(_){if(_.toGeoJSON){var w=_.toGeoJSON(n);if(u)d.push(w.geometry);else{var P=So(w);P.type==="FeatureCollection"?d.push.apply(d,P.features):d.push(P)}}}),u?Nr(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function Rc(n,s){return new Yn(n,s)}var Mp=Rc,Co=an.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,u){this._url=n,this._bounds=Ot(s),V(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(J(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Pt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Ue(this._image),this},bringToBack:function(){return this._map&&He(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Ot(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:Et("img");if(J(s,"leaflet-image-layer"),this._zoomAnimated&&J(s,"leaflet-zoom-animated"),this.options.className&&J(s,this.options.className),s.onselectstart=y,s.onmousemove=y,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Gn(this._image,u,s)},_reset:function(){var n=this._image,s=new St(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();Wt(n,s.min),n.style.width=u.x+"px",n.style.height=u.y+"px"},_updateOpacity:function(){Se(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Op=function(n,s,u){return new Co(n,s,u)},kc=Co.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:Et("video");if(J(s,"leaflet-image-layer"),this._zoomAnimated&&J(s,"leaflet-zoom-animated"),this.options.className&&J(s,this.options.className),s.onselectstart=y,s.onmousemove=y,s.onloadeddata=l(this.fire,this,"load"),n){for(var u=s.getElementsByTagName("source"),d=[],_=0;_<u.length;_++)d.push(u[_].src);this._url=u.length>0?d:[s.src];return}et(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var w=0;w<this._url.length;w++){var P=Et("source");P.src=this._url[w],s.appendChild(P)}}});function Dp(n,s,u){return new kc(n,s,u)}var xc=Co.extend({_initImage:function(){var n=this._image=this._url;J(n,"leaflet-image-layer"),this._zoomAnimated&&J(n,"leaflet-zoom-animated"),this.options.className&&J(n,this.options.className),n.onselectstart=y,n.onmousemove=y}});function Np(n,s,u){return new xc(n,s,u)}var An=an.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof Tt||et(n))?(this._latlng=ht(n),V(this,s)):(V(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Se(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Se(this._container,1),this.bringToFront(),this.options.interactive&&(J(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Se(this._container,0),this._removeTimeout=setTimeout(l(Pt,void 0,this._container),200)):Pt(this._container),this.options.interactive&&(Vt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ht(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ue(this._container),this},bringToBack:function(){return this._map&&He(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof Kn){s=null;var u=this._source._layers;for(var d in u)if(u[d]._map){s=u[d];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=rt(this.options.offset),u=this._getAnchor();this._zoomAnimated?Wt(this._container,n.add(u)):s=s.add(n).add(u);var d=this._containerBottom=-s.y,_=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=d+"px",this._container.style.left=_+"px"}},_getAnchor:function(){return[0,0]}});mt.include({_initOverlay:function(n,s,u,d){var _=s;return _ instanceof n||(_=new n(d).setContent(s)),u&&_.setLatLng(u),_}}),an.include({_initOverlay:function(n,s,u,d){var _=u;return _ instanceof n?(V(_,d),_._source=this):(_=s&&!d?s:new n(d,this),_.setContent(u)),_}});var Lo=An.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,An.prototype.openOn.call(this,n)},onAdd:function(n){An.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof _i||this._source.on("preclick",Ct))},onRemove:function(n){An.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof _i||this._source.off("preclick",Ct))},getEvents:function(){var n=An.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=Et("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=Et("div",n+"-content-wrapper",s);if(this._contentNode=Et("div",n+"-content",u),$i(s),ds(this._contentNode),ct(s,"contextmenu",Ct),this._tipContainer=Et("div",n+"-tip-container",s),this._tip=Et("div",n+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=Et("a",n+"-close-button",s);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',ct(d,"click",function(_){Jt(_),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var u=n.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var d=n.offsetHeight,_=this.options.maxHeight,w="leaflet-popup-scrolled";_&&d>_?(s.height=_+"px",J(n,w)):Vt(n,w),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),u=this._getAnchor();Wt(this._container,s.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(di(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+s,d=this._containerWidth,_=new lt(this._containerLeft,-u-this._containerBottom);_._add(Zn(this._container));var w=n.layerPointToContainerPoint(_),P=rt(this.options.autoPanPadding),O=rt(this.options.autoPanPaddingTopLeft||P),N=rt(this.options.autoPanPaddingBottomRight||P),U=n.getSize(),K=0,st=0;w.x+d+N.x>U.x&&(K=w.x+d-U.x+N.x),w.x-K-O.x<0&&(K=w.x-O.x),w.y+u+N.y>U.y&&(st=w.y+u-U.y+N.y),w.y-st-O.y<0&&(st=w.y-O.y),(K||st)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([K,st]))}},_getAnchor:function(){return rt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Vp=function(n,s){return new Lo(n,s)};mt.mergeOptions({closePopupOnClick:!0}),mt.include({openPopup:function(n,s,u){return this._initOverlay(Lo,n,s,u).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),an.include({bindPopup:function(n,s){return this._popup=this._initOverlay(Lo,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Kn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Tn(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof _i)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Ro=An.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){An.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){An.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=An.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Et("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,u,d=this._map,_=this._container,w=d.latLngToContainerPoint(d.getCenter()),P=d.layerPointToContainerPoint(n),O=this.options.direction,N=_.offsetWidth,U=_.offsetHeight,K=rt(this.options.offset),st=this._getAnchor();O==="top"?(s=N/2,u=U):O==="bottom"?(s=N/2,u=0):O==="center"?(s=N/2,u=U/2):O==="right"?(s=0,u=U/2):O==="left"?(s=N,u=U/2):P.x<w.x?(O="right",s=0,u=U/2):(O="left",s=N+(K.x+st.x)*2,u=U/2),n=n.subtract(rt(s,u,!0)).add(K).add(st),Vt(_,"leaflet-tooltip-right"),Vt(_,"leaflet-tooltip-left"),Vt(_,"leaflet-tooltip-top"),Vt(_,"leaflet-tooltip-bottom"),J(_,"leaflet-tooltip-"+O),Wt(_,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Se(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return rt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Fp=function(n,s){return new Ro(n,s)};mt.include({openTooltip:function(n,s,u){return this._initOverlay(Ro,n,s,u).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),an.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ro,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[s](u),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Kn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(ct(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ct(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,u,d;this._tooltip.options.sticky&&n.originalEvent&&(u=this._map.mouseEventToContainerPoint(n.originalEvent),d=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(s)}});var Mc=Or.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Ie(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var d=rt(u.bgPos);s.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Bp(n){return new Mc(n)}Or.Default=Is;var bs=an.extend({options:{tileSize:256,opacity:1,updateWhenIdle:W.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){V(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Pt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ue(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(He(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof lt?n:new lt(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,u=-n(-1/0,1/0),d=0,_=s.length,w;d<_;d++)w=s[d].style.zIndex,s[d]!==this._container&&w&&(u=n(u,+w));isFinite(u)&&(this.options.zIndex=u+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!W.ielt9){Se(this._container,this.options.opacity);var n=+new Date,s=!1,u=!1;for(var d in this._tiles){var _=this._tiles[d];if(!(!_.current||!_.loaded)){var w=Math.min(1,(n-_.loaded)/200);Se(_.el,w),w<1?s=!0:(_.active?u=!0:this._onOpaqueTile(_),_.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this))}},_onOpaqueTile:y,_initContainer:function(){this._container||(this._container=Et("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===n?(this._levels[u].el.style.zIndex=s-Math.abs(n-u),this._onUpdateLevel(u)):(Pt(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var d=this._levels[n],_=this._map;return d||(d=this._levels[n]={},d.el=Et("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=s,d.origin=_.project(_.unproject(_.getPixelOrigin()),n).round(),d.zoom=n,this._setZoomTransform(d,_.getCenter(),_.getZoom()),y(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:y,_onRemoveLevel:y,_onCreateLevel:y,_pruneTiles:function(){if(this._map){var n,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var d=s.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Pt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,u,d){var _=Math.floor(n/2),w=Math.floor(s/2),P=u-1,O=new lt(+_,+w);O.z=+P;var N=this._tileCoordsToKey(O),U=this._tiles[N];return U&&U.active?(U.retain=!0,!0):(U&&U.loaded&&(U.retain=!0),P>d?this._retainParent(_,w,P,d):!1)},_retainChildren:function(n,s,u,d){for(var _=2*n;_<2*n+2;_++)for(var w=2*s;w<2*s+2;w++){var P=new lt(_,w);P.z=u+1;var O=this._tileCoordsToKey(P),N=this._tiles[O];if(N&&N.active){N.retain=!0;continue}else N&&N.loaded&&(N.retain=!0);u+1<d&&this._retainChildren(_,w,u+1,d)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,u,d){var _=Math.round(s);this.options.maxZoom!==void 0&&_>this.options.maxZoom||this.options.minZoom!==void 0&&_<this.options.minZoom?_=void 0:_=this._clampZoom(_);var w=this.options.updateWhenZooming&&_!==this._tileZoom;(!d||w)&&(this._tileZoom=_,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),_!==void 0&&this._update(n),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],n,s)},_setZoomTransform:function(n,s,u){var d=this._map.getZoomScale(u,n.zoom),_=n.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(s,u)).round();W.any3d?Gn(n.el,_,d):Wt(n.el,_)},_resetGrid:function(){var n=this._map,s=n.options.crs,u=this._tileSize=this.getTileSize(),d=this._tileZoom,_=this._map.getPixelWorldBounds(this._tileZoom);_&&(this._globalTileRange=this._pxBoundsToTileRange(_)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],d).x/u.x),Math.ceil(n.project([0,s.wrapLng[1]],d).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],d).y/u.x),Math.ceil(n.project([s.wrapLat[1],0],d).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),d=s.getZoomScale(u,this._tileZoom),_=s.project(n,this._tileZoom).floor(),w=s.getSize().divideBy(d*2);return new St(_.subtract(w),_.add(w))},_update:function(n){var s=this._map;if(s){var u=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(n),_=this._pxBoundsToTileRange(d),w=_.getCenter(),P=[],O=this.options.keepBuffer,N=new St(_.getBottomLeft().subtract([O,-O]),_.getTopRight().add([O,-O]));if(!(isFinite(_.min.x)&&isFinite(_.min.y)&&isFinite(_.max.x)&&isFinite(_.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var U in this._tiles){var K=this._tiles[U].coords;(K.z!==this._tileZoom||!N.contains(new lt(K.x,K.y)))&&(this._tiles[U].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(n,u);return}for(var st=_.min.y;st<=_.max.y;st++)for(var _t=_.min.x;_t<=_.max.x;_t++){var Pe=new lt(_t,st);if(Pe.z=this._tileZoom,!!this._isValidTile(Pe)){var le=this._tiles[this._tileCoordsToKey(Pe)];le?le.current=!0:P.push(Pe)}}if(P.sort(function(Le,Fr){return Le.distanceTo(w)-Fr.distanceTo(w)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ze=document.createDocumentFragment();for(_t=0;_t<P.length;_t++)this._addTile(P[_t],Ze);this._level.el.appendChild(Ze)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(n.x<u.min.x||n.x>u.max.x)||!s.wrapLat&&(n.y<u.min.y||n.y>u.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(n);return Ot(this.options.bounds).overlaps(d)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,u=this.getTileSize(),d=n.scaleBy(u),_=d.add(u),w=s.unproject(d,n.z),P=s.unproject(_,n.z);return[w,P]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),u=new ne(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),u=new lt(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(n){var s=this._tiles[n];s&&(Pt(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){J(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=y,n.onmousemove=y,W.ielt9&&this.options.opacity<1&&Se(n,this.options.opacity)},_addTile:function(n,s){var u=this._getTilePos(n),d=this._tileCoordsToKey(n),_=this.createTile(this._wrapCoords(n),l(this._tileReady,this,n));this._initTile(_),this.createTile.length<2&&C(l(this._tileReady,this,n,null,_)),Wt(_,u),this._tiles[d]={el:_,coords:n,current:!0},s.appendChild(_),this.fire("tileloadstart",{tile:_,coords:n})},_tileReady:function(n,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:n});var d=this._tileCoordsToKey(n);u=this._tiles[d],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Se(u.el,0),x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(J(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),W.ielt9||!this._map._fadeAnimated?C(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new lt(this._wrapX?v(n.x,this._wrapX):n.x,this._wrapY?v(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new St(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function zp(n){return new bs(n)}var Vr=bs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=V(this,s),s.detectRetina&&W.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var u=document.createElement("img");return ct(u,"load",l(this._tileOnLoad,this,s,u)),ct(u,"error",l(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(n),u},getTileUrl:function(n){var s={r:W.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=u),s["-y"]=u}return X(this._url,a(s,this.options))},_tileOnLoad:function(n,s){W.ielt9?setTimeout(l(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,u){var d=this.options.errorTileUrl;d&&s.getAttribute("src")!==d&&(s.src=d),n(u,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,d=this.options.zoomOffset;return u&&(n=s-n),n+d},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=y,s.onerror=y,!s.complete)){s.src=bt;var u=this._tiles[n].coords;Pt(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:u})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",bt),bs.prototype._removeTile.call(this,n)},_tileReady:function(n,s,u){if(!(!this._map||u&&u.getAttribute("src")===bt))return bs.prototype._tileReady.call(this,n,s,u)}});function Oc(n,s){return new Vr(n,s)}var Dc=Vr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var u=a({},this.defaultWmsParams);for(var d in s)d in this.options||(u[d]=s[d]);s=V(this,s);var _=s.detectRetina&&W.retina?2:1,w=this.getTileSize();u.width=w.x*_,u.height=w.y*_,this.wmsParams=u},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Vr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),u=this._crs,d=Gt(u.project(s[0]),u.project(s[1])),_=d.min,w=d.max,P=(this._wmsVersion>=1.3&&this._crs===xr?[_.y,_.x,w.y,w.x]:[_.x,_.y,w.x,w.y]).join(","),O=Vr.prototype.getTileUrl.call(this,n);return O+j(this.wmsParams,O,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(n,s){return a(this.wmsParams,n),s||this.redraw(),this}});function Up(n,s){return new Dc(n,s)}Vr.WMS=Dc,Oc.wms=Up;var Jn=an.extend({options:{padding:.1},initialize:function(n){V(this,n),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),J(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var u=this._map.getZoomScale(s,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),_=this._map.project(this._center,s),w=d.multiplyBy(-u).add(_).subtract(this._map._getNewPixelOrigin(n,s));W.any3d?Gn(this._container,w,u):Wt(this._container,w)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new St(u,u.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Nc=Jn.extend({options:{tolerance:0},getEvents:function(){var n=Jn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Jn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ct(n,"mousemove",this._onMouseMove,this),ct(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ct(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,Pt(this._container),xt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var n=this._bounds,s=this._container,u=n.getSize(),d=W.retina?2:1;Wt(s,n.min),s.width=d*u.x,s.height=d*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",W.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Jn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[f(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,u=s.next,d=s.prev;u?u.prev=d:this._drawLast=d,d?d.next=u:this._drawFirst=u,delete n._order,delete this._layers[f(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),u=[],d,_;for(_=0;_<s.length;_++){if(d=Number(s[_]),isNaN(d))return;u.push(d)}n.options._dashArray=u}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||C(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new St,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)n=d.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var u,d,_,w,P=n._parts,O=P.length,N=this._ctx;if(O){for(N.beginPath(),u=0;u<O;u++){for(d=0,_=P[u].length;d<_;d++)w=P[u][d],N[d?"lineTo":"moveTo"](w.x,w.y);s&&N.closePath()}this._fillStroke(N,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,u=this._ctx,d=Math.max(Math.round(n._radius),1),_=(Math.max(Math.round(n._radiusY),1)||d)/d;_!==1&&(u.save(),u.scale(1,_)),u.beginPath(),u.arc(s.x,s.y/_,d,0,Math.PI*2,!1),_!==1&&u.restore(),this._fillStroke(u,n)}},_fillStroke:function(n,s){var u=s.options;u.fill&&(n.globalAlpha=u.fillOpacity,n.fillStyle=u.fillColor||u.color,n.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=u.opacity,n.lineWidth=u.weight,n.strokeStyle=u.color,n.lineCap=u.lineCap,n.lineJoin=u.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),u,d,_=this._drawFirst;_;_=_.next)u=_.layer,u.options.interactive&&u._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(u))&&(d=u);this._fireEvent(d?[d]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(Vt(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var u,d,_=this._drawFirst;_;_=_.next)u=_.layer,u.options.interactive&&u._containsPoint(s)&&(d=u);d!==this._hoveredLayer&&(this._handleMouseOut(n),d&&(J(this._container,"leaflet-interactive"),this._fireEvent([d],n,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,u){this._map._fireDOMEvent(s,u||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var u=s.next,d=s.prev;if(u)u.prev=d;else return;d?d.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var u=s.next,d=s.prev;if(d)d.next=u;else return;u?u.prev=d:d&&(this._drawLast=d),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function Vc(n){return W.canvas?new Nc(n):null}var Ps=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Hp={_initContainer:function(){this._container=Et("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Jn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=Ps("shape");J(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=Ps("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;Pt(s),n.removeInteractiveTarget(s),delete this._layers[f(n)]},_updateStyle:function(n){var s=n._stroke,u=n._fill,d=n.options,_=n._container;_.stroked=!!d.stroke,_.filled=!!d.fill,d.stroke?(s||(s=n._stroke=Ps("stroke")),_.appendChild(s),s.weight=d.weight+"px",s.color=d.color,s.opacity=d.opacity,d.dashArray?s.dashStyle=et(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=d.lineCap.replace("butt","flat"),s.joinstyle=d.lineJoin):s&&(_.removeChild(s),n._stroke=null),d.fill?(u||(u=n._fill=Ps("fill")),_.appendChild(u),u.color=d.fillColor||d.color,u.opacity=d.fillOpacity):u&&(_.removeChild(u),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),u=Math.round(n._radius),d=Math.round(n._radiusY||u);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+d+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){Ue(n._container)},_bringToBack:function(n){He(n._container)}},ko=W.vml?Ps:mr,As=Jn.extend({_initContainer:function(){this._container=ko("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ko("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Pt(this._container),xt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Jn.prototype._update.call(this);var n=this._bounds,s=n.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),Wt(u,n.min),u.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=ko("path");n.options.className&&J(s,n.options.className),n.options.interactive&&J(s,"leaflet-interactive"),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Pt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[f(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,u=n.options;s&&(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,mn(n._parts,s))},_updateCircle:function(n){var s=n._point,u=Math.max(Math.round(n._radius),1),d=Math.max(Math.round(n._radiusY),1)||u,_="a"+u+","+d+" 0 1,0 ",w=n._empty()?"M0 0":"M"+(s.x-u)+","+s.y+_+u*2+",0 "+_+-u*2+",0 ";this._setPath(n,w)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){Ue(n._path)},_bringToBack:function(n){He(n._path)}});W.vml&&As.include(Hp);function Fc(n){return W.svg||W.vml?new As(n):null}mt.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&Vc(n)||Fc(n)}});var Bc=Dr.extend({initialize:function(n,s){Dr.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Ot(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function jp(n,s){return new Bc(n,s)}As.create=ko,As.pointsToPath=mn,Yn.geometryToLayer=bo,Yn.coordsToLatLng=Ua,Yn.coordsToLatLngs=Po,Yn.latLngToCoords=Ha,Yn.latLngsToCoords=Ao,Yn.getFeature=Nr,Yn.asFeature=So,mt.mergeOptions({boxZoom:!0});var zc=Me.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ct(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){xt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Pt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),rn(),Er(),this._startPoint=this._map.mouseEventToContainerPoint(n),ct(document,{contextmenu:Tn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Et("div","leaflet-zoom-box",this._container),J(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new St(this._point,this._startPoint),u=s.getSize();Wt(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(Pt(this._box),Vt(this._container,"leaflet-crosshair")),xe(),Ir(),xt(document,{contextmenu:Tn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new ne(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});mt.addInitHook("addHandler","boxZoom",zc),mt.mergeOptions({doubleClickZoom:!0});var Uc=Me.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,u=s.getZoom(),d=s.options.zoomDelta,_=n.originalEvent.shiftKey?u-d:u+d;s.options.doubleClickZoom==="center"?s.setZoom(_):s.setZoomAround(n.containerPoint,_)}});mt.addInitHook("addHandler","doubleClickZoom",Uc),mt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Hc=Me.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new sn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}J(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Vt(this._map._container,"leaflet-grab"),Vt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Ot(this._map.options.maxBounds);this._offsetLimit=Gt(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),u=this._initialWorldOffset,d=this._draggable._newPos.x,_=(d-s+u)%n+s-u,w=(d+s+u)%n-s-u,P=Math.abs(_+u)<Math.abs(w+u)?_:w;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(n){var s=this._map,u=s.options,d=!u.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),d)s.fire("moveend");else{this._prunePositions(+new Date);var _=this._lastPos.subtract(this._positions[0]),w=(this._lastTime-this._times[0])/1e3,P=u.easeLinearity,O=_.multiplyBy(P/w),N=O.distanceTo([0,0]),U=Math.min(u.inertiaMaxSpeed,N),K=O.multiplyBy(U/N),st=U/(u.inertiaDeceleration*P),_t=K.multiplyBy(-st/2).round();!_t.x&&!_t.y?s.fire("moveend"):(_t=s._limitOffset(_t,s.options.maxBounds),C(function(){s.panBy(_t,{duration:st,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});mt.addInitHook("addHandler","dragging",Hc),mt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var jc=Me.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ct(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),xt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,u=n.scrollTop||s.scrollTop,d=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(d,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},u=this.keyCodes,d,_;for(d=0,_=u.left.length;d<_;d++)s[u.left[d]]=[-1*n,0];for(d=0,_=u.right.length;d<_;d++)s[u.right[d]]=[n,0];for(d=0,_=u.down.length;d<_;d++)s[u.down[d]]=[0,n];for(d=0,_=u.up.length;d<_;d++)s[u.up[d]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},u=this.keyCodes,d,_;for(d=0,_=u.zoomIn.length;d<_;d++)s[u.zoomIn[d]]=n;for(d=0,_=u.zoomOut.length;d<_;d++)s[u.zoomOut[d]]=-n},_addHooks:function(){ct(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){xt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,u=this._map,d;if(s in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(d=this._panKeys[s],n.shiftKey&&(d=rt(d).multiplyBy(3)),u.options.maxBounds&&(d=u._limitOffset(rt(d),u.options.maxBounds)),u.options.worldCopyJump){var _=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(d)));u.panTo(_)}else u.panBy(d)}else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;Tn(n)}}});mt.addInitHook("addHandler","keyboard",jc),mt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var qc=Me.extend({addHooks:function(){ct(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){xt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=ps(n),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var d=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),d),Tn(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),u=this._map.options.zoomSnap||0;n._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),_=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,w=u?Math.ceil(_/u)*u:_,P=n._limitZoom(s+(this._delta>0?w:-w))-s;this._delta=0,this._startTime=null,P&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+P):n.setZoomAround(this._lastMousePos,s+P))}});mt.addInitHook("addHandler","scrollWheelZoom",qc);var qp=600;mt.mergeOptions({tapHold:W.touchNative&&W.safari&&W.mobile,tapTolerance:15});var Gc=Me.extend({addHooks:function(){ct(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){xt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new lt(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ct(document,"touchend",Jt),ct(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),qp),ct(document,"touchend touchcancel contextmenu",this._cancel,this),ct(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){xt(document,"touchend",Jt),xt(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),xt(document,"touchend touchcancel contextmenu",this._cancel,this),xt(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new lt(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var u=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});u._simulated=!0,s.target.dispatchEvent(u)}});mt.addInitHook("addHandler","tapHold",Gc),mt.mergeOptions({touchZoom:W.touch,bounceAtZoomLimits:!0});var Zc=Me.extend({addHooks:function(){J(this._map._container,"leaflet-touch-zoom"),ct(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Vt(this._map._container,"leaflet-touch-zoom"),xt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(n.touches[0]),d=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(d)._divideBy(2))),this._startDist=u.distanceTo(d),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ct(document,"touchmove",this._onTouchMove,this),ct(document,"touchend touchcancel",this._onTouchEnd,this),Jt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(n.touches[0]),d=s.mouseEventToContainerPoint(n.touches[1]),_=u.distanceTo(d)/this._startDist;if(this._zoom=s.getScaleZoom(_,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&_<1||this._zoom>s.getMaxZoom()&&_>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,_===1)return}else{var w=u._add(d)._divideBy(2)._subtract(this._centerPoint);if(_===1&&w.x===0&&w.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(w),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var P=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=C(P,this,!0),Jt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),xt(document,"touchmove",this._onTouchMove,this),xt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});mt.addInitHook("addHandler","touchZoom",Zc),mt.BoxZoom=zc,mt.DoubleClickZoom=Uc,mt.Drag=Hc,mt.Keyboard=jc,mt.ScrollWheelZoom=qc,mt.TapHold=Gc,mt.TouchZoom=Zc,e.Bounds=St,e.Browser=W,e.CRS=he,e.Canvas=Nc,e.Circle=za,e.CircleMarker=Io,e.Class=pt,e.Control=Ce,e.DivIcon=Mc,e.DivOverlay=An,e.DomEvent=Qi,e.DomUtil=Ba,e.Draggable=sn,e.Evented=Nn,e.FeatureGroup=Kn,e.GeoJSON=Yn,e.GridLayer=bs,e.Handler=Me,e.Icon=Or,e.ImageOverlay=Co,e.LatLng=Tt,e.LatLngBounds=ne,e.Layer=an,e.LayerGroup=Mr,e.LineUtil=qe,e.Map=mt,e.Marker=Eo,e.Mixin=wo,e.Path=_i,e.Point=lt,e.PolyUtil=Rr,e.Polygon=Dr,e.Polyline=Qn,e.Popup=Lo,e.PosAnimation=_s,e.Projection=Pn,e.Rectangle=Bc,e.Renderer=Jn,e.SVG=As,e.SVGOverlay=xc,e.TileLayer=Vr,e.Tooltip=Ro,e.Transformation=ai,e.Util=b,e.VideoOverlay=kc,e.bind=l,e.bounds=Gt,e.canvas=Vc,e.circle=Rp,e.circleMarker=Lp,e.control=In,e.divIcon=Bp,e.extend=a,e.featureGroup=Ap,e.geoJSON=Rc,e.geoJson=Mp,e.gridLayer=zp,e.icon=Sp,e.imageOverlay=Op,e.latLng=ht,e.latLngBounds=Ot,e.layerGroup=Pp,e.map=Ar,e.marker=Cp,e.point=rt,e.polygon=xp,e.polyline=kp,e.popup=Vp,e.rectangle=jp,e.setOptions=V,e.stamp=f,e.svg=Fc,e.svgOverlay=Np,e.tileLayer=Oc,e.tooltip=Fp,e.transformation=Xe,e.version=r,e.videoOverlay=Dp;var Gp=window.L;e.noConflict=function(){return window.L=Gp,this},window.L=e})})(al,al.exports);var em=al.exports;const Oe=tm(em);var Qc={exports:{}};(function(i,t){(function(e,r){r(t)})(xh,function(e){var r=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(o){L.Util.setOptions(this,o),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var l=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,l?this._withAnimation:this._noAnimation),this._markerCluster=l?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(o){if(o instanceof L.LayerGroup)return this.addLayers([o]);if(!o.getLatLng)return this._nonPointGroup.addLayer(o),this.fire("layeradd",{layer:o}),this;if(!this._map)return this._needsClustering.push(o),this.fire("layeradd",{layer:o}),this;if(this.hasLayer(o))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(o,this._maxZoom),this.fire("layeradd",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var l=o,h=this._zoom;if(o.__parent)for(;l.__parent._zoom>=h;)l=l.__parent;return this._currentShownBounds.contains(l.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(o,l):this._animationAddLayerNonAnimated(o,l)),this},removeLayer:function(o){return o instanceof L.LayerGroup?this.removeLayers([o]):o.getLatLng?this._map?o.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(o)),this._removeLayer(o,!0),this.fire("layerremove",{layer:o}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),o.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(o)&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,o)&&this.hasLayer(o)&&this._needsRemoving.push({layer:o,latlng:o._latlng}),this.fire("layerremove",{layer:o}),this):(this._nonPointGroup.removeLayer(o),this.fire("layerremove",{layer:o}),this)},addLayers:function(o,l){if(!L.Util.isArray(o))return this.addLayer(o);var h=this._featureGroup,f=this._nonPointGroup,m=this.options.chunkedLoading,v=this.options.chunkInterval,y=this.options.chunkProgress,E=o.length,S=0,B=!0,V;if(this._map){var j=new Date().getTime(),$=L.bind(function(){var et=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();S<E;S++){if(m&&S%200===0){var Mt=new Date().getTime()-et;if(Mt>v)break}if(V=o[S],V instanceof L.LayerGroup){B&&(o=o.slice(),B=!1),this._extractNonGroupLayers(V,o),E=o.length;continue}if(!V.getLatLng){f.addLayer(V),l||this.fire("layeradd",{layer:V});continue}if(!this.hasLayer(V)&&(this._addLayer(V,this._maxZoom),l||this.fire("layeradd",{layer:V}),V.__parent&&V.__parent.getChildCount()===2)){var bt=V.__parent.getAllChildMarkers(),Bt=bt[0]===V?bt[1]:bt[0];h.removeLayer(Bt)}}y&&y(S,E,new Date().getTime()-j),S===E?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout($,this.options.chunkDelay)},this);$()}else for(var X=this._needsClustering;S<E;S++){if(V=o[S],V instanceof L.LayerGroup){B&&(o=o.slice(),B=!1),this._extractNonGroupLayers(V,o),E=o.length;continue}if(!V.getLatLng){f.addLayer(V);continue}this.hasLayer(V)||X.push(V)}return this},removeLayers:function(o){var l,h,f=o.length,m=this._featureGroup,v=this._nonPointGroup,y=!0;if(!this._map){for(l=0;l<f;l++){if(h=o[l],h instanceof L.LayerGroup){y&&(o=o.slice(),y=!1),this._extractNonGroupLayers(h,o),f=o.length;continue}this._arraySplice(this._needsClustering,h),v.removeLayer(h),this.hasLayer(h)&&this._needsRemoving.push({layer:h,latlng:h._latlng}),this.fire("layerremove",{layer:h})}return this}if(this._unspiderfy){this._unspiderfy();var E=o.slice(),S=f;for(l=0;l<S;l++){if(h=E[l],h instanceof L.LayerGroup){this._extractNonGroupLayers(h,E),S=E.length;continue}this._unspiderfyLayer(h)}}for(l=0;l<f;l++){if(h=o[l],h instanceof L.LayerGroup){y&&(o=o.slice(),y=!1),this._extractNonGroupLayers(h,o),f=o.length;continue}if(!h.__parent){v.removeLayer(h),this.fire("layerremove",{layer:h});continue}this._removeLayer(h,!0,!0),this.fire("layerremove",{layer:h}),m.hasLayer(h)&&(m.removeLayer(h),h.clusterShow&&h.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(o){o.off(this._childMarkerEventHandlers,this),delete o.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var o=new L.LatLngBounds;this._topClusterLevel&&o.extend(this._topClusterLevel._bounds);for(var l=this._needsClustering.length-1;l>=0;l--)o.extend(this._needsClustering[l].getLatLng());return o.extend(this._nonPointGroup.getBounds()),o},eachLayer:function(o,l){var h=this._needsClustering.slice(),f=this._needsRemoving,m,v,y;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(h),v=h.length-1;v>=0;v--){for(m=!0,y=f.length-1;y>=0;y--)if(f[y].layer===h[v]){m=!1;break}m&&o.call(l,h[v])}this._nonPointGroup.eachLayer(o,l)},getLayers:function(){var o=[];return this.eachLayer(function(l){o.push(l)}),o},getLayer:function(o){var l=null;return o=parseInt(o,10),this.eachLayer(function(h){L.stamp(h)===o&&(l=h)}),l},hasLayer:function(o){if(!o)return!1;var l,h=this._needsClustering;for(l=h.length-1;l>=0;l--)if(h[l]===o)return!0;for(h=this._needsRemoving,l=h.length-1;l>=0;l--)if(h[l].layer===o)return!1;return!!(o.__parent&&o.__parent._group===this)||this._nonPointGroup.hasLayer(o)},zoomToShowLayer:function(o,l){var h=this._map;typeof l!="function"&&(l=function(){});var f=function(){(h.hasLayer(o)||h.hasLayer(o.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",f,this),this.off("animationend",f,this),h.hasLayer(o)?l():o.__parent._icon&&(this.once("spiderfied",l,this),o.__parent.spiderfy()))};o._icon&&this._map.getBounds().contains(o.getLatLng())?l():o.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",f,this),this._map.panTo(o.getLatLng())):(this._map.on("moveend",f,this),this.on("animationend",f,this),o.__parent.zoomToBounds())},onAdd:function(o){this._map=o;var l,h,f;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(o),this._nonPointGroup.addTo(o),this._gridClusters||this._generateInitialClusters(),this._maxLat=o.options.crs.projection.MAX_LATITUDE,l=0,h=this._needsRemoving.length;l<h;l++)f=this._needsRemoving[l],f.newlatlng=f.layer._latlng,f.layer._latlng=f.latlng;for(l=0,h=this._needsRemoving.length;l<h;l++)f=this._needsRemoving[l],this._removeLayer(f.layer,!0),f.layer._latlng=f.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),h=this._needsClustering,this._needsClustering=[],this.addLayers(h,!0)},onRemove:function(o){o.off("zoomend",this._zoomEnd,this),o.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(o){for(var l=o;l&&!l._icon;)l=l.__parent;return l||null},_arraySplice:function(o,l){for(var h=o.length-1;h>=0;h--)if(o[h]===l)return o.splice(h,1),!0},_removeFromGridUnclustered:function(o,l){for(var h=this._map,f=this._gridUnclustered,m=Math.floor(this._map.getMinZoom());l>=m&&f[l].removeObject(o,h.project(o.getLatLng(),l));l--);},_childMarkerDragStart:function(o){o.target.__dragStart=o.target._latlng},_childMarkerMoved:function(o){if(!this._ignoreMove&&!o.target.__dragStart){var l=o.target._popup&&o.target._popup.isOpen();this._moveChild(o.target,o.oldLatLng,o.latlng),l&&o.target.openPopup()}},_moveChild:function(o,l,h){o._latlng=l,this.removeLayer(o),o._latlng=h,this.addLayer(o)},_childMarkerDragEnd:function(o){var l=o.target.__dragStart;delete o.target.__dragStart,l&&this._moveChild(o.target,l,o.target._latlng)},_removeLayer:function(o,l,h){var f=this._gridClusters,m=this._gridUnclustered,v=this._featureGroup,y=this._map,E=Math.floor(this._map.getMinZoom());l&&this._removeFromGridUnclustered(o,this._maxZoom);var S=o.__parent,B=S._markers,V;for(this._arraySplice(B,o);S&&(S._childCount--,S._boundsNeedUpdate=!0,!(S._zoom<E));)l&&S._childCount<=1?(V=S._markers[0]===o?S._markers[1]:S._markers[0],f[S._zoom].removeObject(S,y.project(S._cLatLng,S._zoom)),m[S._zoom].addObject(V,y.project(V.getLatLng(),S._zoom)),this._arraySplice(S.__parent._childClusters,S),S.__parent._markers.push(V),V.__parent=S.__parent,S._icon&&(v.removeLayer(S),h||v.addLayer(V))):S._iconNeedsUpdate=!0,S=S.__parent;delete o.__parent},_isOrIsParent:function(o,l){for(;l;){if(o===l)return!0;l=l.parentNode}return!1},fire:function(o,l,h){if(l&&l.layer instanceof L.MarkerCluster){if(l.originalEvent&&this._isOrIsParent(l.layer._icon,l.originalEvent.relatedTarget))return;o="cluster"+o}L.FeatureGroup.prototype.fire.call(this,o,l,h)},listens:function(o,l){return L.FeatureGroup.prototype.listens.call(this,o,l)||L.FeatureGroup.prototype.listens.call(this,"cluster"+o,l)},_defaultIconCreateFunction:function(o){var l=o.getChildCount(),h=" marker-cluster-";return l<10?h+="small":l<100?h+="medium":h+="large",new L.DivIcon({html:"<div><span>"+l+"</span></div>",className:"marker-cluster"+h,iconSize:new L.Point(40,40)})},_bindEvents:function(){var o=this._map,l=this.options.spiderfyOnMaxZoom,h=this.options.showCoverageOnHover,f=this.options.zoomToBoundsOnClick,m=this.options.spiderfyOnEveryZoom;(l||f||m)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),h&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),o.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(o){var l=o.layer,h=l;if(!(o.type==="clusterkeypress"&&o.originalEvent&&o.originalEvent.keyCode!==13)){for(;h._childClusters.length===1;)h=h._childClusters[0];h._zoom===this._maxZoom&&h._childCount===l._childCount&&this.options.spiderfyOnMaxZoom?l.spiderfy():this.options.zoomToBoundsOnClick&&l.zoomToBounds(),this.options.spiderfyOnEveryZoom&&l.spiderfy(),o.originalEvent&&o.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(o){var l=this._map;this._inZoomAnimation||(this._shownPolygon&&l.removeLayer(this._shownPolygon),o.layer.getChildCount()>2&&o.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(o.layer.getConvexHull(),this.options.polygonOptions),l.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var o=this.options.spiderfyOnMaxZoom,l=this.options.showCoverageOnHover,h=this.options.zoomToBoundsOnClick,f=this.options.spiderfyOnEveryZoom,m=this._map;(o||h||f)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),l&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),m.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var o=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,o),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),o),this._currentShownBounds=o}},_generateInitialClusters:function(){var o=Math.ceil(this._map.getMaxZoom()),l=Math.floor(this._map.getMinZoom()),h=this.options.maxClusterRadius,f=h;typeof h!="function"&&(f=function(){return h}),this.options.disableClusteringAtZoom!==null&&(o=this.options.disableClusteringAtZoom-1),this._maxZoom=o,this._gridClusters={},this._gridUnclustered={};for(var m=o;m>=l;m--)this._gridClusters[m]=new L.DistanceGrid(f(m)),this._gridUnclustered[m]=new L.DistanceGrid(f(m));this._topClusterLevel=new this._markerCluster(this,l-1)},_addLayer:function(o,l){var h=this._gridClusters,f=this._gridUnclustered,m=Math.floor(this._map.getMinZoom()),v,y;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(o),o.on(this._childMarkerEventHandlers,this);l>=m;l--){v=this._map.project(o.getLatLng(),l);var E=h[l].getNearObject(v);if(E){E._addChild(o),o.__parent=E;return}if(E=f[l].getNearObject(v),E){var S=E.__parent;S&&this._removeLayer(E,!1);var B=new this._markerCluster(this,l,E,o);h[l].addObject(B,this._map.project(B._cLatLng,l)),E.__parent=B,o.__parent=B;var V=B;for(y=l-1;y>S._zoom;y--)V=new this._markerCluster(this,y,V),h[y].addObject(V,this._map.project(E.getLatLng(),y));S._addChild(V),this._removeFromGridUnclustered(E,l);return}f[l].addObject(o,v)}this._topClusterLevel._addChild(o),o.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(o){o instanceof L.MarkerCluster&&o._iconNeedsUpdate&&o._updateIcon()})},_enqueue:function(o){this._queue.push(o),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var o=0;o<this._queue.length;o++)this._queue[o].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var o=Math.round(this._map._zoom);this._processQueue(),this._zoom<o&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,o)):this._zoom>o?(this._animationStart(),this._animationZoomOut(this._zoom,o)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(o){var l=this._maxLat;return l!==void 0&&(o.getNorth()>=l&&(o._northEast.lat=1/0),o.getSouth()<=-l&&(o._southWest.lat=-1/0)),o},_animationAddLayerNonAnimated:function(o,l){if(l===o)this._featureGroup.addLayer(o);else if(l._childCount===2){l._addToMap();var h=l.getAllChildMarkers();this._featureGroup.removeLayer(h[0]),this._featureGroup.removeLayer(h[1])}else l._updateIcon()},_extractNonGroupLayers:function(o,l){var h=o.getLayers(),f=0,m;for(l=l||[];f<h.length;f++){if(m=h[f],m instanceof L.LayerGroup){this._extractNonGroupLayers(m,l);continue}l.push(m)}return l},_overrideMarkerIcon:function(o){var l=o.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[o]}});return l}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(o,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(o,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(o,l){this._animationAddLayerNonAnimated(o,l)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(o,l){var h=this._getExpandedVisibleBounds(),f=this._featureGroup,m=Math.floor(this._map.getMinZoom()),v;this._ignoreMove=!0,this._topClusterLevel._recursively(h,o,m,function(y){var E=y._latlng,S=y._markers,B;for(h.contains(E)||(E=null),y._isSingleParent()&&o+1===l?(f.removeLayer(y),y._recursivelyAddChildrenToMap(null,l,h)):(y.clusterHide(),y._recursivelyAddChildrenToMap(E,l,h)),v=S.length-1;v>=0;v--)B=S[v],h.contains(B._latlng)||f.removeLayer(B)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(h,l),f.eachLayer(function(y){!(y instanceof L.MarkerCluster)&&y._icon&&y.clusterShow()}),this._topClusterLevel._recursively(h,o,l,function(y){y._recursivelyRestoreChildPositions(l)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(h,o,m,function(y){f.removeLayer(y),y.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(o,l){this._animationZoomOutSingle(this._topClusterLevel,o-1,l),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),o,this._getExpandedVisibleBounds())},_animationAddLayer:function(o,l){var h=this,f=this._featureGroup;f.addLayer(o),l!==o&&(l._childCount>2?(l._updateIcon(),this._forceLayout(),this._animationStart(),o._setPos(this._map.latLngToLayerPoint(l.getLatLng())),o.clusterHide(),this._enqueue(function(){f.removeLayer(o),o.clusterShow(),h._animationEnd()})):(this._forceLayout(),h._animationStart(),h._animationZoomOutSingle(l,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(o,l,h){var f=this._getExpandedVisibleBounds(),m=Math.floor(this._map.getMinZoom());o._recursivelyAnimateChildrenInAndAddSelfToMap(f,m,l+1,h);var v=this;this._forceLayout(),o._recursivelyBecomeVisible(f,h),this._enqueue(function(){if(o._childCount===1){var y=o._markers[0];this._ignoreMove=!0,y.setLatLng(y.getLatLng()),this._ignoreMove=!1,y.clusterShow&&y.clusterShow()}else o._recursively(f,h,m,function(E){E._recursivelyRemoveChildrenFromMap(f,m,l+1)});v._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(o){return new L.MarkerClusterGroup(o)};var a=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(o,l,h,f){L.Marker.prototype.initialize.call(this,h?h._cLatLng||h.getLatLng():new L.LatLng(0,0),{icon:this,pane:o.options.clusterPane}),this._group=o,this._zoom=l,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,h&&this._addChild(h),f&&this._addChild(f)},getAllChildMarkers:function(o,l){o=o||[];for(var h=this._childClusters.length-1;h>=0;h--)this._childClusters[h].getAllChildMarkers(o,l);for(var f=this._markers.length-1;f>=0;f--)l&&this._markers[f].__dragStart||o.push(this._markers[f]);return o},getChildCount:function(){return this._childCount},zoomToBounds:function(o){for(var l=this._childClusters.slice(),h=this._group._map,f=h.getBoundsZoom(this._bounds),m=this._zoom+1,v=h.getZoom(),y;l.length>0&&f>m;){m++;var E=[];for(y=0;y<l.length;y++)E=E.concat(l[y]._childClusters);l=E}f>m?this._group._map.setView(this._latlng,m):f<=v?this._group._map.setView(this._latlng,v+1):this._group._map.fitBounds(this._bounds,o)},getBounds:function(){var o=new L.LatLngBounds;return o.extend(this._bounds),o},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(o,l){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(o),o instanceof L.MarkerCluster?(l||(this._childClusters.push(o),o.__parent=this),this._childCount+=o._childCount):(l||this._markers.push(o),this._childCount++),this.__parent&&this.__parent._addChild(o,!0)},_setClusterCenter:function(o){this._cLatLng||(this._cLatLng=o._cLatLng||o._latlng)},_resetBounds:function(){var o=this._bounds;o._southWest&&(o._southWest.lat=1/0,o._southWest.lng=1/0),o._northEast&&(o._northEast.lat=-1/0,o._northEast.lng=-1/0)},_recalculateBounds:function(){var o=this._markers,l=this._childClusters,h=0,f=0,m=this._childCount,v,y,E,S;if(m!==0){for(this._resetBounds(),v=0;v<o.length;v++)E=o[v]._latlng,this._bounds.extend(E),h+=E.lat,f+=E.lng;for(v=0;v<l.length;v++)y=l[v],y._boundsNeedUpdate&&y._recalculateBounds(),this._bounds.extend(y._bounds),E=y._wLatLng,S=y._childCount,h+=E.lat*S,f+=E.lng*S;this._latlng=this._wLatLng=new L.LatLng(h/m,f/m),this._boundsNeedUpdate=!1}},_addToMap:function(o){o&&(this._backupLatlng=this._latlng,this.setLatLng(o)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(o,l,h){this._recursively(o,this._group._map.getMinZoom(),h-1,function(f){var m=f._markers,v,y;for(v=m.length-1;v>=0;v--)y=m[v],y._icon&&(y._setPos(l),y.clusterHide())},function(f){var m=f._childClusters,v,y;for(v=m.length-1;v>=0;v--)y=m[v],y._icon&&(y._setPos(l),y.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(o,l,h,f){this._recursively(o,f,l,function(m){m._recursivelyAnimateChildrenIn(o,m._group._map.latLngToLayerPoint(m.getLatLng()).round(),h),m._isSingleParent()&&h-1===f?(m.clusterShow(),m._recursivelyRemoveChildrenFromMap(o,l,h)):m.clusterHide(),m._addToMap()})},_recursivelyBecomeVisible:function(o,l){this._recursively(o,this._group._map.getMinZoom(),l,null,function(h){h.clusterShow()})},_recursivelyAddChildrenToMap:function(o,l,h){this._recursively(h,this._group._map.getMinZoom()-1,l,function(f){if(l!==f._zoom)for(var m=f._markers.length-1;m>=0;m--){var v=f._markers[m];h.contains(v._latlng)&&(o&&(v._backupLatlng=v.getLatLng(),v.setLatLng(o),v.clusterHide&&v.clusterHide()),f._group._featureGroup.addLayer(v))}},function(f){f._addToMap(o)})},_recursivelyRestoreChildPositions:function(o){for(var l=this._markers.length-1;l>=0;l--){var h=this._markers[l];h._backupLatlng&&(h.setLatLng(h._backupLatlng),delete h._backupLatlng)}if(o-1===this._zoom)for(var f=this._childClusters.length-1;f>=0;f--)this._childClusters[f]._restorePosition();else for(var m=this._childClusters.length-1;m>=0;m--)this._childClusters[m]._recursivelyRestoreChildPositions(o)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(o,l,h,f){var m,v;this._recursively(o,l-1,h-1,function(y){for(v=y._markers.length-1;v>=0;v--)m=y._markers[v],(!f||!f.contains(m._latlng))&&(y._group._featureGroup.removeLayer(m),m.clusterShow&&m.clusterShow())},function(y){for(v=y._childClusters.length-1;v>=0;v--)m=y._childClusters[v],(!f||!f.contains(m._latlng))&&(y._group._featureGroup.removeLayer(m),m.clusterShow&&m.clusterShow())})},_recursively:function(o,l,h,f,m){var v=this._childClusters,y=this._zoom,E,S;if(l<=y&&(f&&f(this),m&&y===h&&m(this)),y<l||y<h)for(E=v.length-1;E>=0;E--)S=v[E],S._boundsNeedUpdate&&S._recalculateBounds(),o.intersects(S._bounds)&&S._recursively(o,l,h,f,m)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var o=this.options.opacity;return this.setOpacity(0),this.options.opacity=o,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(o){this._cellSize=o,this._sqCellSize=o*o,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(o,l){var h=this._getCoord(l.x),f=this._getCoord(l.y),m=this._grid,v=m[f]=m[f]||{},y=v[h]=v[h]||[],E=L.Util.stamp(o);this._objectPoint[E]=l,y.push(o)},updateObject:function(o,l){this.removeObject(o),this.addObject(o,l)},removeObject:function(o,l){var h=this._getCoord(l.x),f=this._getCoord(l.y),m=this._grid,v=m[f]=m[f]||{},y=v[h]=v[h]||[],E,S;for(delete this._objectPoint[L.Util.stamp(o)],E=0,S=y.length;E<S;E++)if(y[E]===o)return y.splice(E,1),S===1&&delete v[h],!0},eachObject:function(o,l){var h,f,m,v,y,E,S,B=this._grid;for(h in B){y=B[h];for(f in y)for(E=y[f],m=0,v=E.length;m<v;m++)S=o.call(l,E[m]),S&&(m--,v--)}},getNearObject:function(o){var l=this._getCoord(o.x),h=this._getCoord(o.y),f,m,v,y,E,S,B,V,j=this._objectPoint,$=this._sqCellSize,X=null;for(f=h-1;f<=h+1;f++)if(y=this._grid[f],y){for(m=l-1;m<=l+1;m++)if(E=y[m],E)for(v=0,S=E.length;v<S;v++)B=E[v],V=this._sqDist(j[L.Util.stamp(B)],o),(V<$||V<=$&&X===null)&&($=V,X=B)}return X},_getCoord:function(o){var l=Math.floor(o/this._cellSize);return isFinite(l)?l:o},_sqDist:function(o,l){var h=l.x-o.x,f=l.y-o.y;return h*h+f*f}},function(){L.QuickHull={getDistant:function(o,l){var h=l[1].lat-l[0].lat,f=l[0].lng-l[1].lng;return f*(o.lat-l[0].lat)+h*(o.lng-l[0].lng)},findMostDistantPointFromBaseLine:function(o,l){var h=0,f=null,m=[],v,y,E;for(v=l.length-1;v>=0;v--){if(y=l[v],E=this.getDistant(y,o),E>0)m.push(y);else continue;E>h&&(h=E,f=y)}return{maxPoint:f,newPoints:m}},buildConvexHull:function(o,l){var h=[],f=this.findMostDistantPointFromBaseLine(o,l);return f.maxPoint?(h=h.concat(this.buildConvexHull([o[0],f.maxPoint],f.newPoints)),h=h.concat(this.buildConvexHull([f.maxPoint,o[1]],f.newPoints)),h):[o[0]]},getConvexHull:function(o){var l=!1,h=!1,f=!1,m=!1,v=null,y=null,E=null,S=null,B=null,V=null,j;for(j=o.length-1;j>=0;j--){var $=o[j];(l===!1||$.lat>l)&&(v=$,l=$.lat),(h===!1||$.lat<h)&&(y=$,h=$.lat),(f===!1||$.lng>f)&&(E=$,f=$.lng),(m===!1||$.lng<m)&&(S=$,m=$.lng)}h!==l?(V=y,B=v):(V=S,B=E);var X=[].concat(this.buildConvexHull([V,B],o),this.buildConvexHull([B,V],o));return X}}}(),L.MarkerCluster.include({getConvexHull:function(){var o=this.getAllChildMarkers(),l=[],h,f;for(f=o.length-1;f>=0;f--)h=o[f].getLatLng(),l.push(h);return L.QuickHull.getConvexHull(l)}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var o=this.getAllChildMarkers(null,!0),l=this._group,h=l._map,f=h.latLngToLayerPoint(this._latlng),m;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?m=this._group.options.spiderfyShapePositions(o.length,f):o.length>=this._circleSpiralSwitchover?m=this._generatePointsSpiral(o.length,f):(f.y+=10,m=this._generatePointsCircle(o.length,f)),this._animationSpiderfy(o,m)}},unspiderfy:function(o){this._group._inZoomAnimation||(this._animationUnspiderfy(o),this._group._spiderfied=null)},_generatePointsCircle:function(o,l){var h=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+o),f=h/this._2PI,m=this._2PI/o,v=[],y,E;for(f=Math.max(f,35),v.length=o,y=0;y<o;y++)E=this._circleStartAngle+y*m,v[y]=new L.Point(l.x+f*Math.cos(E),l.y+f*Math.sin(E))._round();return v},_generatePointsSpiral:function(o,l){var h=this._group.options.spiderfyDistanceMultiplier,f=h*this._spiralLengthStart,m=h*this._spiralFootSeparation,v=h*this._spiralLengthFactor*this._2PI,y=0,E=[],S;for(E.length=o,S=o;S>=0;S--)S<o&&(E[S]=new L.Point(l.x+f*Math.cos(y),l.y+f*Math.sin(y))._round()),y+=m/f+S*5e-4,f+=v/y;return E},_noanimationUnspiderfy:function(){var o=this._group,l=o._map,h=o._featureGroup,f=this.getAllChildMarkers(null,!0),m,v;for(o._ignoreMove=!0,this.setOpacity(1),v=f.length-1;v>=0;v--)m=f[v],h.removeLayer(m),m._preSpiderfyLatlng&&(m.setLatLng(m._preSpiderfyLatlng),delete m._preSpiderfyLatlng),m.setZIndexOffset&&m.setZIndexOffset(0),m._spiderLeg&&(l.removeLayer(m._spiderLeg),delete m._spiderLeg);o.fire("unspiderfied",{cluster:this,markers:f}),o._ignoreMove=!1,o._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(o,l){var h=this._group,f=h._map,m=h._featureGroup,v=this._group.options.spiderLegPolylineOptions,y,E,S,B;for(h._ignoreMove=!0,y=0;y<o.length;y++)B=f.layerPointToLatLng(l[y]),E=o[y],S=new L.Polyline([this._latlng,B],v),f.addLayer(S),E._spiderLeg=S,E._preSpiderfyLatlng=E._latlng,E.setLatLng(B),E.setZIndexOffset&&E.setZIndexOffset(1e6),m.addLayer(E);this.setOpacity(.3),h._ignoreMove=!1,h.fire("spiderfied",{cluster:this,markers:o})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(o,l){var h=this,f=this._group,m=f._map,v=f._featureGroup,y=this._latlng,E=m.latLngToLayerPoint(y),S=L.Path.SVG,B=L.extend({},this._group.options.spiderLegPolylineOptions),V=B.opacity,j,$,X,et,Mt,bt;for(V===void 0&&(V=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),S?(B.opacity=0,B.className=(B.className||"")+" leaflet-cluster-spider-leg"):B.opacity=V,f._ignoreMove=!0,j=0;j<o.length;j++)$=o[j],bt=m.layerPointToLatLng(l[j]),X=new L.Polyline([y,bt],B),m.addLayer(X),$._spiderLeg=X,S&&(et=X._path,Mt=et.getTotalLength()+.1,et.style.strokeDasharray=Mt,et.style.strokeDashoffset=Mt),$.setZIndexOffset&&$.setZIndexOffset(1e6),$.clusterHide&&$.clusterHide(),v.addLayer($),$._setPos&&$._setPos(E);for(f._forceLayout(),f._animationStart(),j=o.length-1;j>=0;j--)bt=m.layerPointToLatLng(l[j]),$=o[j],$._preSpiderfyLatlng=$._latlng,$.setLatLng(bt),$.clusterShow&&$.clusterShow(),S&&(X=$._spiderLeg,et=X._path,et.style.strokeDashoffset=0,X.setStyle({opacity:V}));this.setOpacity(.3),f._ignoreMove=!1,setTimeout(function(){f._animationEnd(),f.fire("spiderfied",{cluster:h,markers:o})},200)},_animationUnspiderfy:function(o){var l=this,h=this._group,f=h._map,m=h._featureGroup,v=o?f._latLngToNewLayerPoint(this._latlng,o.zoom,o.center):f.latLngToLayerPoint(this._latlng),y=this.getAllChildMarkers(null,!0),E=L.Path.SVG,S,B,V,j,$,X;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),B=y.length-1;B>=0;B--)S=y[B],S._preSpiderfyLatlng&&(S.closePopup(),S.setLatLng(S._preSpiderfyLatlng),delete S._preSpiderfyLatlng,X=!0,S._setPos&&(S._setPos(v),X=!1),S.clusterHide&&(S.clusterHide(),X=!1),X&&m.removeLayer(S),E&&(V=S._spiderLeg,j=V._path,$=j.getTotalLength()+.1,j.style.strokeDashoffset=$,V.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var et=0;for(B=y.length-1;B>=0;B--)S=y[B],S._spiderLeg&&et++;for(B=y.length-1;B>=0;B--)S=y[B],S._spiderLeg&&(S.clusterShow&&S.clusterShow(),S.setZIndexOffset&&S.setZIndexOffset(0),et>1&&m.removeLayer(S),f.removeLayer(S._spiderLeg),delete S._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:l,markers:y})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(o){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(o))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(o){this._spiderfied&&this._spiderfied.unspiderfy(o)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(o){o._spiderLeg&&(this._featureGroup.removeLayer(o),o.clusterShow&&o.clusterShow(),o.setZIndexOffset&&o.setZIndexOffset(0),this._map.removeLayer(o._spiderLeg),delete o._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(o){return o?o instanceof L.MarkerClusterGroup?o=o._topClusterLevel.getAllChildMarkers():o instanceof L.LayerGroup?o=o._layers:o instanceof L.MarkerCluster?o=o.getAllChildMarkers():o instanceof L.Marker&&(o=[o]):o=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(o),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(o),this},_flagParentsIconsNeedUpdate:function(o){var l,h;for(l in o)for(h=o[l].__parent;h;)h._iconNeedsUpdate=!0,h=h.__parent},_refreshSingleMarkerModeMarkers:function(o){var l,h;for(l in o)h=o[l],this.hasLayer(h)&&h.setIcon(this._overrideMarkerIcon(h))}}),L.Marker.include({refreshIconOptions:function(o,l){var h=this.options.icon;return L.setOptions(h,o),this.setIcon(h),l&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),e.MarkerClusterGroup=r,e.MarkerCluster=a,Object.defineProperty(e,"__esModule",{value:!0})})})(Qc,Qc.exports);const nm="AIzaSyCQ8f6sXb1gYIiv5rlHKeZ2EVMzC-anzIU",im="/api/tcs/v1/projects/gas-prices-prod/databases/(default)/documents:runQuery";async function Ga(){try{const i=await fetch(im+"?key="+nm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({structuredQuery:{from:[{collectionId:"stations"}],where:{fieldFilter:{field:{fieldPath:"isDeleted"},op:"EQUAL",value:{booleanValue:!1}}}}})});if(!i.ok)throw new Error("Erreur réseau: "+i.status);const t=await i.json();return rm(t)}catch(i){return console.error("Erreur API TCS:",i),[]}}function gi(i){return i?i.stringValue!==void 0?i.stringValue:i.doubleValue!==void 0?i.doubleValue:i.integerValue!==void 0?Number(i.integerValue):i.booleanValue!==void 0?i.booleanValue:i.timestampValue!==void 0?i.timestampValue:null:null}function rm(i){if(!i||!Array.isArray(i))return[];const t=[],e={SP95:"SP95",SP98:"SP98",DIESEL:"Diesel",DIESEL_PREMIUM:"Diesel Premium",GPL:"GPL",ADBLUE:"AdBlue",GNC:"GNC",ETHANOL_85:"Ethanol 85",HVO100:"HVO100",H2:"H2"};return i.forEach(r=>{const a=r.document;if(!a||!a.fields)return;const o=a.fields,l=gi(o.displayName)||gi(o.brand)||"Station",h=gi(o.formattedAddress)||"",f=gi(o.brand)||"";let m=0,v=0;if(o.location&&o.location.mapValue&&o.location.mapValue.fields&&(m=gi(o.location.mapValue.fields.lat)||0,v=gi(o.location.mapValue.fields.lng)||0),m===0&&o.location&&o.location.geoPointValue&&(m=o.location.geoPointValue.latitude||0,v=o.location.geoPointValue.longitude||0),m===0&&v===0)return;const y={},E=o.fuelCollection||o.prices;if(E&&E.mapValue&&E.mapValue.fields){const B=E.mapValue.fields;Object.keys(B).forEach(V=>{const j=B[V];if(!j||!j.mapValue||!j.mapValue.fields)return;const $=j.mapValue.fields;if(gi($.isDeleted)===!0)return;const et=gi($.displayPrice);if(et!==null&&et>0){const Mt=e[V]||V;y[Mt]=et.toFixed(3)}})}if(Object.keys(y).length===0)return;const S=y.SP95||y.Diesel||Object.values(y)[0];t.push({id:a.name.split("/").pop(),name:l,brand:f,address:h,lat:m,lng:v,prices:y,defaultDisplayPrice:"CHF "+S,availableFuels:Object.keys(y)})}),console.log("TCS: "+t.length+" stations chargées avec succès"),t}const sm={SP95:7.5,SP98:7.5,Diesel:6,"Diesel Premium":6,GPL:10,GNC:7,"Ethanol 85":9.5,H2:1},om=()=>{};var Yc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?t[e++]=a:a<2048?(t[e++]=a>>6|192,t[e++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=a>>18|240,t[e++]=a>>12&63|128,t[e++]=a>>6&63|128,t[e++]=a&63|128):(t[e++]=a>>12|224,t[e++]=a>>6&63|128,t[e++]=a&63|128)}return t},am=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const a=i[e++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=i[e++];t[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=i[e++],l=i[e++],h=i[e++],f=((a&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=i[e++],l=i[e++];t[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const o=i[a],l=a+1<i.length,h=l?i[a+1]:0,f=a+2<i.length,m=f?i[a+2]:0,v=o>>2,y=(o&3)<<4|h>>4;let E=(h&15)<<2|m>>6,S=m&63;f||(S=64,l||(E=64)),r.push(e[v],e[y],e[E],e[S])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Mh(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):am(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const o=e[i.charAt(a++)],h=a<i.length?e[i.charAt(a)]:0;++a;const m=a<i.length?e[i.charAt(a)]:64;++a;const y=a<i.length?e[i.charAt(a)]:64;if(++a,o==null||h==null||m==null||y==null)throw new lm;const E=o<<2|h>>4;if(r.push(E),m!==64){const S=h<<4&240|m>>2;if(r.push(S),y!==64){const B=m<<6&192|y;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class lm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cm=function(i){const t=Mh(i);return Oh.encodeByteArray(t,!0)},Qo=function(i){return cm(i).replace(/\./g,"")},Dh=function(i){try{return Oh.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=()=>um().__FIREBASE_DEFAULTS__,dm=()=>{if(typeof process>"u"||typeof Yc>"u")return;const i=Yc.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},fm=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Dh(i[1]);return t&&JSON.parse(t)},ya=()=>{try{return om()||hm()||dm()||fm()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Nh=i=>{var t,e;return(e=(t=ya())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},pm=i=>{const t=Nh(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Vh=()=>{var i;return(i=ya())==null?void 0:i.config},Fh=i=>{var t;return(t=ya())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",a=i.iat||0,o=i.sub||i.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Qo(JSON.stringify(e)),Qo(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function ym(){var t;const i=(t=ya())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bh(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tm(){const i=we();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Em(){return!ym()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{e=!1},a.onerror=()=>{var o;t(((o=a.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}function Im(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="FirebaseError";class fn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=bm,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},a=`${this.service}/${t}`,o=this.errors[t],l=o?Pm(o,r):"Error",h=`${this.serviceName}: ${l} (${a}).`;return new fn(a,h,r)}}function Pm(i,t){return i.replace(Am,(e,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const Am=/\{\$([^}]+)}/g;function Sm(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Ci(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const a of e){if(!r.includes(a))return!1;const o=i[a],l=t[a];if(Jc(o)&&Jc(l)){if(!Ci(o,l))return!1}else if(o!==l)return!1}for(const a of r)if(!e.includes(a))return!1;return!0}function Jc(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Cs(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");t[decodeURIComponent(a)]=decodeURIComponent(o)}}),t}function Ls(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function Cm(i,t){const e=new Lm(i,t);return e.subscribe.bind(e)}class Lm{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let a;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Rm(t,["next","error","complete"])?a=t:a={next:t,error:e,complete:r},a.next===void 0&&(a.next=Za),a.error===void 0&&(a.error=Za),a.complete===void 0&&(a.complete=Za);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rm(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=1e3,xm=2,Mm=4*60*60*1e3,Om=.5;function Xc(i,t=km,e=xm){const r=t*Math.pow(e,i),a=Math.round(Om*r*(Math.random()-.5)*2);return Math.min(Mm,r+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hh(i){return(await fetch(i,{credentials:"include"})).ok}class hn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new mm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:e});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vm(t))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(t=Yi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yi){return this.instances.has(t)}getOptions(t=Yi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(a)}return a}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),a=this.onInitCallbacks.get(r)??new Set;a.add(t),this.onInitCallbacks.set(r,a);const o=this.instances.get(r);return o&&t(o,r),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const a of r)try{a(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yi){return this.component?this.component.multipleInstances?t:Yi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nm(i){return i===Yi?void 0:i}function Vm(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Dm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(yt||(yt={}));const Bm={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},zm=yt.INFO,Um={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},Hm=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),a=Um[t];if(a)console[a](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class va{constructor(t){this.name=t,this._logLevel=zm,this._logHandler=Hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in yt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...t),this._logHandler(this,yt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...t),this._logHandler(this,yt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...t),this._logHandler(this,yt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...t),this._logHandler(this,yt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...t),this._logHandler(this,yt.ERROR,...t)}}const jm=(i,t)=>t.some(e=>i instanceof e);let tu,eu;function qm(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gm(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,ll=new WeakMap,qh=new WeakMap,Wa=new WeakMap,Ol=new WeakMap;function Zm(i){const t=new Promise((e,r)=>{const a=()=>{i.removeEventListener("success",o),i.removeEventListener("error",l)},o=()=>{e(bi(i.result)),a()},l=()=>{r(i.error),a()};i.addEventListener("success",o),i.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&jh.set(e,i)}).catch(()=>{}),Ol.set(t,i),t}function Wm(i){if(ll.has(i))return;const t=new Promise((e,r)=>{const a=()=>{i.removeEventListener("complete",o),i.removeEventListener("error",l),i.removeEventListener("abort",l)},o=()=>{e(),a()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",o),i.addEventListener("error",l),i.addEventListener("abort",l)});ll.set(i,t)}let cl={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return ll.get(i);if(t==="objectStoreNames")return i.objectStoreNames||qh.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return bi(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function $m(i){cl=i(cl)}function Km(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call($a(this),t,...e);return qh.set(r,t.sort?t.sort():[t]),bi(r)}:Gm().includes(i)?function(...t){return i.apply($a(this),t),bi(jh.get(this))}:function(...t){return bi(i.apply($a(this),t))}}function Qm(i){return typeof i=="function"?Km(i):(i instanceof IDBTransaction&&Wm(i),jm(i,qm())?new Proxy(i,cl):i)}function bi(i){if(i instanceof IDBRequest)return Zm(i);if(Wa.has(i))return Wa.get(i);const t=Qm(i);return t!==i&&(Wa.set(i,t),Ol.set(t,i)),t}const $a=i=>Ol.get(i);function Gh(i,t,{blocked:e,upgrade:r,blocking:a,terminated:o}={}){const l=indexedDB.open(i,t),h=bi(l);return r&&l.addEventListener("upgradeneeded",f=>{r(bi(l.result),f.oldVersion,f.newVersion,bi(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),a&&f.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const Ym=["get","getKey","getAll","getAllKeys","count"],Jm=["put","add","delete","clear"],Ka=new Map;function nu(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Ka.get(t))return Ka.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,a=Jm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Ym.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,a?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[e](...h),a&&f.done]))[0]};return Ka.set(t,o),o}$m(i=>({...i,get:(t,e,r)=>nu(t,e)||i.get(t,e,r),has:(t,e)=>!!nu(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(t_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function t_(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ul="@firebase/app",iu="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new va("@firebase/app"),e_="@firebase/app-compat",n_="@firebase/analytics-compat",i_="@firebase/analytics",r_="@firebase/app-check-compat",s_="@firebase/app-check",o_="@firebase/auth",a_="@firebase/auth-compat",l_="@firebase/database",c_="@firebase/data-connect",u_="@firebase/database-compat",h_="@firebase/functions",d_="@firebase/functions-compat",f_="@firebase/installations",p_="@firebase/installations-compat",m_="@firebase/messaging",__="@firebase/messaging-compat",g_="@firebase/performance",y_="@firebase/performance-compat",v_="@firebase/remote-config",w_="@firebase/remote-config-compat",T_="@firebase/storage",E_="@firebase/storage-compat",I_="@firebase/firestore",b_="@firebase/ai",P_="@firebase/firestore-compat",A_="firebase",S_="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="[DEFAULT]",C_={[ul]:"fire-core",[e_]:"fire-core-compat",[i_]:"fire-analytics",[n_]:"fire-analytics-compat",[s_]:"fire-app-check",[r_]:"fire-app-check-compat",[o_]:"fire-auth",[a_]:"fire-auth-compat",[l_]:"fire-rtdb",[c_]:"fire-data-connect",[u_]:"fire-rtdb-compat",[h_]:"fire-fn",[d_]:"fire-fn-compat",[f_]:"fire-iid",[p_]:"fire-iid-compat",[m_]:"fire-fcm",[__]:"fire-fcm-compat",[g_]:"fire-perf",[y_]:"fire-perf-compat",[v_]:"fire-rc",[w_]:"fire-rc-compat",[T_]:"fire-gcs",[E_]:"fire-gcs-compat",[I_]:"fire-fst",[P_]:"fire-fst-compat",[b_]:"fire-vertex","fire-js":"fire-js",[A_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,L_=new Map,dl=new Map;function ru(i,t){try{i.container.addComponent(t)}catch(e){ii.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Mn(i){const t=i.name;if(dl.has(t))return ii.debug(`There were multiple attempts to register component ${t}.`),!1;dl.set(t,i);for(const e of Yo.values())ru(e,i);for(const e of L_.values())ru(e,i);return!0}function cr(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function We(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new lr("app","Firebase",R_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=S_;function Zh(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:hl,automaticDataCollectionEnabled:!0,...t},a=r.name;if(typeof a!="string"||!a)throw Pi.create("bad-app-name",{appName:String(a)});if(e||(e=Vh()),!e)throw Pi.create("no-options");const o=Yo.get(a);if(o){if(Ci(e,o.options)&&Ci(r,o.config))return o;throw Pi.create("duplicate-app",{appName:a})}const l=new Fm(a);for(const f of dl.values())l.addComponent(f);const h=new k_(e,r,l);return Yo.set(a,h),h}function Dl(i=hl){const t=Yo.get(i);if(!t&&i===hl&&Vh())return Zh();if(!t)throw Pi.create("no-app",{appName:i});return t}function Qe(i,t,e){let r=C_[i]??i;e&&(r+=`-${e}`);const a=r.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const l=[`Unable to register library "${r}" with version "${t}":`];a&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ii.warn(l.join(" "));return}Mn(new hn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebase-heartbeat-database",M_=1,zs="firebase-heartbeat-store";let Qa=null;function Wh(){return Qa||(Qa=Gh(x_,M_,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(zs)}catch(e){console.warn(e)}}}}).catch(i=>{throw Pi.create("idb-open",{originalErrorMessage:i.message})})),Qa}async function O_(i){try{const e=(await Wh()).transaction(zs),r=await e.objectStore(zs).get($h(i));return await e.done,r}catch(t){if(t instanceof fn)ii.warn(t.message);else{const e=Pi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ii.warn(e.message)}}}async function su(i,t){try{const r=(await Wh()).transaction(zs,"readwrite");await r.objectStore(zs).put(t,$h(i)),await r.done}catch(e){if(e instanceof fn)ii.warn(e.message);else{const r=Pi.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ii.warn(r.message)}}}function $h(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=1024,N_=30;class V_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new B_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ou();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>N_){const l=z_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ii.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ou(),{heartbeatsToSend:r,unsentEntries:a}=F_(this._heartbeatsCache.heartbeats),o=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ii.warn(e),""}}}function ou(){return new Date().toISOString().substring(0,10)}function F_(i,t=D_){const e=[];let r=i.slice();for(const a of i){const o=e.find(l=>l.agent===a.agent);if(o){if(o.dates.push(a.date),au(e)>t){o.dates.pop();break}}else if(e.push({agent:a.agent,dates:[a.date]}),au(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class B_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await O_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function au(i){return Qo(JSON.stringify({version:2,heartbeats:i})).length}function z_(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(i){Mn(new hn("platform-logger",t=>new Xm(t),"PRIVATE")),Mn(new hn("heartbeat",t=>new V_(t),"PRIVATE")),Qe(ul,iu,i),Qe(ul,iu,"esm2020"),Qe("fire-js","")}U_("");var H_="firebase",j_="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(H_,j_,"app");function Kh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q_=Kh,Qh=new lr("auth","Firebase",Kh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new va("@firebase/auth");function G_(i,...t){Jo.logLevel<=yt.WARN&&Jo.warn(`Auth (${es}): ${i}`,...t)}function zo(i,...t){Jo.logLevel<=yt.ERROR&&Jo.error(`Auth (${es}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(i,...t){throw Nl(i,...t)}function Cn(i,...t){return Nl(i,...t)}function Yh(i,t,e){const r={...q_(),[t]:e};return new lr("auth","Firebase",r).create(t,{appName:i.name})}function ei(i){return Yh(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nl(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return Qh.create(i,...t)}function ot(i,t,...e){if(!i)throw Nl(t,...e)}function Xn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw zo(t),new Error(t)}function ri(i,t){i||Xn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Z_(){return lu()==="http:"||lu()==="https:"}function lu(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z_()||Bh()||"connection"in navigator)?navigator.onLine:!0}function $_(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e){this.shortDelay=t,this.longDelay=e,ri(e>t,"Short delay should be less than long delay!"),this.isMobile=gm()||wm()}get(){return W_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(i,t){ri(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Y_=new Xs(3e4,6e4);function Di(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function Ni(i,t,e,r,a={}){return Xh(i,a,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const h=Ys({key:i.config.apiKey,...l}).slice(1),f=await i._getAdditionalHeaders();f["Content-Type"]="application/json",i.languageCode&&(f["X-Firebase-Locale"]=i.languageCode);const m={method:t,headers:f,...o};return vm()||(m.referrerPolicy="no-referrer"),i.emulatorConfig&&Js(i.emulatorConfig.host)&&(m.credentials="include"),Jh.fetch()(await td(i,i.config.apiHost,e,h),m)})}async function Xh(i,t,e){i._canInitEmulator=!1;const r={...K_,...t};try{const a=new X_(i),o=await Promise.race([e(),a.promise]);a.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Mo(i,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const h=o.ok?l.errorMessage:l.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(i,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw Mo(i,"email-already-in-use",l);if(f==="USER_DISABLED")throw Mo(i,"user-disabled",l);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Yh(i,v,m);dn(i,v)}}catch(a){if(a instanceof fn)throw a;dn(i,"network-request-failed",{message:String(a)})}}async function to(i,t,e,r,a={}){const o=await Ni(i,t,e,r,a);return"mfaPendingCredential"in o&&dn(i,"multi-factor-auth-required",{_serverResponse:o}),o}async function td(i,t,e,r){const a=`${t}${e}?${r}`,o=i,l=o.config.emulator?Vl(i.config,a):`${i.config.apiScheme}://${a}`;return Q_.includes(e)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}function J_(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),Y_.get())})}}function Mo(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const a=Cn(i,t,r);return a.customData._tokenResponse=e,a}function cu(i){return i!==void 0&&i.enterprise!==void 0}class tg{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return J_(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eg(i,t){return Ni(i,"GET","/v2/recaptchaConfig",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(i,t){return Ni(i,"POST","/v1/accounts:delete",t)}async function Xo(i,t){return Ni(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ig(i,t=!1){const e=Te(i),r=await e.getIdToken(t),a=Fl(r);ot(a&&a.exp&&a.auth_time&&a.iat,e.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:Os(Ya(a.auth_time)),issuedAtTime:Os(Ya(a.iat)),expirationTime:Os(Ya(a.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ya(i){return Number(i)*1e3}function Fl(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const a=Dh(e);return a?JSON.parse(a):(zo("Failed to decode base64 JWT payload"),null)}catch(a){return zo("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function uu(i){const t=Fl(i);return ot(t,"internal-error"),ot(typeof t.exp<"u","internal-error"),ot(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof fn&&rg(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function rg({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(i){var y;const t=i.auth,e=await i.getIdToken(),r=await Us(i,Xo(t,{idToken:e}));ot(r==null?void 0:r.users.length,t,"internal-error");const a=r.users[0];i._notifyReloadListener(a);const o=(y=a.providerUserInfo)!=null&&y.length?ed(a.providerUserInfo):[],l=ag(i.providerData,o),h=i.isAnonymous,f=!(i.email&&a.passwordHash)&&!(l!=null&&l.length),m=h?f:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new pl(a.createdAt,a.lastLoginAt),isAnonymous:m};Object.assign(i,v)}async function og(i){const t=Te(i);await ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ag(i,t){return[...i.filter(r=>!t.some(a=>a.providerId===r.providerId)),...t]}function ed(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(i,t){const e=await Xh(i,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:o}=i.config,l=await td(i,a,"/v1/token",`key=${o}`),h=await i._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:r};return i.emulatorConfig&&Js(i.emulatorConfig.host)&&(f.credentials="include"),Jh.fetch()(l,f)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function cg(i,t){return Ni(i,"POST","/v2/accounts:revokeToken",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ot(t.idToken,"internal-error"),ot(typeof t.idToken<"u","internal-error"),ot(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){ot(t.length!==0,"internal-error");const e=uu(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(ot(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:a,expiresIn:o}=await lg(t,e);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:a,expirationTime:o}=e,l=new qr;return r&&(ot(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),a&&(ot(typeof a=="string","internal-error",{appName:t}),l.accessToken=a),o&&(ot(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(i,t){ot(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class ln{constructor({uid:t,auth:e,stsTokenManager:r,...a}){this.providerId="firebase",this.proactiveRefresh=new sg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new pl(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const e=await Us(this,this.stsTokenManager.getToken(this.auth,t));return ot(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ig(this,t)}reload(){return og(this)}_assign(t){this!==t&&(ot(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ln({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){ot(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(ei(this.auth));const t=await this.getIdToken();return await Us(this,ng(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,a=e.email??void 0,o=e.phoneNumber??void 0,l=e.photoURL??void 0,h=e.tenantId??void 0,f=e._redirectEventId??void 0,m=e.createdAt??void 0,v=e.lastLoginAt??void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:B,stsTokenManager:V}=e;ot(y&&V,t,"internal-error");const j=qr.fromJSON(this.name,V);ot(typeof y=="string",t,"internal-error"),yi(r,t.name),yi(a,t.name),ot(typeof E=="boolean",t,"internal-error"),ot(typeof S=="boolean",t,"internal-error"),yi(o,t.name),yi(l,t.name),yi(h,t.name),yi(f,t.name),yi(m,t.name),yi(v,t.name);const $=new ln({uid:y,auth:t,email:a,emailVerified:E,displayName:r,isAnonymous:S,photoURL:l,phoneNumber:o,tenantId:h,stsTokenManager:j,createdAt:m,lastLoginAt:v});return B&&Array.isArray(B)&&($.providerData=B.map(X=>({...X}))),f&&($._redirectEventId=f),$}static async _fromIdTokenResponse(t,e,r=!1){const a=new qr;a.updateFromServerResponse(e);const o=new ln({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:r});return await ta(o),o}static async _fromGetAccountInfoResponse(t,e,r){const a=e.users[0];ot(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?ed(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),h=new qr;h.updateFromIdToken(r);const f=new ln({uid:a.localId,auth:t,stsTokenManager:h,isAnonymous:l}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new pl(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;function ti(i){ri(i instanceof Function,"Expected a class definition");let t=hu.get(i);return t?(ri(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,hu.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}nd.type="NONE";const du=nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(i,t,e){return`firebase:${i}:${t}:${e}`}class Gr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=Uo(this.userKey,a.apiKey,o),this.fullPersistenceKey=Uo("persistence",a.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Xo(this.auth,{idToken:t}).catch(()=>{});return e?ln._fromGetAccountInfoResponse(this.auth,e,t):null}return ln._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Gr(ti(du),t,r);const a=(await Promise.all(e.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||ti(du);const l=Uo(r,t.config.apiKey,t.name);let h=null;for(const m of e)try{const v=await m._get(l);if(v){let y;if(typeof v=="string"){const E=await Xo(t,{idToken:v}).catch(()=>{});if(!E)break;y=await ln._fromGetAccountInfoResponse(t,E,v)}else y=ln._fromJSON(t,v);m!==o&&(h=y),o=m;break}}catch{}const f=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new Gr(o,t,r):(o=f[0],h&&await o._set(l,h.toJSON()),await Promise.all(e.map(async m=>{if(m!==o)try{await m._remove(l)}catch{}})),new Gr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(od(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(id(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ld(t))return"Blackberry";if(cd(t))return"Webos";if(rd(t))return"Safari";if((t.includes("chrome/")||sd(t))&&!t.includes("edge/"))return"Chrome";if(ad(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function id(i=we()){return/firefox\//i.test(i)}function rd(i=we()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sd(i=we()){return/crios\//i.test(i)}function od(i=we()){return/iemobile/i.test(i)}function ad(i=we()){return/android/i.test(i)}function ld(i=we()){return/blackberry/i.test(i)}function cd(i=we()){return/webos/i.test(i)}function Bl(i=we()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ug(i=we()){var t;return Bl(i)&&!!((t=window.navigator)!=null&&t.standalone)}function hg(){return Tm()&&document.documentMode===10}function ud(i=we()){return Bl(i)||ad(i)||cd(i)||ld(i)||/windows phone/i.test(i)||od(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(i,t=[]){let e;switch(i){case"Browser":e=fu(we());break;case"Worker":e=`${fu(we())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((l,h)=>{try{const f=t(o);l(f)}catch(f){h(f)}});r.onAbort=e,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const a of e)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(i,t={}){return Ni(i,"GET","/v2/passwordPolicy",Di(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=6;class mg{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??pg,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),a&&(e.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let a=0;a<t.length;a++)r=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,e,r,a){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new dg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ti(e)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Xo(this,{idToken:t}),r=await ln._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var o;if(We(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(o=this.redirectUser)==null?void 0:o._redirectEventId,h=r==null?void 0:r._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===h)&&(f!=null&&f.user)&&(r=f.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ot(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ta(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(We(this.app))return Promise.reject(ei(this));const e=t?Te(t):null;return e&&ot(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ot(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return We(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ti(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fg(this),e=new mg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new lr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await cg(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ti(t)||this._popupRedirectResolver;ot(e,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[ti(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,a){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ot(h,this,"internal-error"),h.then(()=>{l||o(this.currentUser)}),typeof e=="function"){const f=t.addObserver(e,r,a);return()=>{l=!0,f()}}else{const f=t.addObserver(e);return()=>{l=!0,f()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ot(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&G_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ur(i){return Te(i)}class pu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cm(e=>this.observer=e)}get next(){return ot(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gg(i){wa=i}function dd(i){return wa.loadJS(i)}function yg(){return wa.recaptchaEnterpriseScript}function vg(){return wa.gapiScript}function wg(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Tg{constructor(){this.enterprise=new Eg}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Eg{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Ig="recaptcha-enterprise",fd="NO_RECAPTCHA";class bg{constructor(t){this.type=Ig,this.auth=ur(t)}async verify(t="verify",e=!1){async function r(o){if(!e){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,h)=>{eg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new tg(f);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,l(m.siteKey)}}).catch(f=>{h(f)})})}function a(o,l,h){const f=window.grecaptcha;cu(f)?f.enterprise.ready(()=>{f.enterprise.execute(o,{action:t}).then(m=>{l(m)}).catch(()=>{l(fd)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tg().execute("siteKey",{action:"verify"}):new Promise((o,l)=>{r(this.auth).then(h=>{if(!e&&cu(window.grecaptcha))a(h,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=yg();f.length!==0&&(f+=h),dd(f).then(()=>{a(h,o,l)}).catch(m=>{l(m)})}}).catch(h=>{l(h)})})}}async function mu(i,t,e,r=!1,a=!1){const o=new bg(i);let l;if(a)l=fd;else try{l=await o.verify(e)}catch{l=await o.verify(e,!0)}const h={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function ml(i,t,e,r,a){var o;if((o=i._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await mu(i,t,e,e==="getOobCode");return r(i,l)}else return r(i,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await mu(i,t,e,e==="getOobCode");return r(i,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(i,t){const e=cr(i,"auth");if(e.isInitialized()){const a=e.getImmediate(),o=e.getOptions();if(Ci(o,t??{}))return a;dn(a,"already-initialized")}return e.initialize({options:t})}function Ag(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ti);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Sg(i,t,e){const r=ur(i);ot(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!1,o=pd(t),{host:l,port:h}=Cg(t),f=h===null?"":`:${h}`,m={url:`${o}//${l}${f}/`},v=Object.freeze({host:l,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){ot(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ot(Ci(m,r.config.emulator)&&Ci(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Js(l)?Hh(`${o}//${l}${f}`):Lg()}function pd(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function Cg(i){const t=pd(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:_u(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:_u(l)}}}function _u(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function Lg(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Xn("not implemented")}_getIdTokenResponse(t){return Xn("not implemented")}_linkToIdToken(t,e){return Xn("not implemented")}_getReauthenticationResolver(t){return Xn("not implemented")}}async function Rg(i,t){return Ni(i,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(i,t){return to(i,"POST","/v1/accounts:signInWithPassword",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(i,t){return to(i,"POST","/v1/accounts:signInWithEmailLink",Di(i,t))}async function Mg(i,t){return to(i,"POST","/v1/accounts:signInWithEmailLink",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends zl{constructor(t,e,r,a=null){super("password",r),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new Hs(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Hs(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(t,e,"signInWithPassword",kg);case"emailLink":return xg(t,{email:this._email,oobCode:this._password});default:dn(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(t,r,"signUpPassword",Rg);case"emailLink":return Mg(t,{idToken:e,email:this._email,oobCode:this._password});default:dn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(i,t){return to(i,"POST","/v1/accounts:signInWithIdp",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="http://localhost";class er extends zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new er(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):dn("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:a,...o}=e;if(!r||!a)return null;const l=new er(r,a);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const e=this.buildRequest();return Zr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Zr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Zr(t,e)}buildRequest(){const t={requestUri:Og,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ys(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ng(i){const t=Cs(Ls(i)).link,e=t?Cs(Ls(t)).deep_link_id:null,r=Cs(Ls(i)).deep_link_id;return(r?Cs(Ls(r)).link:null)||r||e||t||i}class Ul{constructor(t){const e=Cs(Ls(t)),r=e.apiKey??null,a=e.oobCode??null,o=Dg(e.mode??null);ot(r&&a&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=a,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=Ng(t);try{return new Ul(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(t,e){return Hs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Ul.parseLink(e);return ot(r,"argument-error"),Hs._fromEmailAndCode(t,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends md{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends eo{constructor(){super("facebook.com")}static credential(t){return er._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vi.credentialFromTaggedObject(t)}static credentialFromError(t){return vi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vi.credential(t.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return er._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return wi.credentialFromTaggedObject(t)}static credentialFromError(t){return wi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return wi.credential(e,r)}catch{return null}}}wi.GOOGLE_SIGN_IN_METHOD="google.com";wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends eo{constructor(){super("github.com")}static credential(t){return er._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ti.credentialFromTaggedObject(t)}static credentialFromError(t){return Ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ti.credential(t.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends eo{constructor(){super("twitter.com")}static credential(t,e){return er._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ei.credentialFromTaggedObject(t)}static credentialFromError(t){return Ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ei.credential(e,r)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(i,t){return to(i,"POST","/v1/accounts:signUp",Di(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,a=!1){const o=await ln._fromIdTokenResponse(t,r,a),l=gu(r);return new nr({user:o,providerId:l,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const a=gu(r);return new nr({user:t,providerId:a,_tokenResponse:r,operationType:e})}}function gu(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends fn{constructor(t,e,r,a){super(e.code,e.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,a){return new ea(t,e,r,a)}}function _d(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(i,o,t,r):o})}async function Fg(i,t,e=!1){const r=await Us(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return nr._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(i,t,e=!1){const{auth:r}=i;if(We(r.app))return Promise.reject(ei(r));const a="reauthenticate";try{const o=await Us(i,_d(r,a,t,i),e);ot(o.idToken,r,"internal-error");const l=Fl(o.idToken);ot(l,r,"internal-error");const{sub:h}=l;return ot(i.uid===h,r,"user-mismatch"),nr._forOperation(i,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(i,t,e=!1){if(We(i.app))return Promise.reject(ei(i));const r="signIn",a=await _d(i,r,t),o=await nr._fromIdTokenResponse(i,r,a);return e||await i._updateCurrentUser(o.user),o}async function zg(i,t){return gd(ur(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(i){const t=ur(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ug(i,t,e){if(We(i.app))return Promise.reject(ei(i));const r=ur(i),l=await ml(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vg).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&yd(i),f}),h=await nr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function Hg(i,t,e){return We(i.app)?Promise.reject(ei(i)):zg(Te(i),ns.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yd(i),r})}function jg(i,t,e,r){return Te(i).onIdTokenChanged(t,e,r)}function qg(i,t,e){return Te(i).beforeAuthStateChanged(t,e)}function Gg(i,t,e,r){return Te(i).onAuthStateChanged(t,e,r)}function Zg(i){return Te(i).signOut()}const na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=1e3,$g=10;class wd extends vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),a=this.localCache[e];r!==a&&t(e,a,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((l,h,f)=>{this.notifyListeners(l,f)});return}const r=t.key;e?this.detachListener():this.stopPolling();const a=()=>{const l=this.storage.getItem(r);!e&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);hg()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,$g):a()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const a of Array.from(r))a(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}wd.type="LOCAL";const Kg=wd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Td.type="SESSION";const Ed=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(a=>a.isListeningto(t));if(e)return e;const r=new Ta(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:a,data:o}=e.data,l=this.handlersMap[a];if(!(l!=null&&l.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const h=Array.from(l).map(async m=>m(e.origin,o)),f=await Qg(h);e.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:f})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,l;return new Promise((h,f)=>{const m=Hl("",20);a.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:a,onMessage(y){const E=y;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(E.data.response);break;default:clearTimeout(v),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(l),a.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:m,data:e},[a.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function Jg(i){Ln().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function Xg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function ey(){return Id()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="firebaseLocalStorageDb",ny=1,ia="firebaseLocalStorage",Pd="fbase_key";class no{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ea(i,t){return i.transaction([ia],t?"readwrite":"readonly").objectStore(ia)}function iy(){const i=indexedDB.deleteDatabase(bd);return new no(i).toPromise()}function _l(){const i=indexedDB.open(bd,ny);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(ia,{keyPath:Pd})}catch(a){e(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(ia)?t(r):(r.close(),await iy(),t(await _l()))})})}async function yu(i,t,e){const r=Ea(i,!0).put({[Pd]:t,value:e});return new no(r).toPromise()}async function ry(i,t){const e=Ea(i,!1).get(t),r=await new no(e).toPromise();return r===void 0?null:r.value}function vu(i,t){const e=Ea(i,!0).delete(t);return new no(e).toPromise()}const sy=800,oy=3;class Ad{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>oy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(ey()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Xg(),!this.activeServiceWorker)return;this.sender=new Yg(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _l();return await yu(t,na,"1"),await vu(t,na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>yu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>ry(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>vu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const o=Ea(a,!1).getAll();return new no(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:a,value:o}of t)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const a of Array.from(r))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ad.type="LOCAL";const ay=Ad;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(i,t){return t?ti(t):(ot(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends zl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Zr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Zr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function cy(i){return gd(i.auth,new jl(i),i.bypassAuthState)}function uy(i){const{auth:t,user:e}=i;return ot(e,t,"internal-error"),Bg(e,new jl(i),i.bypassAuthState)}async function hy(i){const{auth:t,user:e}=i;return ot(e,t,"internal-error"),Fg(e,new jl(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e,r,a,o=!1){this.auth=t,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:a,tenantId:o,error:l,type:h}=t;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cy;case"linkViaPopup":case"linkViaRedirect":return hy;case"reauthViaPopup":case"reauthViaRedirect":return uy;default:dn(this.auth,"internal-error")}}resolve(t){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Xs(2e3,1e4);class jr extends Sd{constructor(t,e,r,a,o){super(t,e,a,o),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ot(t,this.auth,"internal-error"),t}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const t=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dy.get())};t()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="pendingRedirect",Ho=new Map;class py extends Sd{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ho.get(this.auth._key());if(!t){try{const r=await my(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ho.set(this.auth._key(),t)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function my(i,t){const e=yy(t),r=gy(i);if(!await r._isAvailable())return!1;const a=await r._get(e)==="true";return await r._remove(e),a}function _y(i,t){Ho.set(i._key(),t)}function gy(i){return ti(i._redirectPersistence)}function yy(i){return Uo(fy,i.config.apiKey,i.name)}async function vy(i,t,e=!1){if(We(i.app))return Promise.reject(ei(i));const r=ur(i),a=ly(r,t),l=await new py(r,a,e).execute();return l&&!e&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=10*60*1e3;class Ty{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ey(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Cd(t)){const a=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Cn(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wy&&this.cachedEventUids.clear(),this.cachedEventUids.has(wu(t))}saveEventToCache(t){this.cachedEventUids.add(wu(t)),this.lastProcessedEventTime=Date.now()}}function wu(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Cd({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ey(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cd(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(i,t={}){return Ni(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Py=/^https?/;async function Ay(i){if(i.config.emulator)return;const{authorizedDomains:t}=await Iy(i);for(const e of t)try{if(Sy(e))return}catch{}dn(i,"unauthorized-domain")}function Sy(i){const t=fl(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&l.hostname===r}if(!Py.test(e))return!1;if(by.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Xs(3e4,6e4);function Tu(){const i=Ln().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function Ly(i){return new Promise((t,e)=>{var a,o,l;function r(){Tu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tu(),e(Cn(i,"network-request-failed"))},timeout:Cy.get()})}if((o=(a=Ln().gapi)==null?void 0:a.iframes)!=null&&o.Iframe)t(gapi.iframes.getContext());else if((l=Ln().gapi)!=null&&l.load)r();else{const h=wg("iframefcb");return Ln()[h]=()=>{gapi.load?r():e(Cn(i,"network-request-failed"))},dd(`${vg()}?onload=${h}`).catch(f=>e(f))}}).catch(t=>{throw jo=null,t})}let jo=null;function Ry(i){return jo=jo||Ly(i),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Xs(5e3,15e3),xy="__/auth/iframe",My="emulator/auth/iframe",Oy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ny(i){const t=i.config;ot(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?Vl(t,My):`https://${i.config.authDomain}/${xy}`,r={apiKey:t.apiKey,appName:i.name,v:es},a=Dy.get(i.config.apiHost);a&&(r.eid=a);const o=i._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${Ys(r).slice(1)}`}async function Vy(i){const t=await Ry(i),e=Ln().gapi;return ot(e,i,"internal-error"),t.open({where:document.body,url:Ny(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oy,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const l=Cn(i,"network-request-failed"),h=Ln().setTimeout(()=>{o(l)},ky.get());function f(){Ln().clearTimeout(h),a(r)}r.ping(f).then(f,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},By=500,zy=600,Uy="_blank",Hy="http://localhost";class Eu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jy(i,t,e,r=By,a=zy){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f={...Fy,width:r.toString(),height:a.toString(),top:o,left:l},m=we().toLowerCase();e&&(h=sd(m)?Uy:e),id(m)&&(t=t||Hy,f.scrollbars="yes");const v=Object.entries(f).reduce((E,[S,B])=>`${E}${S}=${B},`,"");if(ug(m)&&h!=="_self")return qy(t||"",h),new Eu(null);const y=window.open(t||"",h,v);ot(y,i,"popup-blocked");try{y.focus()}catch{}return new Eu(y)}function qy(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="__/auth/handler",Zy="emulator/auth/handler",Wy=encodeURIComponent("fac");async function Iu(i,t,e,r,a,o){ot(i.config.authDomain,i,"auth-domain-config-required"),ot(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:es,eventId:a};if(t instanceof md){t.setDefaultLanguage(i.languageCode),l.providerId=t.providerId||"",Sm(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,y]of Object.entries({}))l[v]=y}if(t instanceof eo){const v=t.getScopes().filter(y=>y!=="");v.length>0&&(l.scopes=v.join(","))}i.tenantId&&(l.tid=i.tenantId);const h=l;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const f=await i._getAppCheckToken(),m=f?`#${Wy}=${encodeURIComponent(f)}`:"";return`${$y(i)}?${Ys(h).slice(1)}${m}`}function $y({config:i}){return i.emulator?Vl(i,Zy):`https://${i.authDomain}/${Gy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="webStorageSupport";class Ky{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=vy,this._overrideRedirectResult=_y}async _openPopup(t,e,r,a){var l;ri((l=this.eventManagers[t._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const o=await Iu(t,e,r,fl(),a);return jy(t,o,Hl())}async _openRedirect(t,e,r,a){await this._originValidation(t);const o=await Iu(t,e,r,fl(),a);return Jg(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:a,promise:o}=this.eventManagers[e];return a?Promise.resolve(a):(ri(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Vy(t),r=new Ty(t);return e.register("authEvent",a=>(ot(a==null?void 0:a.authEvent,t,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ja,{type:Ja},a=>{var l;const o=(l=a==null?void 0:a[0])==null?void 0:l[Ja];o!==void 0&&e(!!o),dn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ay(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ud()||rd()||Bl()}}const Qy=Ky;var bu="@firebase/auth",Pu="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ot(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xy(i){Mn(new hn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;ot(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:h,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hd(i)},m=new _g(r,a,o,f);return Ag(m,e),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Mn(new hn("auth-internal",t=>{const e=ur(t.getProvider("auth").getImmediate());return(r=>new Yy(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(bu,Pu,Jy(i)),Qe(bu,Pu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=5*60,ev=Fh("authIdTokenMaxAge")||tv;let Au=null;const nv=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>ev)return;const a=e==null?void 0:e.token;Au!==a&&(Au=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function iv(i=Dl()){const t=cr(i,"auth");if(t.isInitialized())return t.getImmediate();const e=Pg(i,{popupRedirectResolver:Qy,persistence:[ay,Kg,Ed]}),r=Fh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=nv(o.toString());qg(e,l,()=>l(e.currentUser)),jg(e,h=>l(h))}}const a=Nh("auth");return a&&Sg(e,`http://${a}`),e}function rv(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}gg({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=a=>{const o=Cn("internal-error");o.customData=a,e(o)},r.type="text/javascript",r.charset="UTF-8",rv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xy("Browser");var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai,Ld;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,I){function A(){}A.prototype=I.prototype,R.F=I.prototype,R.prototype=new A,R.prototype.constructor=R,R.D=function(k,C,x){for(var b=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)b[pt-2]=arguments[pt];return I.prototype[C].apply(k,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,I,A){A||(A=0);const k=Array(16);if(typeof I=="string")for(var C=0;C<16;++C)k[C]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(C=0;C<16;++C)k[C]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=R.g[0],A=R.g[1],C=R.g[2];let x=R.g[3],b;b=I+(x^A&(C^x))+k[0]+3614090360&4294967295,I=A+(b<<7&4294967295|b>>>25),b=x+(C^I&(A^C))+k[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(A^x&(I^A))+k[2]+606105819&4294967295,C=x+(b<<17&4294967295|b>>>15),b=A+(I^C&(x^I))+k[3]+3250441966&4294967295,A=C+(b<<22&4294967295|b>>>10),b=I+(x^A&(C^x))+k[4]+4118548399&4294967295,I=A+(b<<7&4294967295|b>>>25),b=x+(C^I&(A^C))+k[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(A^x&(I^A))+k[6]+2821735955&4294967295,C=x+(b<<17&4294967295|b>>>15),b=A+(I^C&(x^I))+k[7]+4249261313&4294967295,A=C+(b<<22&4294967295|b>>>10),b=I+(x^A&(C^x))+k[8]+1770035416&4294967295,I=A+(b<<7&4294967295|b>>>25),b=x+(C^I&(A^C))+k[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(A^x&(I^A))+k[10]+4294925233&4294967295,C=x+(b<<17&4294967295|b>>>15),b=A+(I^C&(x^I))+k[11]+2304563134&4294967295,A=C+(b<<22&4294967295|b>>>10),b=I+(x^A&(C^x))+k[12]+1804603682&4294967295,I=A+(b<<7&4294967295|b>>>25),b=x+(C^I&(A^C))+k[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(A^x&(I^A))+k[14]+2792965006&4294967295,C=x+(b<<17&4294967295|b>>>15),b=A+(I^C&(x^I))+k[15]+1236535329&4294967295,A=C+(b<<22&4294967295|b>>>10),b=I+(C^x&(A^C))+k[1]+4129170786&4294967295,I=A+(b<<5&4294967295|b>>>27),b=x+(A^C&(I^A))+k[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^A&(x^I))+k[11]+643717713&4294967295,C=x+(b<<14&4294967295|b>>>18),b=A+(x^I&(C^x))+k[0]+3921069994&4294967295,A=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(A^C))+k[5]+3593408605&4294967295,I=A+(b<<5&4294967295|b>>>27),b=x+(A^C&(I^A))+k[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^A&(x^I))+k[15]+3634488961&4294967295,C=x+(b<<14&4294967295|b>>>18),b=A+(x^I&(C^x))+k[4]+3889429448&4294967295,A=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(A^C))+k[9]+568446438&4294967295,I=A+(b<<5&4294967295|b>>>27),b=x+(A^C&(I^A))+k[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^A&(x^I))+k[3]+4107603335&4294967295,C=x+(b<<14&4294967295|b>>>18),b=A+(x^I&(C^x))+k[8]+1163531501&4294967295,A=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(A^C))+k[13]+2850285829&4294967295,I=A+(b<<5&4294967295|b>>>27),b=x+(A^C&(I^A))+k[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^A&(x^I))+k[7]+1735328473&4294967295,C=x+(b<<14&4294967295|b>>>18),b=A+(x^I&(C^x))+k[12]+2368359562&4294967295,A=C+(b<<20&4294967295|b>>>12),b=I+(A^C^x)+k[5]+4294588738&4294967295,I=A+(b<<4&4294967295|b>>>28),b=x+(I^A^C)+k[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^A)+k[11]+1839030562&4294967295,C=x+(b<<16&4294967295|b>>>16),b=A+(C^x^I)+k[14]+4259657740&4294967295,A=C+(b<<23&4294967295|b>>>9),b=I+(A^C^x)+k[1]+2763975236&4294967295,I=A+(b<<4&4294967295|b>>>28),b=x+(I^A^C)+k[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^A)+k[7]+4139469664&4294967295,C=x+(b<<16&4294967295|b>>>16),b=A+(C^x^I)+k[10]+3200236656&4294967295,A=C+(b<<23&4294967295|b>>>9),b=I+(A^C^x)+k[13]+681279174&4294967295,I=A+(b<<4&4294967295|b>>>28),b=x+(I^A^C)+k[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^A)+k[3]+3572445317&4294967295,C=x+(b<<16&4294967295|b>>>16),b=A+(C^x^I)+k[6]+76029189&4294967295,A=C+(b<<23&4294967295|b>>>9),b=I+(A^C^x)+k[9]+3654602809&4294967295,I=A+(b<<4&4294967295|b>>>28),b=x+(I^A^C)+k[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^A)+k[15]+530742520&4294967295,C=x+(b<<16&4294967295|b>>>16),b=A+(C^x^I)+k[2]+3299628645&4294967295,A=C+(b<<23&4294967295|b>>>9),b=I+(C^(A|~x))+k[0]+4096336452&4294967295,I=A+(b<<6&4294967295|b>>>26),b=x+(A^(I|~C))+k[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~A))+k[14]+2878612391&4294967295,C=x+(b<<15&4294967295|b>>>17),b=A+(x^(C|~I))+k[5]+4237533241&4294967295,A=C+(b<<21&4294967295|b>>>11),b=I+(C^(A|~x))+k[12]+1700485571&4294967295,I=A+(b<<6&4294967295|b>>>26),b=x+(A^(I|~C))+k[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~A))+k[10]+4293915773&4294967295,C=x+(b<<15&4294967295|b>>>17),b=A+(x^(C|~I))+k[1]+2240044497&4294967295,A=C+(b<<21&4294967295|b>>>11),b=I+(C^(A|~x))+k[8]+1873313359&4294967295,I=A+(b<<6&4294967295|b>>>26),b=x+(A^(I|~C))+k[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~A))+k[6]+2734768916&4294967295,C=x+(b<<15&4294967295|b>>>17),b=A+(x^(C|~I))+k[13]+1309151649&4294967295,A=C+(b<<21&4294967295|b>>>11),b=I+(C^(A|~x))+k[4]+4149444226&4294967295,I=A+(b<<6&4294967295|b>>>26),b=x+(A^(I|~C))+k[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~A))+k[2]+718787259&4294967295,C=x+(b<<15&4294967295|b>>>17),b=A+(x^(C|~I))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+x&4294967295}r.prototype.v=function(R,I){I===void 0&&(I=R.length);const A=I-this.blockSize,k=this.C;let C=this.h,x=0;for(;x<I;){if(C==0)for(;x<=A;)a(this,R,x),x+=this.blockSize;if(typeof R=="string"){for(;x<I;)if(k[C++]=R.charCodeAt(x++),C==this.blockSize){a(this,k),C=0;break}}else for(;x<I;)if(k[C++]=R[x++],C==this.blockSize){a(this,k),C=0;break}}this.h=C,this.o+=I},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;I=this.o*8;for(var A=R.length-8;A<R.length;++A)R[A]=I&255,I/=256;for(this.v(R),R=Array(16),I=0,A=0;A<4;++A)for(let k=0;k<32;k+=8)R[I++]=this.g[A]>>>k&255;return R};function o(R,I){var A=h;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=I(R)}function l(R,I){this.h=I;const A=[];let k=!0;for(let C=R.length-1;C>=0;C--){const x=R[C]|0;k&&x==I||(A[C]=x,k=!1)}this.g=A}var h={};function f(R){return-128<=R&&R<128?o(R,function(I){return new l([I|0],I<0?-1:0)}):new l([R|0],R<0?-1:0)}function m(R){if(isNaN(R)||!isFinite(R))return y;if(R<0)return j(m(-R));const I=[];let A=1;for(let k=0;R>=A;k++)I[k]=R/A|0,A*=4294967296;return new l(I,0)}function v(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return j(v(R.substring(1),I));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=m(Math.pow(I,8));let k=y;for(let x=0;x<R.length;x+=8){var C=Math.min(8,R.length-x);const b=parseInt(R.substring(x,x+C),I);C<8?(C=m(Math.pow(I,C)),k=k.j(C).add(m(b))):(k=k.j(A),k=k.add(m(b)))}return k}var y=f(0),E=f(1),S=f(16777216);i=l.prototype,i.m=function(){if(V(this))return-j(this).m();let R=0,I=1;for(let A=0;A<this.g.length;A++){const k=this.i(A);R+=(k>=0?k:4294967296+k)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(B(this))return"0";if(V(this))return"-"+j(this).toString(R);const I=m(Math.pow(R,6));var A=this;let k="";for(;;){const C=Mt(A,I).g;A=$(A,C.j(I));let x=((A.g.length>0?A.g[0]:A.h)>>>0).toString(R);if(A=C,B(A))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},i.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function B(R){if(R.h!=0)return!1;for(let I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function V(R){return R.h==-1}i.l=function(R){return R=$(this,R),V(R)?-1:B(R)?0:1};function j(R){const I=R.g.length,A=[];for(let k=0;k<I;k++)A[k]=~R.g[k];return new l(A,~R.h).add(E)}i.abs=function(){return V(this)?j(this):this},i.add=function(R){const I=Math.max(this.g.length,R.g.length),A=[];let k=0;for(let C=0;C<=I;C++){let x=k+(this.i(C)&65535)+(R.i(C)&65535),b=(x>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);k=b>>>16,x&=65535,b&=65535,A[C]=b<<16|x}return new l(A,A[A.length-1]&-2147483648?-1:0)};function $(R,I){return R.add(j(I))}i.j=function(R){if(B(this)||B(R))return y;if(V(this))return V(R)?j(this).j(j(R)):j(j(this).j(R));if(V(R))return j(this.j(j(R)));if(this.l(S)<0&&R.l(S)<0)return m(this.m()*R.m());const I=this.g.length+R.g.length,A=[];for(var k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(let C=0;C<R.g.length;C++){const x=this.i(k)>>>16,b=this.i(k)&65535,pt=R.i(C)>>>16,Ne=R.i(C)&65535;A[2*k+2*C]+=b*Ne,X(A,2*k+2*C),A[2*k+2*C+1]+=x*Ne,X(A,2*k+2*C+1),A[2*k+2*C+1]+=b*pt,X(A,2*k+2*C+1),A[2*k+2*C+2]+=x*pt,X(A,2*k+2*C+2)}for(R=0;R<I;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=I;R<2*I;R++)A[R]=0;return new l(A,0)};function X(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function et(R,I){this.g=R,this.h=I}function Mt(R,I){if(B(I))throw Error("division by zero");if(B(R))return new et(y,y);if(V(R))return I=Mt(j(R),I),new et(j(I.g),j(I.h));if(V(I))return I=Mt(R,j(I)),new et(j(I.g),I.h);if(R.g.length>30){if(V(R)||V(I))throw Error("slowDivide_ only works with positive integers.");for(var A=E,k=I;k.l(R)<=0;)A=bt(A),k=bt(k);var C=Bt(A,1),x=Bt(k,1);for(k=Bt(k,2),A=Bt(A,2);!B(k);){var b=x.add(k);b.l(R)<=0&&(C=C.add(A),x=b),k=Bt(k,1),A=Bt(A,1)}return I=$(R,C.j(I)),new et(C,I)}for(C=y;R.l(I)>=0;){for(A=Math.max(1,Math.floor(R.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=m(A),b=x.j(I);V(b)||b.l(R)>0;)A-=k,x=m(A),b=x.j(I);B(x)&&(x=E),C=C.add(x),R=$(R,b)}return new et(C,R)}i.B=function(R){return Mt(this,R).h},i.and=function(R){const I=Math.max(this.g.length,R.g.length),A=[];for(let k=0;k<I;k++)A[k]=this.i(k)&R.i(k);return new l(A,this.h&R.h)},i.or=function(R){const I=Math.max(this.g.length,R.g.length),A=[];for(let k=0;k<I;k++)A[k]=this.i(k)|R.i(k);return new l(A,this.h|R.h)},i.xor=function(R){const I=Math.max(this.g.length,R.g.length),A=[];for(let k=0;k<I;k++)A[k]=this.i(k)^R.i(k);return new l(A,this.h^R.h)};function bt(R){const I=R.g.length+1,A=[];for(let k=0;k<I;k++)A[k]=R.i(k)<<1|R.i(k-1)>>>31;return new l(A,R.h)}function Bt(R,I){const A=I>>5;I%=32;const k=R.g.length-A,C=[];for(let x=0;x<k;x++)C[x]=I>0?R.i(x+A)>>>I|R.i(x+A+1)<<32-I:R.i(x+A);return new l(C,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ld=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=v,Ai=l}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rd,Rs,kd,qo,gl,xd,Md,Od;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=e(this);function a(c,p){if(p)t:{var g=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var M=c[T];if(!(M in g))break t;g=g[M]}c=c[c.length-1],T=g[c],p=p(T),p!=T&&p!=null&&t(g,c,{configurable:!0,writable:!0,value:p})}}a("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(c){return c||function(p){var g=[],T;for(T in p)Object.prototype.hasOwnProperty.call(p,T)&&g.push([T,p[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function f(c,p,g){return c.call.apply(c.bind,arguments)}function m(c,p,g){return m=f,m.apply(null,arguments)}function v(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function y(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(T,M,D){for(var Z=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)Z[ut-2]=arguments[ut];return p.prototype[M].apply(T,Z)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const p=c.length;if(p>0){const g=Array(p);for(let T=0;T<p;T++)g[T]=c[T];return g}return[]}function B(c,p){for(let T=1;T<arguments.length;T++){const M=arguments[T];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=c.length||0;const D=M.length||0;c.length=g+D;for(let Z=0;Z<D;Z++)c[g+Z]=M[Z]}else c.push(M)}}class V{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function j(c){l.setTimeout(()=>{throw c},0)}function $(){var c=R;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class X{constructor(){this.h=this.g=null}add(p,g){const T=et.get();T.set(p,g),this.h?this.h.next=T:this.g=T,this.h=T}}var et=new V(()=>new Mt,c=>c.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,Bt=!1,R=new X,I=()=>{const c=Promise.resolve(void 0);bt=()=>{c.then(A)}};function A(){for(var c;c=$();){try{c.h.call(c.g)}catch(g){j(g)}var p=et;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}Bt=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};l.addEventListener("test",g,p),l.removeEventListener("test",g,p)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function pt(c,p){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}y(pt,C),pt.prototype.init=function(c,p){const g=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&pt.Z.h.call(this)},pt.prototype.h=function(){pt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),Yt=0;function Nn(c,p,g,T,M){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!T,this.ha=M,this.key=++Yt,this.da=this.fa=!1}function lt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vn(c,p,g){for(const T in c)p.call(g,c[T],T,c)}function rt(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function St(c){const p={};for(const g in c)p[g]=c[g];return p}const Gt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(c,p){let g,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(g in T)c[g]=T[g];for(let D=0;D<Gt.length;D++)g=Gt[D],Object.prototype.hasOwnProperty.call(T,g)&&(c[g]=T[g])}}function Ot(c){this.src=c,this.g={},this.h=0}Ot.prototype.add=function(c,p,g,T,M){const D=c.toString();c=this.g[D],c||(c=this.g[D]=[],this.h++);const Z=ht(c,p,T,M);return Z>-1?(p=c[Z],g||(p.fa=!1)):(p=new Nn(p,this.src,D,!!T,M),p.fa=g,c.push(p)),p};function Tt(c,p){const g=p.type;if(g in c.g){var T=c.g[g],M=Array.prototype.indexOf.call(T,p,void 0),D;(D=M>=0)&&Array.prototype.splice.call(T,M,1),D&&(lt(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function ht(c,p,g,T){for(let M=0;M<c.length;++M){const D=c[M];if(!D.da&&D.listener==p&&D.capture==!!g&&D.ha==T)return M}return-1}var he="closure_lm_"+(Math.random()*1e6|0),Ee={};function Ye(c,p,g,T,M){if(Array.isArray(p)){for(let D=0;D<p.length;D++)Ye(c,p[D],g,T,M);return null}return g=Ve(g),c&&c[Ne]?c.J(p,g,h(T)?!!T.capture:!1,M):Je(c,p,g,!1,T,M)}function Je(c,p,g,T,M,D){if(!p)throw Error("Invalid event type");const Z=h(M)?!!M.capture:!!M;let ut=mn(c);if(ut||(c[he]=ut=new Ot(c)),g=ut.add(p,g,T,Z,D),g.proxy)return g;if(T=ai(),g.proxy=T,T.src=c,T.listener=g,c.addEventListener)x||(M=Z),M===void 0&&(M=!1),c.addEventListener(p.toString(),T,M);else if(c.attachEvent)c.attachEvent(Vi(p.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ai(){function c(g){return p.call(c.src,c.listener,g)}const p=mr;return c}function Xe(c,p,g,T,M){if(Array.isArray(p))for(var D=0;D<p.length;D++)Xe(c,p[D],g,T,M);else T=h(T)?!!T.capture:!!T,g=Ve(g),c&&c[Ne]?(c=c.i,D=String(p).toString(),D in c.g&&(p=c.g[D],g=ht(p,g,T,M),g>-1&&(lt(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[D],c.h--)))):c&&(c=mn(c))&&(p=c.g[p.toString()],c=-1,p&&(c=ht(p,g,T,M)),(g=c>-1?p[c]:null)&&pn(g))}function pn(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ne])Tt(p.i,c);else{var g=c.type,T=c.proxy;p.removeEventListener?p.removeEventListener(g,T,c.capture):p.detachEvent?p.detachEvent(Vi(g),T):p.addListener&&p.removeListener&&p.removeListener(T),(g=mn(p))?(Tt(g,c),g.h==0&&(g.src=null,p[he]=null)):lt(c)}}}function Vi(c){return c in Ee?Ee[c]:Ee[c]="on"+c}function mr(c,p){if(c.da)c=!0;else{p=new pt(p,this);const g=c.listener,T=c.ha||c.src;c.fa&&pn(c),c=g.call(T,p)}return c}function mn(c){return c=c[he],c instanceof Ot?c:null}var ke="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ve(c){return typeof c=="function"?c:(c[ke]||(c[ke]=function(p){return c.handleEvent(p)}),c[ke])}function zt(){k.call(this),this.i=new Ot(this),this.M=this,this.G=null}y(zt,k),zt.prototype[Ne]=!0,zt.prototype.removeEventListener=function(c,p,g,T){Xe(this,c,p,g,T)};function Ut(c,p){var g,T=c.G;if(T)for(g=[];T;T=T.G)g.push(T);if(c=c.M,T=p.type||p,typeof p=="string")p=new C(p,c);else if(p instanceof C)p.target=p.target||c;else{var M=p;p=new C(T,c),ne(p,M)}M=!0;let D,Z;if(g)for(Z=g.length-1;Z>=0;Z--)D=p.g=g[Z],M=_n(D,T,!0,p)&&M;if(D=p.g=c,M=_n(D,T,!0,p)&&M,M=_n(D,T,!1,p)&&M,g)for(Z=0;Z<g.length;Z++)D=p.g=g[Z],M=_n(D,T,!1,p)&&M}zt.prototype.N=function(){if(zt.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let T=0;T<g.length;T++)lt(g[T]);delete c.g[p],c.h--}}this.G=null},zt.prototype.J=function(c,p,g,T){return this.i.add(String(c),p,!1,g,T)},zt.prototype.K=function(c,p,g,T){return this.i.add(String(c),p,!0,g,T)};function _n(c,p,g,T){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let D=0;D<p.length;++D){const Z=p[D];if(Z&&!Z.da&&Z.capture==g){const ut=Z.listener,At=Z.ha||Z.src;Z.fa&&Tt(c.i,Z),M=ut.call(At,T)!==!1&&M}}return M&&!T.defaultPrevented}function tn(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:l.setTimeout(c,p||0)}function li(c){c.g=tn(()=>{c.g=null,c.i&&(c.i=!1,li(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Fi extends k{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:li(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(c){k.call(this),this.h=c,this.g={}}y(Fe,k);var Fn=[];function ci(c){Vn(c.g,function(p,g){this.g.hasOwnProperty(g)&&pn(p)},c),c.g={}}Fe.prototype.N=function(){Fe.Z.N.call(this),ci(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=l.JSON.stringify,_r=l.JSON.parse,Bi=class{stringify(c){return l.JSON.stringify(c,void 0)}parse(c){return l.JSON.parse(c,void 0)}};function ui(){}function zi(){}var en={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gn(){C.call(this,"d")}y(gn,C);function zn(){C.call(this,"c")}y(zn,C);var Be={},nn=null;function Un(){return nn=nn||new zt}Be.Ia="serverreachability";function Ui(c){C.call(this,Be.Ia,c)}y(Ui,C);function F(c){const p=Un();Ut(p,new Ui(p))}Be.STAT_EVENT="statevent";function G(c,p){C.call(this,Be.STAT_EVENT,c),this.stat=p}y(G,C);function q(c){const p=Un();Ut(p,new G(p,c))}Be.Ja="timingevent";function Q(c,p){C.call(this,Be.Ja,c),this.size=p}y(Q,C);function nt(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){c()},p)}function gt(){this.g=!0}gt.prototype.ua=function(){this.g=!1};function ie(c,p,g,T,M,D){c.info(function(){if(c.g)if(D){var Z="",ut=D.split("&");for(let Lt=0;Lt<ut.length;Lt++){var At=ut[Lt].split("=");if(At.length>1){const Kt=At[0];At=At[1];const qe=Kt.split("_");Z=qe.length>=2&&qe[1]=="type"?Z+(Kt+"="+At+"&"):Z+(Kt+"=redacted&")}}}else Z=null;else Z=D;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+p+`
`+g+`
`+Z})}function Dt(c,p,g,T,M,D,Z){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+p+`
`+g+`
`+D+" "+Z})}function Nt(c,p,g,T){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+kt(c,g)+(T?" "+T:"")})}function Ht(c,p){c.info(function(){return"TIMEOUT: "+p})}gt.prototype.info=function(){};function kt(c,p){if(!c.g)return p;if(!p)return null;try{const D=JSON.parse(p);if(D){for(c=0;c<D.length;c++)if(Array.isArray(D[c])){var g=D[c];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return Bn(D)}catch{return p}}var re={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},de={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hi;function Zt(){}y(Zt,ui),Zt.prototype.g=function(){return new XMLHttpRequest},hi=new Zt;function W(c){return encodeURIComponent(String(c))}function ae(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function $t(c,p,g,T){this.j=c,this.i=p,this.l=g,this.S=T||1,this.V=new Fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yn}function yn(){this.i=null,this.g="",this.h=!1}var as={},Hi={};function gr(c,p,g){c.M=1,c.A=Vt(Ie(p)),c.u=g,c.R=!0,Hn(c,null)}function Hn(c,p){c.F=Date.now(),yr(c),c.B=Ie(c.A);var g=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Ir(g.i,"t",T),c.C=0,g=c.j.L,c.h=new yn,c.g=Ts(c.j,g?p:null,!c.u),c.P>0&&(c.O=new Fi(m(c.Y,c,c.g),c.P)),p=c.V,g=c.g,T=c.ba;var M="readystatechange";Array.isArray(M)||(M&&(Fn[0]=M.toString()),M=Fn);for(let D=0;D<M.length;D++){const Z=Ye(g,M[D],T||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=c.J?St(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),F(),ie(c.i,c.v,c.B,c.l,c.S,c.u)}$t.prototype.ba=function(c){c=c.target;const p=this.O;p&&En(c)==3?p.j():this.Y(c)},$t.prototype.Y=function(c){try{if(c==this.g)t:{const ut=En(this.g),At=this.g.ya(),Lt=this.g.ca();if(!(ut<3)&&(ut!=3||this.g&&(this.h.h||this.g.la()||ps(this.g)))){this.K||ut!=4||At==7||(At==8||Lt<=0?F(3):F(2)),vr(this);var p=this.g.ca();this.X=p;var g=lo(this);if(this.o=p==200,Dt(this.i,this.v,this.B,this.l,this.S,ut,p),this.o){if(this.U&&!this.L){e:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var D=T;break e}}D=null}if(c=D)Nt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ls(this,c);else{this.o=!1,this.m=3,q(12),ze(this),ji(this);break t}}if(this.R){c=!0;let Kt;for(;!this.K&&this.C<g.length;)if(Kt=Va(this,g),Kt==Hi){ut==4&&(this.m=4,q(14),c=!1),Nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==as){this.m=4,q(15),Nt(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Nt(this.i,this.l,Kt,null),ls(this,Kt);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||g.length!=0||this.h.h||(this.m=1,q(16),c=!1),this.o=this.o&&c,!c)Nt(this.i,this.l,g,"[Invalid Chunked Response]"),ze(this),ji(this);else if(g.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),vs(Z),Z.P=!0,q(11))}}else Nt(this.i,this.l,g,null),ls(this,g);ut==4&&ze(this),this.o&&!this.K&&(ut==4?Me(this.j,this):(this.o=!1,yr(this)))}else ms(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,q(12)):(this.m=0,q(13)),ze(this),ji(this)}}}catch{}finally{}};function lo(c){if(!co(c))return c.g.la();const p=ps(c.g);if(p==="")return"";let g="";const T=p.length,M=En(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ze(c),ji(c),"";c.h.i=new l.TextDecoder}for(let D=0;D<T;D++)c.h.h=!0,g+=c.h.i.decode(p[D],{stream:!(M&&D==T-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function co(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Va(c,p){var g=c.C,T=p.indexOf(`
`,g);return T==-1?Hi:(g=Number(p.substring(g,T)),isNaN(g)?as:(T+=1,T+g>p.length?Hi:(p=p.slice(T,T+g),c.C=T+g,p)))}$t.prototype.cancel=function(){this.K=!0,ze(this)};function yr(c){c.T=Date.now()+c.H,uo(c,c.H)}function uo(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=nt(m(c.aa,c),p)}function vr(c){c.D&&(l.clearTimeout(c.D),c.D=null)}$t.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Ht(this.i,this.B),this.M!=2&&(F(),q(17)),ze(this),this.m=2,ji(this)):uo(this,this.T-c)};function ji(c){c.j.I==0||c.K||Me(c.j,c)}function ze(c){vr(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,ci(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function ls(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||qi(g.h,c))){if(!c.L&&qi(g.h,c)&&g.I==3){try{var T=g.Ba.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){t:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)Cr(g),Ar(g);else break t;ys(g),q(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=nt(m(g.Va,g),6e3));po(g.h)<=1&&g.ta&&(g.ta=void 0)}else bn(g,11)}else if((c.L||g.g==c)&&Cr(g),!b(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Lt=M[p];const Kt=Lt[0];if(!(Kt<=g.K))if(g.K=Kt,Lt=Lt[1],g.I==2)if(Lt[0]=="c"){g.M=Lt[1],g.ba=Lt[2];const qe=Lt[3];qe!=null&&(g.ka=qe,g.j.info("VER="+g.ka));const on=Lt[4];on!=null&&(g.za=on,g.j.info("SVER="+g.za));const Ge=Lt[5];Ge!=null&&typeof Ge=="number"&&Ge>0&&(T=1.5*Ge,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Pn=c.g;if(Pn){const kr=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var D=T.h;D.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(jn(D,D.h),D.h=null))}if(T.G){const xr=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;xr&&(T.wa=xr,J(T.J,T.G,xr))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var Z=c;if(T.na=ws(T,T.L?T.ba:null,T.W),Z.L){cs(T.h,Z);var ut=Z,At=T.O;At&&(ut.H=At),ut.D&&(vr(ut),yr(ut)),T.g=Z}else gs(T);g.i.length>0&&In(g)}else Lt[0]!="stop"&&Lt[0]!="close"||bn(g,7);else g.I==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?bn(g,7):mt(g):Lt[0]!="noop"&&g.l&&g.l.qa(Lt),g.A=0)}}F(4)}catch{}}var Fa=class{constructor(c,p){this.g=c,this.map=p}};function ho(c){this.l=c||10,l.PerformanceNavigationTiming?(c=l.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function po(c){return c.h?1:c.g?c.g.size:0}function qi(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function jn(c,p){c.g?c.g.add(p):c.h=p}function cs(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}ho.prototype.cancel=function(){if(this.i=us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function us(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return S(c.i)}var di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Et(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const T=c[g].indexOf("=");let M,D=null;T>=0?(M=c[g].substring(0,T),D=c[g].substring(T+1)):M=c[g],p(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Pt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Pt?(this.l=c.l,Ue(this,c.j),this.o=c.o,this.g=c.g,He(this,c.u),this.h=c.h,Gi(this,Zi(c.i)),this.m=c.m):c&&(p=String(c).match(di))?(this.l=!1,Ue(this,p[1]||"",!0),this.o=qn(p[2]||""),this.g=qn(p[3]||"",!0),He(this,p[4]),this.h=qn(p[5]||"",!0),Gi(this,p[6]||"",!0),this.m=qn(p[7]||"")):(this.l=!1,this.i=new rn(null,this.l))}Pt.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(vn(p,mo,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(vn(p,mo,!0),"@"),c.push(W(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(vn(g,g.charAt(0)=="/"?Gn:wr,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",vn(g,Zn)),c.join("")},Pt.prototype.resolve=function(c){const p=Ie(this);let g=!!c.j;g?Ue(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var T=c.h;if(g)He(p,c.u);else if(g=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=p.h.lastIndexOf("/");M!=-1&&(T=p.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const D=[];for(let Z=0;Z<M.length;){const ut=M[Z++];ut=="."?T&&Z==M.length&&D.push(""):ut==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),T&&Z==M.length&&D.push("")):(D.push(ut),T=!0)}T=D.join("/")}else T=M}return g?p.h=T:g=c.i.toString()!=="",g?Gi(p,Zi(c.i)):g=!!c.m,g&&(p.m=c.m),p};function Ie(c){return new Pt(c)}function Ue(c,p,g){c.j=g?qn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function He(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Gi(c,p,g){p instanceof rn?(c.i=p,hs(c.i,c.l)):(g||(p=vn(p,Wt)),c.i=new rn(p,c.l))}function J(c,p,g){c.i.set(p,g)}function Vt(c){return J(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function qn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vn(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,Se),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Se(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var mo=/[#\/\?@]/g,wr=/[#\?:]/g,Gn=/[#\?]/g,Wt=/[#\?@]/g,Zn=/#/g;function rn(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function xe(c){c.g||(c.g=new Map,c.h=0,c.i&&Et(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=rn.prototype,i.add=function(c,p){xe(this),this.i=null,c=wn(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function Tr(c,p){xe(c),p=wn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function fi(c,p){return xe(c),p=wn(c,p),c.g.has(p)}i.forEach=function(c,p){xe(this),this.g.forEach(function(g,T){g.forEach(function(M){c.call(p,M,T,this)},this)},this)};function Er(c,p){xe(c);let g=[];if(typeof p=="string")fi(c,p)&&(g=g.concat(c.g.get(wn(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}i.set=function(c,p){return xe(this),this.i=null,c=wn(this,c),fi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},i.get=function(c,p){return c?(c=Er(this,c),c.length>0?String(c[0]):p):p};function Ir(c,p,g){Tr(c,p),g.length>0&&(c.i=null,c.g.set(wn(c,p),S(g)),c.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let T=0;T<p.length;T++){var g=p[T];const M=W(g);g=Er(this,g);for(let D=0;D<g.length;D++){let Z=M;g[D]!==""&&(Z+="="+W(g[D])),c.push(Z)}}return this.i=c.join("&")};function Zi(c){const p=new rn;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function wn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function hs(c,p){p&&!c.j&&(xe(c),c.i=null,c.g.forEach(function(g,T){const M=T.toLowerCase();T!=M&&(Tr(this,T),Ir(this,M,g))},c)),c.j=p}function br(c,p){const g=new gt;if(l.Image){const T=new Image;T.onload=v(je,g,"TestLoadImage: loaded",!0,p,T),T.onerror=v(je,g,"TestLoadImage: error",!1,p,T),T.onabort=v(je,g,"TestLoadImage: abort",!1,p,T),T.ontimeout=v(je,g,"TestLoadImage: timeout",!1,p,T),l.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else p(!1)}function _o(c,p){const g=new gt,T=new AbortController,M=setTimeout(()=>{T.abort(),je(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:T.signal}).then(D=>{clearTimeout(M),D.ok?je(g,"TestPingServer: ok",!0,p):je(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),je(g,"TestPingServer: error",!1,p)})}function je(c,p,g,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(g)}catch{}}function Ba(){this.g=new Bi}function ct(c){this.i=c.Sb||null,this.h=c.ab||!1}y(ct,ui),ct.prototype.g=function(){return new be(this.i,this.h)};function be(c,p){zt.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(be,zt),i=be.prototype,i.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Wn(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||l).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xt(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function xt(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?pi(this):Wn(this),this.readyState==3&&xt(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,pi(this))},i.Na=function(c){this.g&&(this.response=c,pi(this))},i.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Wn(c)}i.setRequestHeader=function(c,p){this.A.append(c,p)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function Wn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(be.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Pr(c){let p="";return Vn(c,function(g,T){p+=T,p+=":",p+=g,p+=`\r
`}),p}function Wi(c,p,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=Pr(g),typeof c=="string"?g!=null&&W(g):J(c,p,g))}function Ct(c){zt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(Ct,zt);var ds=/^https?$/i,$i=["POST","PUT"];i=Ct.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,p,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hi.g(),this.g.onreadystatechange=E(m(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(D){Jt(this,D);return}if(c=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)g.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const D of T.keys())g.set(D,T.get(D));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(D=>D.toLowerCase()=="content-type"),M=l.FormData&&c instanceof l.FormData,!(Array.prototype.indexOf.call($i,p,void 0)>=0)||T||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Z]of g)this.g.setRequestHeader(D,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(D){Jt(this,D)}};function Jt(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,Tn(c),Ki(c)}function Tn(c){c.A||(c.A=!0,Ut(c,"complete"),Ut(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ut(this,"complete"),Ut(this,"abort"),Ki(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),Ct.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?fs(this):this.Xa())},i.Xa=function(){fs(this)};function fs(c){if(c.h&&typeof o<"u"){if(c.v&&En(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ut(c,"readystatechange"),En(c)==4){c.h=!1;try{const D=c.ca();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var g;if(!(g=p)){var T;if(T=D===0){let Z=String(c.D).match(di)[1]||null;!Z&&l.self&&l.self.location&&(Z=l.self.location.protocol.slice(0,-1)),T=!ds.test(Z?Z.toLowerCase():"")}g=T}if(g)Ut(c,"complete"),Ut(c,"success");else{c.o=6;try{var M=En(c)>2?c.g.statusText:""}catch{M=""}c.l=M+" ["+c.ca()+"]",Tn(c)}}finally{Ki(c)}}}}function Ki(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||Ut(c,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function En(c){return c.g?c.g.readyState:0}i.ca=function(){try{return En(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),_r(p)}};function ps(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ms(c){const p={};c=(c.g&&En(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var g=ae(c[T]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const D=p[M]||[];p[M]=D,D.push(g)}rt(p,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qi(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function _s(c){this.za=0,this.i=[],this.j=new gt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qi("baseRetryDelayMs",5e3,c),this.Za=Qi("retryDelaySeedMs",1e4,c),this.Ta=Qi("forwardChannelMaxRetries",2,c),this.va=Qi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ho(c&&c.concurrentRequestLimit),this.Ba=new Ba,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=_s.prototype,i.ka=8,i.I=1,i.connect=function(c,p,g,T){q(0),this.W=c,this.H=p||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=ws(this,null,this.W),In(this)};function mt(c){if(Ce(c),c.I==3){var p=c.V++,g=Ie(c.J);if(J(g,"SID",c.M),J(g,"RID",p),J(g,"TYPE","terminate"),$n(c,g),p=new $t(c,c.j,p),p.M=2,p.A=Vt(Ie(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&l.Image&&(new Image().src=p.A,g=!0),g||(p.g=Ts(p.j,null),p.g.ea(p.A)),p.F=Date.now(),yr(p)}sn(c)}function Ar(c){c.g&&(vs(c),c.g.cancel(),c.g=null)}function Ce(c){Ar(c),c.v&&(l.clearTimeout(c.v),c.v=null),Cr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&l.clearTimeout(c.m),c.m=null)}function In(c){if(!fo(c.h)&&!c.m){c.m=!0;var p=c.Ea;bt||I(),Bt||(bt(),Bt=!0),R.add(p,c),c.D=0}}function go(c,p){return po(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=nt(m(c.Ea,c,p),wo(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const M=new $t(this,this.j,c);let D=this.o;if(this.U&&(D?(D=St(D),ne(D,this.U)):D=this.U),this.u!==null||this.R||(M.J=D,D=null),this.S)t:{for(var p=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(p+=T,p>4096){p=g;break t}if(p===4096||g===this.i.length-1){p=g+1;break t}}p=1e3}else p=1e3;p=vo(this,M,p),g=Ie(this.J),J(g,"RID",c),J(g,"CVER",22),this.G&&J(g,"X-HTTP-Session-Id",this.G),$n(this,g),D&&(this.R?p="headers="+W(Pr(D))+"&"+p:this.u&&Wi(g,this.u,D)),jn(this.h,M),this.Ra&&J(g,"TYPE","init"),this.S?(J(g,"$req",p),J(g,"SID","null"),M.U=!0,gr(M,g,null)):gr(M,g,p),this.I=2}}else this.I==3&&(c?yo(this,c):this.i.length==0||fo(this.h)||yo(this))};function yo(c,p){var g;p?g=p.l:g=c.V++;const T=Ie(c.J);J(T,"SID",c.M),J(T,"RID",g),J(T,"AID",c.K),$n(c,T),c.u&&c.o&&Wi(T,c.u,c.o),g=new $t(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=vo(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),jn(c.h,g),gr(g,T,p)}function $n(c,p){c.H&&Vn(c.H,function(g,T){J(p,T,g)}),c.l&&Vn({},function(g,T){J(p,T,g)})}function vo(c,p,g){g=Math.min(c.i.length,g);const T=c.l?m(c.l.Ka,c.l,c):null;t:{var M=c.i;let ut=-1;for(;;){const At=["count="+g];ut==-1?g>0?(ut=M[0].g,At.push("ofs="+ut)):ut=0:At.push("ofs="+ut);let Lt=!0;for(let Kt=0;Kt<g;Kt++){var D=M[Kt].g;const qe=M[Kt].map;if(D-=ut,D<0)ut=Math.max(0,M[Kt].g-100),Lt=!1;else try{D="req"+D+"_"||"";try{var Z=qe instanceof Map?qe:Object.entries(qe);for(const[on,Ge]of Z){let Pn=Ge;h(Ge)&&(Pn=Bn(Ge)),At.push(D+on+"="+encodeURIComponent(Pn))}}catch(on){throw At.push(D+"type="+encodeURIComponent("_badmap")),on}}catch{T&&T(qe)}}if(Lt){Z=At.join("&");break t}}Z=void 0}return c=c.i.splice(0,g),p.G=c,Z}function gs(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;bt||I(),Bt||(bt(),Bt=!0),R.add(p,c),c.A=0}}function ys(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=nt(m(c.Da,c),wo(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Sr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=nt(m(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,q(10),Ar(this),Sr(this))};function vs(c){c.B!=null&&(l.clearTimeout(c.B),c.B=null)}function Sr(c){c.g=new $t(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=Ie(c.na);J(p,"RID","rpc"),J(p,"SID",c.M),J(p,"AID",c.K),J(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&J(p,"TO",c.ia),J(p,"TYPE","xmlhttp"),$n(c,p),c.u&&c.o&&Wi(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Vt(Ie(p)),g.u=null,g.R=!0,Hn(g,c)}i.Va=function(){this.C!=null&&(this.C=null,Ar(this),ys(this),q(19))};function Cr(c){c.C!=null&&(l.clearTimeout(c.C),c.C=null)}function Me(c,p){var g=null;if(c.g==p){Cr(c),vs(c),c.g=null;var T=2}else if(qi(c.h,p))g=p.G,cs(c.h,p),T=1;else return;if(c.I!=0){if(p.o)if(T==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=c.D;T=Un(),Ut(T,new Q(T,g)),In(c)}else gs(c);else if(M=p.m,M==3||M==0&&p.X>0||!(T==1&&go(c,p)||T==2&&ys(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),M){case 1:bn(c,5);break;case 4:bn(c,10);break;case 3:bn(c,6);break;default:bn(c,2)}}}function wo(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function bn(c,p){if(c.j.info("Error code "+p),p==2){var g=m(c.bb,c),T=c.Ua;const M=!T;T=new Pt(T||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ue(T,"https"),Vt(T),M?br(T.toString(),g):_o(T.toString(),g)}else q(2);c.I=0,c.l&&c.l.pa(p),sn(c),Ce(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function sn(c){if(c.I=0,c.ja=[],c.l){const p=us(c.h);(p.length!=0||c.i.length!=0)&&(B(c.ja,p),B(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function ws(c,p,g){var T=g instanceof Pt?Ie(g):new Pt(g);if(T.g!="")p&&(T.g=p+"."+T.g),He(T,T.u);else{var M=l.location;T=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const D=new Pt(null);T&&Ue(D,T),p&&(D.g=p),M&&He(D,M),g&&(D.h=g),T=D}return g=c.G,p=c.wa,g&&p&&J(T,g,p),J(T,"VER",c.ka),$n(c,T),T}function Ts(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Ct(new ct({ab:g})):new Ct(c.ma),p.Fa(c.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lr(){}i=Lr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Rr(){}Rr.prototype.g=function(c,p){return new _e(c,p)};function _e(c,p){zt.call(this),this.g=new _s(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!b(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!b(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new mi(this)}y(_e,zt),_e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_e.prototype.close=function(){mt(this.g)},_e.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Bn(c),c=g);p.i.push(new Fa(p.Ya++,c)),p.I==3&&In(p)},_e.prototype.N=function(){this.g.l=null,delete this.j,mt(this.g),delete this.g,_e.Z.N.call(this)};function Es(c){gn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const g in p){c=g;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}y(Es,gn);function To(){zn.call(this),this.status=1}y(To,zn);function mi(c){this.g=c}y(mi,Lr),mi.prototype.ra=function(){Ut(this.g,"a")},mi.prototype.qa=function(c){Ut(this.g,new Es(c))},mi.prototype.pa=function(c){Ut(this.g,new To)},mi.prototype.oa=function(){Ut(this.g,"b")},Rr.prototype.createWebChannel=Rr.prototype.g,_e.prototype.send=_e.prototype.o,_e.prototype.open=_e.prototype.m,_e.prototype.close=_e.prototype.close,Od=function(){return new Rr},Md=function(){return Un()},xd=Be,gl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},re.NO_ERROR=0,re.TIMEOUT=8,re.HTTP_ERROR=6,qo=re,de.COMPLETE="complete",kd=de,zi.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",zt.prototype.listen=zt.prototype.J,Rs=zi,Ct.prototype.listenOnce=Ct.prototype.K,Ct.prototype.getLastError=Ct.prototype.Ha,Ct.prototype.getLastErrorCode=Ct.prototype.ya,Ct.prototype.getStatus=Ct.prototype.ca,Ct.prototype.getResponseJson=Ct.prototype.La,Ct.prototype.getResponseText=Ct.prototype.la,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Fa,Rd=Ct}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="12.11.0";function sv(i){is=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new va("@firebase/firestore");function Br(){return ir.logLevel}function Y(i,...t){if(ir.logLevel<=yt.DEBUG){const e=t.map(ql);ir.debug(`Firestore (${is}): ${i}`,...e)}}function si(i,...t){if(ir.logLevel<=yt.ERROR){const e=t.map(ql);ir.error(`Firestore (${is}): ${i}`,...e)}}function rr(i,...t){if(ir.logLevel<=yt.WARN){const e=t.map(ql);ir.warn(`Firestore (${is}): ${i}`,...e)}}function ql(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Dd(i,r,e)}function Dd(i,t,e){let r=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw si(r),new Error(r)}function Rt(i,t,e,r){let a="Unexpected state";typeof e=="string"?a=e:r=e,i||Dd(t,a,r)}function ft(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tt extends fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ov{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ye.UNAUTHENTICATED))}shutdown(){}}class av{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class lv{constructor(t){this.t=t,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Rt(this.o===void 0,42304);let r=this.i;const a=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new Si;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Si,t.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await a(this.currentUser)})},h=f=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Si)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string",31837,{l:r}),new Nd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Rt(t===null||typeof t=="string",2055,{h:t}),new ye(t)}}class cv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uv{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new cv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hv{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Rt(this.o===void 0,3512);const r=o=>{o.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,Y("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const a=o=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?a(o):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Rt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Cu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=dv(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<e&&(r+=t.charAt(a[o]%62))}return r}}function vt(i,t){return i<t?-1:i>t?1:0}function yl(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const a=i.charAt(r),o=t.charAt(r);if(a!==o)return Xa(a)===Xa(o)?vt(a,o):Xa(a)?1:-1}return vt(i.length,t.length)}const fv=55296,pv=57343;function Xa(i){const t=i.charCodeAt(0);return t>=fv&&t<=pv}function Qr(i,t,e){return i.length===t.length&&i.every((r,a)=>e(r,t[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="__name__";class Sn{constructor(t,e,r){e===void 0?e=0:e>t.length&&at(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&at(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Sn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let a=0;a<r;a++){const o=Sn.compareSegments(t.get(a),e.get(a));if(o!==0)return o}return vt(t.length,e.length)}static compareSegments(t,e){const r=Sn.isNumericId(t),a=Sn.isNumericId(e);return r&&!a?-1:!r&&a?1:r&&a?Sn.extractNumericId(t).compare(Sn.extractNumericId(e)):yl(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ai.fromString(t.substring(4,t.length-2))}}class jt extends Sn{construct(t,e,r){return new jt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new tt(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(a=>a.length>0))}return new jt(e)}static emptyPath(){return new jt([])}}const mv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Sn{construct(t,e,r){return new pe(t,e,r)}static isValidIdentifier(t){return mv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lu}static keyField(){return new pe([Lu])}static fromServerFormat(t){const e=[];let r="",a=0;const o=()=>{if(r.length===0)throw new tt(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;a<t.length;){const h=t[a];if(h==="\\"){if(a+1===t.length)throw new tt(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[a+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new tt(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,a+=2}else h==="`"?(l=!l,a++):h!=="."||l?(r+=h,a++):(o(),a++)}if(o(),l)throw new tt(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pe(e)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(jt.fromString(t))}static fromName(t){return new it(jt.fromString(t).popFirst(5))}static empty(){return new it(jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return jt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new jt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(i,t,e){if(!e)throw new tt(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function gv(i,t,e,r){if(t===!0&&r===!0)throw new tt(H.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Ru(i){if(!it.isDocumentKey(i))throw new tt(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Vd(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Zl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":at(12329,{type:typeof i})}function js(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new tt(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zl(i);throw new tt(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(i,t){const e={typeString:i};return t&&(e.value=t),e}function io(i,t){if(!Vd(i))throw new tt(H.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const a=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const l=i[r];if(a&&typeof l!==a){e=`JSON field '${r}' must be a ${a}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new tt(H.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=-62135596800,xu=1e6;class Ft{static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*xu);return new Ft(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new tt(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new tt(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ku)throw new tt(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new tt(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xu}_compareTo(t){return this.seconds===t.seconds?vt(this.nanoseconds,t.nanoseconds):vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(io(t,Ft._jsonSchema))return new Ft(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ku;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ft._jsonSchemaVersion="firestore/timestamp/1.0",Ft._jsonSchema={type:ee("string",Ft._jsonSchemaVersion),seconds:ee("number"),nanoseconds:ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{static fromTimestamp(t){return new dt(t)}static min(){return new dt(new Ft(0,0))}static max(){return new dt(new Ft(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=-1;function yv(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=dt.fromTimestamp(r===1e9?new Ft(e+1,0):new Ft(e,r));return new Li(a,it.empty(),t)}function vv(i){return new Li(i.readTime,i.key,qs)}class Li{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Li(dt.min(),it.empty(),qs)}static max(){return new Li(dt.max(),it.empty(),qs)}}function wv(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=it.comparator(i.documentKey,t.documentKey),e!==0?e:vt(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ev{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==Tv)throw i;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&at(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new z((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,a)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof z?e:z.resolve(e)}catch(e){return z.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):z.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):z.reject(e)}static resolve(t){return new z((e,r)=>{e(t)})}static reject(t){return new z((e,r)=>{r(t)})}static waitFor(t){return new z((e,r)=>{let a=0,o=0,l=!1;t.forEach(h=>{++a,h.next(()=>{++o,l&&o===a&&e()},f=>r(f))}),l=!0,o===a&&e()})}static or(t){let e=z.resolve(!1);for(const r of t)e=e.next(a=>a?z.resolve(a):r());return e}static forEach(t,e){const r=[];return t.forEach((a,o)=>{r.push(e.call(this,a,o))}),this.waitFor(r)}static mapArray(t,e){return new z((r,a)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const m=f;e(t[m]).next(v=>{l[m]=v,++h,h===o&&r(l)},v=>a(v))}})}static doWhile(t,e){return new z((r,a)=>{const o=()=>{t()===!0?e().next(()=>{o()},a):r()};o()})}}function Iv(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ss(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ia.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=-1;function ba(i){return i==null}function ra(i){return i===0&&1/i==-1/0}function bv(i){return typeof i=="number"&&Number.isInteger(i)&&!ra(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="";function Pv(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=Mu(t)),t=Av(i.get(e),t);return Mu(t)}function Av(i,t){let e=t;const r=i.length;for(let a=0;a<r;a++){const o=i.charAt(a);switch(o){case"\0":e+="";break;case Fd:e+="";break;default:e+=o}}return e}function Mu(i){return i+Fd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function hr(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Bd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.comparator=t,this.root=e||fe.EMPTY}insert(t,e){return new qt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(t){return new qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return e+r.left.size;a<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Do(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Do(this.root,t,this.comparator,!1)}getReverseIterator(){return new Do(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Do(this.root,t,this.comparator,!0)}}class Do{constructor(t,e,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&a&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fe{constructor(t,e,r,a,o){this.key=t,this.value=e,this.color=r??fe.RED,this.left=a??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,a,o){return new fe(t??this.key,e??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let a=this;const o=r(t,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(t,e,r),null):o===0?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),e(t,a.key)===0){if(a.right.isEmpty())return fe.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw at(43730,{key:this.key,value:this.value});if(this.right.isRed())throw at(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw at(27949);return t+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw at(57766)}get value(){throw at(16141)}get color(){throw at(16727)}get left(){throw at(29726)}get right(){throw at(36894)}copy(t,e,r,a,o){return this}insert(t,e,r){return new fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.comparator=t,this.data=new qt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Du(this.data.getIterator())}getIteratorFrom(t){return new Du(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof oe)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const a=e.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new oe(this.comparator);return e.data=t,e}}class Du{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.fields=t,t.sort(pe.comparator)}static empty(){return new cn([])}unionWith(t){let e=new oe(pe.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new cn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new zd("Invalid base64 string: "+o):o}}(t);return new me(e)}static fromUint8Array(t){const e=function(a){let o="";for(let l=0;l<a.length;++l)o+=String.fromCharCode(a[l]);return o}(t);return new me(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Sv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(i){if(Rt(!!i,39018),typeof i=="string"){let t=0;const e=Sv.exec(i);if(Rt(!!e,46558,{timestamp:i}),e[1]){let a=e[1];a=(a+"000000000").substr(0,9),t=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Qt(i.seconds),nanos:Qt(i.nanos)}}function Qt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ki(i){return typeof i=="string"?me.fromBase64String(i):me.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="server_timestamp",Hd="__type__",jd="__previous_value__",qd="__local_write_time__";function $l(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Hd])==null?void 0:r.stringValue)===Ud}function Pa(i){const t=i.mapValue.fields[jd];return $l(t)?Pa(t):t}function Gs(i){const t=Ri(i.mapValue.fields[qd].timestampValue);return new Ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,e,r,a,o,l,h,f,m,v,y){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v,this.apiKey=y}}const sa="(default)";class Zs{constructor(t,e){this.projectId=t,this.database=e||sa}static empty(){return new Zs("","")}get isDefaultDatabase(){return this.database===sa}isEqual(t){return t instanceof Zs&&t.projectId===this.projectId&&t.database===this.database}}function Lv(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new tt(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(i.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="__type__",Rv="__max__",No={mapValue:{}},Zd="__vector__",oa="value";function xi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?$l(i)?4:xv(i)?9007199254740991:kv(i)?10:11:at(28295,{value:i})}function On(i,t){if(i===t)return!0;const e=xi(i);if(e!==xi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Gs(i).isEqual(Gs(t));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const l=Ri(a.timestampValue),h=Ri(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(a,o){return ki(a.bytesValue).isEqual(ki(o.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(a,o){return Qt(a.geoPointValue.latitude)===Qt(o.geoPointValue.latitude)&&Qt(a.geoPointValue.longitude)===Qt(o.geoPointValue.longitude)}(i,t);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return Qt(a.integerValue)===Qt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const l=Qt(a.doubleValue),h=Qt(o.doubleValue);return l===h?ra(l)===ra(h):isNaN(l)&&isNaN(h)}return!1}(i,t);case 9:return Qr(i.arrayValue.values||[],t.arrayValue.values||[],On);case 10:case 11:return function(a,o){const l=a.mapValue.fields||{},h=o.mapValue.fields||{};if(Ou(l)!==Ou(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!On(l[f],h[f])))return!1;return!0}(i,t);default:return at(52216,{left:i})}}function Ws(i,t){return(i.values||[]).find(e=>On(e,t))!==void 0}function Yr(i,t){if(i===t)return 0;const e=xi(i),r=xi(t);if(e!==r)return vt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return vt(i.booleanValue,t.booleanValue);case 2:return function(o,l){const h=Qt(o.integerValue||o.doubleValue),f=Qt(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(i,t);case 3:return Nu(i.timestampValue,t.timestampValue);case 4:return Nu(Gs(i),Gs(t));case 5:return yl(i.stringValue,t.stringValue);case 6:return function(o,l){const h=ki(o),f=ki(l);return h.compareTo(f)}(i.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),f=l.split("/");for(let m=0;m<h.length&&m<f.length;m++){const v=vt(h[m],f[m]);if(v!==0)return v}return vt(h.length,f.length)}(i.referenceValue,t.referenceValue);case 8:return function(o,l){const h=vt(Qt(o.latitude),Qt(l.latitude));return h!==0?h:vt(Qt(o.longitude),Qt(l.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return Vu(i.arrayValue,t.arrayValue);case 10:return function(o,l){var E,S,B,V;const h=o.fields||{},f=l.fields||{},m=(E=h[oa])==null?void 0:E.arrayValue,v=(S=f[oa])==null?void 0:S.arrayValue,y=vt(((B=m==null?void 0:m.values)==null?void 0:B.length)||0,((V=v==null?void 0:v.values)==null?void 0:V.length)||0);return y!==0?y:Vu(m,v)}(i.mapValue,t.mapValue);case 11:return function(o,l){if(o===No.mapValue&&l===No.mapValue)return 0;if(o===No.mapValue)return 1;if(l===No.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),m=l.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let y=0;y<f.length&&y<v.length;++y){const E=yl(f[y],v[y]);if(E!==0)return E;const S=Yr(h[f[y]],m[v[y]]);if(S!==0)return S}return vt(f.length,v.length)}(i.mapValue,t.mapValue);default:throw at(23264,{he:e})}}function Nu(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return vt(i,t);const e=Ri(i),r=Ri(t),a=vt(e.seconds,r.seconds);return a!==0?a:vt(e.nanos,r.nanos)}function Vu(i,t){const e=i.values||[],r=t.values||[];for(let a=0;a<e.length&&a<r.length;++a){const o=Yr(e[a],r[a]);if(o)return o}return vt(e.length,r.length)}function Jr(i){return vl(i)}function vl(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=Ri(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ki(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return it.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",a=!0;for(const o of e.values||[])a?a=!1:r+=",",r+=vl(o);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let a="{",o=!0;for(const l of r)o?o=!1:a+=",",a+=`${l}:${vl(e.fields[l])}`;return a+"}"}(i.mapValue):at(61005,{value:i})}function Go(i){switch(xi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Pa(i);return t?16+Go(t):16;case 5:return 2*i.stringValue.length;case 6:return ki(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Go(o),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return hr(r.fields,(o,l)=>{a+=o.length+Go(l)}),a}(i.mapValue);default:throw at(13486,{value:i})}}function wl(i){return!!i&&"integerValue"in i}function Kl(i){return!!i&&"arrayValue"in i}function Fu(i){return!!i&&"nullValue"in i}function Bu(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Zo(i){return!!i&&"mapValue"in i}function kv(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Gd])==null?void 0:r.stringValue)===Zd}function Ds(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return hr(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ds(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ds(i.arrayValue.values[e]);return t}return{...i}}function xv(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Rv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.value=t}static empty(){return new $e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Zo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ds(e)}setAll(t){let e=pe.emptyPath(),r={},a=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,a),r={},a=[],e=h.popLast()}l?r[h.lastSegment()]=Ds(l):a.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,a)}delete(t){const e=this.field(t.popLast());Zo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return On(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let a=e.mapValue.fields[t.get(r)];Zo(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,r){hr(e,(a,o)=>t[a]=o);for(const a of r)delete t[a]}clone(){return new $e(Ds(this.value))}}function Wd(i){const t=[];return hr(i.fields,(e,r)=>{const a=new pe([e]);if(Zo(r)){const o=Wd(r.mapValue).fields;if(o.length===0)t.push(a);else for(const l of o)t.push(a.child(l))}else t.push(a)}),new cn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,r,a,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=a,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new ve(t,0,dt.min(),dt.min(),dt.min(),$e.empty(),0)}static newFoundDocument(t,e,r,a){return new ve(t,1,e,dt.min(),r,a,0)}static newNoDocument(t,e){return new ve(t,2,e,dt.min(),dt.min(),$e.empty(),0)}static newUnknownDocument(t,e){return new ve(t,3,e,dt.min(),dt.min(),$e.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(dt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ve&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e){this.position=t,this.inclusive=e}}function zu(i,t,e){let r=0;for(let a=0;a<i.position.length;a++){const o=t[a],l=i.position[a];if(o.field.isKeyField()?r=it.comparator(it.fromName(l.referenceValue),e.key):r=Yr(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uu(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!On(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mv(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{}class se extends $d{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dv(t,e,r):e==="array-contains"?new Fv(t,r):e==="in"?new Bv(t,r):e==="not-in"?new zv(t,r):e==="array-contains-any"?new Uv(t,r):new se(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Nv(t,r):new Vv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Yr(e,this.value)):e!==null&&xi(this.value)===xi(e)&&this.matchesComparison(Yr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return at(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends $d{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Dn(t,e)}matches(t){return Kd(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Kd(i){return i.op==="and"}function Qd(i){return Ov(i)&&Kd(i)}function Ov(i){for(const t of i.filters)if(t instanceof Dn)return!1;return!0}function Tl(i){if(i instanceof se)return i.field.canonicalString()+i.op.toString()+Jr(i.value);if(Qd(i))return i.filters.map(t=>Tl(t)).join(",");{const t=i.filters.map(e=>Tl(e)).join(",");return`${i.op}(${t})`}}function Yd(i,t){return i instanceof se?function(r,a){return a instanceof se&&r.op===a.op&&r.field.isEqual(a.field)&&On(r.value,a.value)}(i,t):i instanceof Dn?function(r,a){return a instanceof Dn&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,l,h)=>o&&Yd(l,a.filters[h]),!0):!1}(i,t):void at(19439)}function Jd(i){return i instanceof se?function(e){return`${e.field.canonicalString()} ${e.op} ${Jr(e.value)}`}(i):i instanceof Dn?function(e){return e.op.toString()+" {"+e.getFilters().map(Jd).join(" ,")+"}"}(i):"Filter"}class Dv extends se{constructor(t,e,r){super(t,e,r),this.key=it.fromName(r.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.matchesComparison(e)}}class Nv extends se{constructor(t,e){super(t,"in",e),this.keys=Xd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vv extends se{constructor(t,e){super(t,"not-in",e),this.keys=Xd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xd(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>it.fromName(r.referenceValue))}class Fv extends se{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Kl(e)&&Ws(e.arrayValue,this.value)}}class Bv extends se{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ws(this.value.arrayValue,e)}}class zv extends se{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ws(this.value.arrayValue,e)}}class Uv extends se{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Kl(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(t,e=null,r=[],a=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function Hu(i,t=null,e=[],r=[],a=null,o=null,l=null){return new Hv(i,t,e,r,a,o,l)}function Ql(i){const t=ft(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Tl(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ba(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Jr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Jr(r)).join(",")),t.Te=e}return t.Te}function Yl(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!Mv(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Yd(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Uu(i.startAt,t.startAt)&&Uu(i.endAt,t.endAt)}function El(i){return it.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e=null,r=[],a=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function jv(i,t,e,r,a,o,l,h){return new Aa(i,t,e,r,a,o,l,h)}function Jl(i){return new Aa(i)}function ju(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function qv(i){return it.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function Gv(i){return i.collectionGroup!==null}function Ns(i){const t=ft(i);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new oe(pe.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new la(o,r))}),e.has(pe.keyField().canonicalString())||t.Ee.push(new la(pe.keyField(),r))}return t.Ee}function Rn(i){const t=ft(i);return t.Ie||(t.Ie=Zv(t,Ns(i))),t.Ie}function Zv(i,t){if(i.limitType==="F")return Hu(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new la(a.field,o)});const e=i.endAt?new aa(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new aa(i.startAt.position,i.startAt.inclusive):null;return Hu(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Il(i,t,e){return new Aa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Sa(i,t){return Yl(Rn(i),Rn(t))&&i.limitType===t.limitType}function tf(i){return`${Ql(Rn(i))}|lt:${i.limitType}`}function zr(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(a=>Jd(a)).join(", ")}]`),ba(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(a=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(a)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(a=>Jr(a)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(a=>Jr(a)).join(",")),`Target(${r})`}(Rn(i))}; limitType=${i.limitType})`}function Ca(i,t){return t.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):it.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(i,t)&&function(r,a){for(const o of Ns(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(i,t)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(i,t)&&function(r,a){return!(r.startAt&&!function(l,h,f){const m=zu(l,h,f);return l.inclusive?m<=0:m<0}(r.startAt,Ns(r),a)||r.endAt&&!function(l,h,f){const m=zu(l,h,f);return l.inclusive?m>=0:m>0}(r.endAt,Ns(r),a))}(i,t)}function Wv(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ef(i){return(t,e)=>{let r=!1;for(const a of Ns(i)){const o=$v(a,t,e);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function $v(i,t,e){const r=i.field.isKeyField()?it.comparator(t.key,e.key):function(o,l,h){const f=l.data.field(o),m=h.data.field(o);return f!==null&&m!==null?Yr(f,m):at(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return at(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),a=this.inner[r];if(a===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return void(a[o]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],t))return r.length===1?delete this.inner[e]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(t){hr(this.inner,(e,r)=>{for(const[a,o]of r)t(a,o)})}isEmpty(){return Bd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new qt(it.comparator);function oi(){return Kv}const nf=new qt(it.comparator);function ks(...i){let t=nf;for(const e of i)t=t.insert(e.key,e);return t}function rf(i){let t=nf;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ji(){return Vs()}function sf(){return Vs()}function Vs(){return new dr(i=>i.toString(),(i,t)=>i.isEqual(t))}const Qv=new qt(it.comparator),Yv=new oe(it.comparator);function wt(...i){let t=Yv;for(const e of i)t=t.add(e);return t}const Jv=new oe(vt);function Xv(){return Jv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(t)?"-0":t}}function of(i){return{integerValue:""+i}}function tw(i,t){return bv(t)?of(t):Xl(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this._=void 0}}function ew(i,t,e){return i instanceof ca?function(a,o){const l={fields:{[Hd]:{stringValue:Ud},[qd]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&$l(o)&&(o=Pa(o)),o&&(l.fields[jd]=o),{mapValue:l}}(e,t):i instanceof $s?lf(i,t):i instanceof Ks?cf(i,t):function(a,o){const l=af(a,o),h=qu(l)+qu(a.Ae);return wl(l)&&wl(a.Ae)?of(h):Xl(a.serializer,h)}(i,t)}function nw(i,t,e){return i instanceof $s?lf(i,t):i instanceof Ks?cf(i,t):e}function af(i,t){return i instanceof ua?function(r){return wl(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ca extends La{}class $s extends La{constructor(t){super(),this.elements=t}}function lf(i,t){const e=uf(t);for(const r of i.elements)e.some(a=>On(a,r))||e.push(r);return{arrayValue:{values:e}}}class Ks extends La{constructor(t){super(),this.elements=t}}function cf(i,t){let e=uf(t);for(const r of i.elements)e=e.filter(a=>!On(a,r));return{arrayValue:{values:e}}}class ua extends La{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function qu(i){return Qt(i.integerValue||i.doubleValue)}function uf(i){return Kl(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function iw(i,t){return i.field.isEqual(t.field)&&function(r,a){return r instanceof $s&&a instanceof $s||r instanceof Ks&&a instanceof Ks?Qr(r.elements,a.elements,On):r instanceof ua&&a instanceof ua?On(r.Ae,a.Ae):r instanceof ca&&a instanceof ca}(i.transform,t.transform)}class rw{constructor(t,e){this.version=t,this.transformResults=e}}class ni{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ni}static exists(t){return new ni(void 0,t)}static updateTime(t){return new ni(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wo(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Ra{}function hf(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new ff(i.key,ni.none()):new ro(i.key,i.data,ni.none());{const e=i.data,r=$e.empty();let a=new oe(pe.comparator);for(let o of t.fields)if(!a.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),a=a.add(o)}return new fr(i.key,r,new cn(a.toArray()),ni.none())}}function sw(i,t,e){i instanceof ro?function(a,o,l){const h=a.value.clone(),f=Zu(a.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(i,t,e):i instanceof fr?function(a,o,l){if(!Wo(a.precondition,o))return void o.convertToUnknownDocument(l.version);const h=Zu(a.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(df(a)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(i,t,e):function(a,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Fs(i,t,e,r){return i instanceof ro?function(o,l,h,f){if(!Wo(o.precondition,l))return h;const m=o.value.clone(),v=Wu(o.fieldTransforms,f,l);return m.setAll(v),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(i,t,e,r):i instanceof fr?function(o,l,h,f){if(!Wo(o.precondition,l))return h;const m=Wu(o.fieldTransforms,f,l),v=l.data;return v.setAll(df(o)),v.setAll(m),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(i,t,e,r):function(o,l,h){return Wo(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(i,t,e)}function ow(i,t){let e=null;for(const r of i.fieldTransforms){const a=t.data.field(r.field),o=af(r.transform,a||null);o!=null&&(e===null&&(e=$e.empty()),e.set(r.field,o))}return e||null}function Gu(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Qr(r,a,(o,l)=>iw(o,l))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class ro extends Ra{constructor(t,e,r,a=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class fr extends Ra{constructor(t,e,r,a,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function df(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function Zu(i,t,e){const r=new Map;Rt(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let a=0;a<e.length;a++){const o=i[a],l=o.transform,h=t.data.field(o.field);r.set(o.field,nw(l,h,e[a]))}return r}function Wu(i,t,e){const r=new Map;for(const a of i){const o=a.transform,l=e.data.field(a.field);r.set(a.field,ew(o,l,t))}return r}class ff extends Ra{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aw extends Ra{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t,e,r,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(t.key)&&sw(o,t,r[a])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fs(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fs(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=sf();return this.mutations.forEach(a=>{const o=t.get(a.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(a.key)?null:h;const f=hf(l,h);f!==null&&r.set(a.key,f),l.isValidDocument()||l.convertToNoDocument(dt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),wt())}isEqual(t){return this.batchId===t.batchId&&Qr(this.mutations,t.mutations,(e,r)=>Gu(e,r))&&Qr(this.baseMutations,t.baseMutations,(e,r)=>Gu(e,r))}}class tc{constructor(t,e,r,a){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=a}static from(t,e,r){Rt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let a=function(){return Qv}();const o=t.mutations;for(let l=0;l<o.length;l++)a=a.insert(o[l].key,r[l].version);return new tc(t,e,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,It;function hw(i){switch(i){case H.OK:return at(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return at(15467,{code:i})}}function pf(i){if(i===void 0)return si("GRPC error has no .code"),H.UNKNOWN;switch(i){case te.OK:return H.OK;case te.CANCELLED:return H.CANCELLED;case te.UNKNOWN:return H.UNKNOWN;case te.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case te.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case te.INTERNAL:return H.INTERNAL;case te.UNAVAILABLE:return H.UNAVAILABLE;case te.UNAUTHENTICATED:return H.UNAUTHENTICATED;case te.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case te.NOT_FOUND:return H.NOT_FOUND;case te.ALREADY_EXISTS:return H.ALREADY_EXISTS;case te.PERMISSION_DENIED:return H.PERMISSION_DENIED;case te.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case te.ABORTED:return H.ABORTED;case te.OUT_OF_RANGE:return H.OUT_OF_RANGE;case te.UNIMPLEMENTED:return H.UNIMPLEMENTED;case te.DATA_LOSS:return H.DATA_LOSS;default:return at(39323,{code:i})}}(It=te||(te={}))[It.OK=0]="OK",It[It.CANCELLED=1]="CANCELLED",It[It.UNKNOWN=2]="UNKNOWN",It[It.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",It[It.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",It[It.NOT_FOUND=5]="NOT_FOUND",It[It.ALREADY_EXISTS=6]="ALREADY_EXISTS",It[It.PERMISSION_DENIED=7]="PERMISSION_DENIED",It[It.UNAUTHENTICATED=16]="UNAUTHENTICATED",It[It.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",It[It.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",It[It.ABORTED=10]="ABORTED",It[It.OUT_OF_RANGE=11]="OUT_OF_RANGE",It[It.UNIMPLEMENTED=12]="UNIMPLEMENTED",It[It.INTERNAL=13]="INTERNAL",It[It.UNAVAILABLE=14]="UNAVAILABLE",It[It.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Ai([4294967295,4294967295],0);function $u(i){const t=dw().encode(i),e=new Ld;return e.update(t),new Uint8Array(e.digest())}function Ku(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),a=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ai([e,r],0),new Ai([a,o],0)]}class ec{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new xs(`Invalid padding: ${e}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new xs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ai.fromNumber(this.ge)}ye(t,e,r){let a=t.add(e.multiply(Ai.fromNumber(r)));return a.compare(fw)===1&&(a=new Ai([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=$u(t),[r,a]=Ku(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(r,a,o);if(!this.we(l))return!1}return!0}static create(t,e,r){const a=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new ec(o,a,e);return r.forEach(h=>l.insert(h)),l}insert(t){if(this.ge===0)return;const e=$u(t),[r,a]=Ku(e);for(let o=0;o<this.hashCount;o++){const l=this.ye(r,a,o);this.Se(l)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,r,a,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const a=new Map;return a.set(t,so.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ka(dt.min(),a,new qt(vt),oi(),wt())}}class so{constructor(t,e,r,a,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new so(r,e,wt(),wt(),wt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,r,a){this.be=t,this.removedTargetIds=e,this.key=r,this.De=a}}class mf{constructor(t,e){this.targetId=t,this.Ce=e}}class _f{constructor(t,e,r=me.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=a}}class Qu{constructor(){this.ve=0,this.Fe=Yu(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=wt(),e=wt(),r=wt();return this.Fe.forEach((a,o)=>{switch(o){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:r=r.add(a);break;default:at(38017,{changeType:o})}}),new so(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Yu()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Rt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pw{constructor(t){this.Ge=t,this.ze=new Map,this.je=oi(),this.Je=Vo(),this.He=Vo(),this.Ze=new qt(vt)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:at(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,a)=>{this.rt(a)&&e(a)})}st(t){const e=t.targetId,r=t.Ce.count,a=this.ot(e);if(a){const o=a.target;if(El(o))if(r===0){const l=new it(o.path);this.et(e,l,ve.newNoDocument(l,dt.min()))}else Rt(r===1,20013,{expectedCount:r});else{const l=this._t(e);if(l!==r){const h=this.ut(t),f=h?this.ct(h,t,l):1;if(f!==0){this.it(e);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,m)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=e;let l,h;try{l=ki(r).toUint8Array()}catch(f){if(f instanceof zd)return rr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new ec(l,a,o)}catch(f){return rr(f instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.ge===0?null:h}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let a=0;return r.forEach(o=>{const l=this.Ge.ht(),h=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.et(e,o,null),a++)}),a}Tt(t){const e=new Map;this.ze.forEach((o,l)=>{const h=this.ot(l);if(h){if(o.current&&El(h.target)){const f=new it(h.target.path);this.Et(f).has(l)||this.It(l,f)||this.et(l,f,ve.newNoDocument(f,t))}o.Be&&(e.set(l,o.ke()),o.qe())}});let r=wt();this.He.forEach((o,l)=>{let h=!0;l.forEachWhile(f=>{const m=this.ot(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.je.forEach((o,l)=>l.setReadTime(t));const a=new ka(t,e,this.Ze,this.je,r);return this.je=oi(),this.Je=Vo(),this.He=Vo(),this.Ze=new qt(vt),a}Ye(t,e){if(!this.rt(t))return;const r=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const a=this.nt(t);this.It(t,e)?a.Ke(e,1):a.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Qu,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new oe(vt),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new oe(vt),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||Y("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Qu),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Vo(){return new qt(it.comparator)}function Yu(){return new qt(it.comparator)}const mw={asc:"ASCENDING",desc:"DESCENDING"},_w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gw={and:"AND",or:"OR"};class yw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bl(i,t){return i.useProto3Json||ba(t)?t:{value:t}}function ha(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gf(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function vw(i,t){return ha(i,t.toTimestamp())}function kn(i){return Rt(!!i,49232),dt.fromTimestamp(function(e){const r=Ri(e);return new Ft(r.seconds,r.nanos)}(i))}function nc(i,t){return Pl(i,t).canonicalString()}function Pl(i,t){const e=function(a){return new jt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return t===void 0?e:e.child(t)}function yf(i){const t=jt.fromString(i);return Rt(If(t),10190,{key:t.toString()}),t}function Al(i,t){return nc(i.databaseId,t.path)}function tl(i,t){const e=yf(t);if(e.get(1)!==i.databaseId.projectId)throw new tt(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new tt(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new it(wf(e))}function vf(i,t){return nc(i.databaseId,t)}function ww(i){const t=yf(i);return t.length===4?jt.emptyPath():wf(t)}function Sl(i){return new jt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function wf(i){return Rt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Ju(i,t,e){return{name:Al(i,t),fields:e.value.mapValue.fields}}function Tw(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:at(39313,{state:m})}(t.targetChange.targetChangeType||"NO_CHANGE"),a=t.targetChange.targetIds||[],o=function(m,v){return m.useProto3Json?(Rt(v===void 0||typeof v=="string",58123),me.fromBase64String(v||"")):(Rt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),me.fromUint8Array(v||new Uint8Array))}(i,t.targetChange.resumeToken),l=t.targetChange.cause,h=l&&function(m){const v=m.code===void 0?H.UNKNOWN:pf(m.code);return new tt(v,m.message||"")}(l);e=new _f(r,a,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const a=tl(i,r.document.name),o=kn(r.document.updateTime),l=r.document.createTime?kn(r.document.createTime):dt.min(),h=new $e({mapValue:{fields:r.document.fields}}),f=ve.newFoundDocument(a,o,l,h),m=r.targetIds||[],v=r.removedTargetIds||[];e=new $o(m,v,f.key,f)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const a=tl(i,r.document),o=r.readTime?kn(r.readTime):dt.min(),l=ve.newNoDocument(a,o),h=r.removedTargetIds||[];e=new $o([],h,l.key,l)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const a=tl(i,r.document),o=r.removedTargetIds||[];e=new $o([],o,a,null)}else{if(!("filter"in t))return at(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,l=new uw(a,o),h=r.targetId;e=new mf(h,l)}}return e}function Ew(i,t){let e;if(t instanceof ro)e={update:Ju(i,t.key,t.value)};else if(t instanceof ff)e={delete:Al(i,t.key)};else if(t instanceof fr)e={update:Ju(i,t.key,t.data),updateMask:kw(t.fieldMask)};else{if(!(t instanceof aw))return at(16599,{dt:t.type});e={verify:Al(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof ca)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof $s)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Ks)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof ua)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw at(20930,{transform:l.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:vw(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:at(27497)}(i,t.precondition)),e}function Iw(i,t){return i&&i.length>0?(Rt(t!==void 0,14353),i.map(e=>function(a,o){let l=a.updateTime?kn(a.updateTime):kn(o);return l.isEqual(dt.min())&&(l=kn(o)),new rw(l,a.transformResults||[])}(e,t))):[]}function bw(i,t){return{documents:[vf(i,t.path)]}}function Pw(i,t){const e={structuredQuery:{}},r=t.path;let a;t.collectionGroup!==null?(a=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=vf(i,a);const o=function(m){if(m.length!==0)return Ef(Dn.create(m,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(m){if(m.length!==0)return m.map(v=>function(E){return{field:Ur(E.field),direction:Cw(E.dir)}}(v))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const h=bl(i,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(t.endAt)),{ft:e,parent:a}}function Aw(i){let t=ww(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let a=null;if(r>0){Rt(r===1,65062);const v=e.from[0];v.allDescendants?a=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(y){const E=Tf(y);return E instanceof Dn&&Qd(E)?E.getFilters():[E]}(e.where));let l=[];e.orderBy&&(l=function(y){return y.map(E=>function(B){return new la(Hr(B.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(E))}(e.orderBy));let h=null;e.limit&&(h=function(y){let E;return E=typeof y=="object"?y.value:y,ba(E)?null:E}(e.limit));let f=null;e.startAt&&(f=function(y){const E=!!y.before,S=y.values||[];return new aa(S,E)}(e.startAt));let m=null;return e.endAt&&(m=function(y){const E=!y.before,S=y.values||[];return new aa(S,E)}(e.endAt)),jv(t,a,l,o,h,"F",f,m)}function Sw(i,t){const e=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return at(28987,{purpose:a})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tf(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Hr(e.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Hr(e.unaryFilter.field);return se.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Hr(e.unaryFilter.field);return se.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Hr(e.unaryFilter.field);return se.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return at(61313);default:return at(60726)}}(i):i.fieldFilter!==void 0?function(e){return se.create(Hr(e.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return at(58110);default:return at(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Dn.create(e.compositeFilter.filters.map(r=>Tf(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return at(1026)}}(e.compositeFilter.op))}(i):at(30097,{filter:i})}function Cw(i){return mw[i]}function Lw(i){return _w[i]}function Rw(i){return gw[i]}function Ur(i){return{fieldPath:i.canonicalString()}}function Hr(i){return pe.fromServerFormat(i.fieldPath)}function Ef(i){return i instanceof se?function(e){if(e.op==="=="){if(Bu(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NAN"}};if(Fu(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bu(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NOT_NAN"}};if(Fu(e.value))return{unaryFilter:{field:Ur(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(e.field),op:Lw(e.op),value:e.value}}}(i):i instanceof Dn?function(e){const r=e.getFilters().map(a=>Ef(a));return r.length===1?r[0]:{compositeFilter:{op:Rw(e.op),filters:r}}}(i):at(54877,{filter:i})}function kw(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function If(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function bf(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r,a,o=dt.min(),l=dt.min(),h=me.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(t){return new Ii(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.yt=t}}function Mw(i){const t=Aw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Il(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.bn=new Dw}addToCollectionParentIndex(t,e){return this.bn.add(e),z.resolve()}getCollectionParents(t,e){return z.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return z.resolve()}deleteFieldIndex(t,e){return z.resolve()}deleteAllFieldIndexes(t){return z.resolve()}createTargetIndexes(t,e){return z.resolve()}getDocumentsMatchingTarget(t,e){return z.resolve(null)}getIndexType(t,e){return z.resolve(0)}getFieldIndexes(t,e){return z.resolve([])}getNextCollectionGroupToUpdate(t){return z.resolve(null)}getMinOffset(t,e){return z.resolve(Li.min())}getMinOffsetFromCollectionGroup(t,e){return z.resolve(Li.min())}updateCollectionGroup(t,e,r){return z.resolve()}updateIndexEntries(t,e){return z.resolve()}}class Dw{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),a=this.index[e]||new oe(jt.comparator),o=!a.has(r);return this.index[e]=a.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),a=this.index[e];return a&&a.has(r)}getEntries(t){return(this.index[t]||new oe(jt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pf=41943040;class Re{static withCacheSize(t){return new Re(t,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(Pf,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Xr(0)}static ar(){return new Xr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="LruGarbageCollector",Nw=1048576;function eh([i,t],[e,r]){const a=vt(i,e);return a===0?vt(t,r):a}class Vw{constructor(t){this.Pr=t,this.buffer=new oe(eh),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();eh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Fw{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){Y(th,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ss(e)?Y(th,"Ignoring IndexedDB error during garbage collection: ",e):await rs(e)}await this.Ar(3e5)})}}class Bw{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return z.resolve(Ia.ce);const r=new Vw(e);return this.Vr.forEachTarget(t,a=>r.Ir(a.sequenceNumber)).next(()=>this.Vr.mr(t,a=>r.Ir(a))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Xu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xu):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,a,o,l,h,f,m;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),a=this.params.maximumSequenceNumbersToCollect):a=y,l=Date.now(),this.nthSequenceNumber(t,a))).next(y=>(r=y,h=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(m=Date.now(),Br()<=yt.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${a} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${y} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:y})))}}function zw(i,t){return new Bw(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.changes=new dr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ve.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?z.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(t,e,r,a){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=a}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(a=>(r=a,this.remoteDocumentCache.getEntry(t,e))).next(a=>(r!==null&&Fs(r.mutation,a,cn.empty(),Ft.now()),a))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,wt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=wt()){const a=Ji();return this.populateOverlays(t,a,e).next(()=>this.computeViews(t,e,a,r).next(o=>{let l=ks();return o.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=Ji();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,wt()))}populateOverlays(t,e,r){const a=[];return r.forEach(o=>{e.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(t,a).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,a){let o=oi();const l=Vs(),h=function(){return Vs()}();return e.forEach((f,m)=>{const v=r.get(m.key);a.has(m.key)&&(v===void 0||v.mutation instanceof fr)?o=o.insert(m.key,m):v!==void 0?(l.set(m.key,v.mutation.getFieldMask()),Fs(v.mutation,m,v.mutation.getFieldMask(),Ft.now())):l.set(m.key,cn.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((m,v)=>l.set(m,v)),e.forEach((m,v)=>h.set(m,new Hw(v,l.get(m)??null))),h))}recalculateAndSaveOverlays(t,e){const r=Vs();let a=new qt((l,h)=>l-h),o=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(f=>{const m=e.get(f);if(m===null)return;let v=r.get(f)||cn.empty();v=h.applyToLocalView(m,v),r.set(f,v);const y=(a.get(h.batchId)||wt()).add(f);a=a.insert(h.batchId,y)})}).next(()=>{const l=[],h=a.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,v=f.value,y=sf();v.forEach(E=>{if(!o.has(E)){const S=hf(e.get(E),r.get(E));S!==null&&y.set(E,S),o=o.add(E)}}),l.push(this.documentOverlayCache.saveOverlays(t,m,y))}return z.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,a){return qv(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Gv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,a):this.getDocumentsMatchingCollectionQuery(t,e,r,a)}getNextDocuments(t,e,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,a).next(o=>{const l=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,a-o.size):z.resolve(Ji());let h=qs,f=o;return l.next(m=>z.forEach(m,(v,y)=>(h<y.largestBatchId&&(h=y.largestBatchId),o.get(v)?z.resolve():this.remoteDocumentCache.getEntry(t,v).next(E=>{f=f.insert(v,E)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,f,m,wt())).next(v=>({batchId:h,changes:rf(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new it(e)).next(r=>{let a=ks();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(t,e,r,a){const o=e.collectionGroup;let l=ks();return this.indexManager.getCollectionParents(t,o).next(h=>z.forEach(h,f=>{const m=function(y,E){return new Aa(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,a).next(v=>{v.forEach((y,E)=>{l=l.insert(y,E)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,a))).next(l=>{o.forEach((f,m)=>{const v=m.getKey();l.get(v)===null&&(l=l.insert(v,ve.newInvalidDocument(v)))});let h=ks();return l.forEach((f,m)=>{const v=o.get(f);v!==void 0&&Fs(v.mutation,m,cn.empty(),Ft.now()),Ca(e,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return z.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(a){return{id:a.id,version:a.version,createTime:kn(a.createTime)}}(e)),z.resolve()}getNamedQuery(t,e){return z.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(a){return{name:a.name,query:Mw(a.bundledQuery),readTime:kn(a.readTime)}}(e)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.overlays=new qt(it.comparator),this.Lr=new Map}getOverlay(t,e){return z.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ji();return z.forEach(e,a=>this.getOverlay(t,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((a,o)=>{this.St(t,e,o)}),z.resolve()}removeOverlaysForBatchId(t,e,r){const a=this.Lr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(t,e,r){const a=Ji(),o=e.length+1,l=new it(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>r&&a.set(f.getKey(),f)}return z.resolve(a)}getOverlaysForCollectionGroup(t,e,r,a){let o=new qt((m,v)=>m-v);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let v=o.get(m.largestBatchId);v===null&&(v=Ji(),o=o.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const h=Ji(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>h.set(m,v)),!(h.size()>=a)););return z.resolve(h)}St(t,e,r){const a=this.overlays.get(r.key);if(a!==null){const l=this.Lr.get(a.largestBatchId).delete(r.key);this.Lr.set(a.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new cw(e,r));let o=this.Lr.get(e);o===void 0&&(o=wt(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(t){return z.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.kr=new oe(ce.qr),this.Kr=new oe(ce.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ce(t,e);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ce(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new it(new jt([])),r=new ce(e,t),a=new ce(e,t+1),o=[];return this.Kr.forEachInRange([r,a],l=>{this.Wr(l),o.push(l.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new it(new jt([])),r=new ce(e,t),a=new ce(e,t+1);let o=wt();return this.Kr.forEachInRange([r,a],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new ce(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ce{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return it.comparator(t.key,e.key)||vt(t.Jr,e.Jr)}static Ur(t,e){return vt(t.Jr,e.Jr)||it.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new oe(ce.qr)}checkEmpty(t){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,a){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new lw(o,e,r,a);this.mutationQueue.push(l);for(const h of a)this.Hr=this.Hr.add(new ce(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return z.resolve(l)}lookupMutationBatch(t,e){return z.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,a=this.Xr(r),o=a<0?0:a;return z.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Wl:this.Yn-1)}getAllMutationBatches(t){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ce(e,0),a=new ce(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,a],l=>{const h=this.Zr(l.Jr);o.push(h)}),z.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new oe(vt);return e.forEach(a=>{const o=new ce(a,0),l=new ce(a,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,l],h=>{r=r.add(h.Jr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,a=r.length+1;let o=r;it.isDocumentKey(o)||(o=o.child(""));const l=new ce(new it(o),0);let h=new oe(vt);return this.Hr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(h=h.add(f.Jr)),!0)},l),z.resolve(this.Yr(h))}Yr(t){const e=[];return t.forEach(r=>{const a=this.Zr(r);a!==null&&e.push(a)}),e}removeMutationBatch(t,e){Rt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return z.forEach(e.mutations,a=>{const o=new ce(a.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new ce(e,0),a=this.Hr.firstAfterOrEqual(r);return z.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.mutationQueue.length,z.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t){this.ti=t,this.docs=function(){return new qt(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,a=this.docs.get(r),o=a?a.size:0,l=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return z.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(e))}getEntries(t,e){let r=oi();return e.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ve.newInvalidDocument(a))}),z.resolve(r)}getDocumentsMatchingQuery(t,e,r,a){let o=oi();const l=e.path,h=new it(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||wv(vv(v),r)<=0||(a.has(v.key)||Ca(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return z.resolve(o)}getAllFromCollectionGroup(t,e,r,a){at(9500)}ni(t,e){return z.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Kw(this)}getSize(t){return z.resolve(this.size)}}class Kw extends Uw{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?e.push(this.Mr.addEntry(t,a)):this.Mr.removeEntry(r)}),z.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(t){this.persistence=t,this.ri=new dr(e=>Ql(e),Yl),this.lastRemoteSnapshotVersion=dt.min(),this.highestTargetId=0,this.ii=0,this.si=new ic,this.targetCount=0,this.oi=Xr._r()}forEachTarget(t,e){return this.ri.forEach((r,a)=>e(a)),z.resolve()}getLastRemoteSnapshotVersion(t){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return z.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),z.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Xr(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,z.resolve()}updateTargetData(t,e){return this.lr(e),z.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,z.resolve()}removeTargets(t,e,r){let a=0;const o=[];return this.ri.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.ri.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),a++)}),z.waitFor(o).next(()=>a)}getTargetCount(t){return z.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return z.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),z.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const a=this.persistence.referenceDelegate,o=[];return a&&e.forEach(l=>{o.push(a.markPotentiallyOrphaned(t,l))}),z.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),z.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return z.resolve(r)}containsKey(t,e){return z.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,e){this._i={},this.overlays={},this.ai=new Ia(0),this.ui=!1,this.ui=!0,this.ci=new Zw,this.referenceDelegate=t(this),this.li=new Qw(this),this.indexManager=new Ow,this.remoteDocumentCache=function(a){return new $w(a)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xw(e),this.Pi=new qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Ww(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){Y("MemoryPersistence","Starting transaction:",t);const a=new Yw(this.ai.next());return this.referenceDelegate.Ti(),r(a).next(o=>this.referenceDelegate.Ei(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}Ii(t,e){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Yw extends Ev{constructor(t){super(),this.currentSequenceNumber=t}}class rc{constructor(t){this.persistence=t,this.Ri=new ic,this.Ai=null}static Vi(t){return new rc(t)}get di(){if(this.Ai)return this.Ai;throw at(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),z.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),z.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(a=>this.di.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(a=>{a.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const a=it.fromPath(r);return this.mi(t,a).next(o=>{o||e.removeEntry(a,dt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return z.or([()=>z.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class da{constructor(t,e){this.persistence=t,this.fi=new dr(r=>Pv(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=zw(this,e)}static Vi(t,e){return new da(t,e)}Ti(){}Ei(t){return z.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(a=>r+a))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return z.forEach(this.fi,(r,a)=>this.wr(t,r,a).next(o=>o?z.resolve():e(a)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.ni(t,l=>this.wr(t,l,e).next(h=>{h||(r++,o.removeEntry(l,dt.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Go(t.data.value)),e}wr(t,e,r){return z.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const a=this.fi.get(e);return z.resolve(a!==void 0&&a>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,r,a){this.targetId=t,this.fromCache=e,this.Ts=r,this.Es=a}static Is(t,e){let r=wt(),a=wt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new sc(t,e.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Em()?8:Iv(we())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,a){const o={result:null};return this.gs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ps(t,e,a,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Jw;return this.ys(t,e,l).next(h=>{if(o.result=h,this.As)return this.ws(t,e,l,h.size)})}).next(()=>o.result)}ws(t,e,r,a){return r.documentReadCount<this.Vs?(Br()<=yt.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",zr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Br()<=yt.DEBUG&&Y("QueryEngine","Query:",zr(e),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ds*a?(Br()<=yt.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",zr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rn(e))):z.resolve())}gs(t,e){if(ju(e))return z.resolve(null);let r=Rn(e);return this.indexManager.getIndexType(t,r).next(a=>a===0?null:(e.limit!==null&&a===1&&(e=Il(e,null,"F"),r=Rn(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=wt(...o);return this.fs.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(f=>{const m=this.Ss(e,h);return this.bs(e,m,l,f.readTime)?this.gs(t,Il(e,null,"F")):this.Ds(t,m,e,f)}))})))}ps(t,e,r,a){return ju(e)||a.isEqual(dt.min())?z.resolve(null):this.fs.getDocuments(t,r).next(o=>{const l=this.Ss(e,o);return this.bs(e,l,r,a)?z.resolve(null):(Br()<=yt.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zr(e)),this.Ds(t,l,e,yv(a,qs)).next(h=>h))})}Ss(t,e){let r=new oe(ef(t));return e.forEach((a,o)=>{Ca(t,o)&&(r=r.add(o))}),r}bs(t,e,r,a){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}ys(t,e,r){return Br()<=yt.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",zr(e)),this.fs.getDocumentsMatchingQuery(t,e,Li.min(),r)}Ds(t,e,r,a){return this.fs.getDocumentsMatchingQuery(t,r,a).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="LocalStore",tT=3e8;class eT{constructor(t,e,r,a){this.persistence=t,this.Cs=e,this.serializer=a,this.vs=new qt(vt),this.Fs=new dr(o=>Ql(o),Yl),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function nT(i,t,e,r){return new eT(i,t,e,r)}async function Sf(i,t){const e=ft(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let a;return e.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let f=wt();for(const m of a){l.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of o){h.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return e.localDocuments.getDocuments(r,f).next(m=>({Ns:m,removedBatchIds:l,addedBatchIds:h}))})})}function iT(i,t){const e=ft(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,v){const y=m.batch,E=y.keys();let S=z.resolve();return E.forEach(B=>{S=S.next(()=>v.getEntry(f,B)).next(V=>{const j=m.docVersions.get(B);Rt(j!==null,48541),V.version.compareTo(j)<0&&(y.applyToRemoteDocument(V,m),V.isValidDocument()&&(V.setReadTime(m.commitVersion),v.addEntry(V)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(f,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,a,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=wt();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,a))})}function Cf(i){const t=ft(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function rT(i,t){const e=ft(i),r=t.snapshotVersion;let a=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.xs.newChangeBuffer({trackRemovals:!0});a=e.vs;const h=[];t.targetChanges.forEach((v,y)=>{const E=a.get(y);if(!E)return;h.push(e.li.removeMatchingKeys(o,v.removedDocuments,y).next(()=>e.li.addMatchingKeys(o,v.addedDocuments,y)));let S=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(me.EMPTY_BYTE_STRING,dt.min()).withLastLimboFreeSnapshotVersion(dt.min()):v.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(v.resumeToken,r)),a=a.insert(y,S),function(V,j,$){return V.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=tT?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(E,S,v)&&h.push(e.li.updateTargetData(o,S))});let f=oi(),m=wt();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,v))}),h.push(sT(o,l,t.documentUpdates).next(v=>{f=v.Bs,m=v.Ls})),!r.isEqual(dt.min())){const v=e.li.getLastRemoteSnapshotVersion(o).next(y=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(v)}return z.waitFor(h).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,f,m)).next(()=>f)}).then(o=>(e.vs=a,o))}function sT(i,t,e){let r=wt(),a=wt();return e.forEach(o=>r=r.add(o)),t.getEntries(i,r).next(o=>{let l=oi();return e.forEach((h,f)=>{const m=o.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(h)),f.isNoDocument()&&f.version.isEqual(dt.min())?(t.removeEntry(h,f.readTime),l=l.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(t.addEntry(f),l=l.insert(h,f)):Y(oc,"Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)}),{Bs:l,Ls:a}})}function oT(i,t){const e=ft(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Wl),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function aT(i,t){const e=ft(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return e.li.getTargetData(r,t).next(o=>o?(a=o,z.resolve(a)):e.li.allocateTargetId(r).next(l=>(a=new Ii(t,l,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=e.vs.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function Cl(i,t,e){const r=ft(i),a=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,a))}catch(l){if(!ss(l))throw l;Y(oc,`Failed to update sequence numbers for target ${t}: ${l}`)}r.vs=r.vs.remove(t),r.Fs.delete(a.target)}function nh(i,t,e){const r=ft(i);let a=dt.min(),o=wt();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,m,v){const y=ft(f),E=y.Fs.get(v);return E!==void 0?z.resolve(y.vs.get(E)):y.li.getTargetData(m,v)}(r,l,Rn(t)).next(h=>{if(h)return a=h.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(l,h.targetId).next(f=>{o=f})}).next(()=>r.Cs.getDocumentsMatchingQuery(l,t,e?a:dt.min(),e?o:wt())).next(h=>(lT(r,Wv(t),h),{documents:h,ks:o})))}function lT(i,t,e){let r=i.Ms.get(t)||dt.min();e.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),i.Ms.set(t,r)}class ih{constructor(){this.activeTargetIds=Xv()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cT{constructor(){this.vo=new ih,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ih,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="ConnectivityMonitor";class sh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Y(rh,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){Y(rh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=null;function Ll(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="RestConnection",hT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dT{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${r}/databases/${a}`,this.$o=this.databaseId.database===sa?`project_id=${r}`:`project_id=${r}&database_id=${a}`}Wo(t,e,r,a,o){const l=Ll(),h=this.Qo(t,e.toUriEncodedString());Y(el,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,a,o);const{host:m}=new URL(h),v=Js(m);return this.zo(t,h,f,r,v).then(y=>(Y(el,`Received RPC '${t}' ${l}: `,y),y),y=>{throw rr(el,`RPC '${t}' ${l} failed with error: `,y,"url: ",h,"request:",r),y})}jo(t,e,r,a,o,l){return this.Wo(t,e,r,a,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((a,o)=>t[o]=a),r&&r.headers.forEach((a,o)=>t[o]=a)}Qo(t,e){const r=hT[t];let a=`${this.Ko}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(a=`${a}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),a}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="WebChannelConnection",Ss=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(a){setTimeout(()=>{throw a},0)}})};class Wr extends dT{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Wr.c_){const t=Md();Ss(t,xd.STAT_EVENT,e=>{e.stat===gl.PROXY?Y(ge,"STAT_EVENT: detected buffering proxy"):e.stat===gl.NOPROXY&&Y(ge,"STAT_EVENT: detected no buffering proxy")}),Wr.c_=!0}}zo(t,e,r,a,o){const l=Ll();return new Promise((h,f)=>{const m=new Rd;m.setWithCredentials(!0),m.listenOnce(kd.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case qo.NO_ERROR:const y=m.getResponseJson();Y(ge,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(y)),h(y);break;case qo.TIMEOUT:Y(ge,`RPC '${t}' ${l} timed out`),f(new tt(H.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const E=m.getStatus();if(Y(ge,`RPC '${t}' ${l} failed with status:`,E,"response text:",m.getResponseText()),E>0){let S=m.getResponseJson();Array.isArray(S)&&(S=S[0]);const B=S==null?void 0:S.error;if(B&&B.status&&B.message){const V=function($){const X=$.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(X)>=0?X:H.UNKNOWN}(B.status);f(new tt(V,B.message))}else f(new tt(H.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new tt(H.UNAVAILABLE,"Connection failed."));break;default:at(9055,{l_:t,streamId:l,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{Y(ge,`RPC '${t}' ${l} completed.`)}});const v=JSON.stringify(a);Y(ge,`RPC '${t}' ${l} sending request:`,a),m.send(e,"POST",v,r,15)})}T_(t,e,r){const a=Ll(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");Y(ge,`Creating RPC '${t}' stream ${a}: ${m}`,h);const v=l.createWebChannel(m,h);this.E_(v);let y=!1,E=!1;const S=new fT({Jo:B=>{E?Y(ge,`Not sending because RPC '${t}' stream ${a} is closed:`,B):(y||(Y(ge,`Opening RPC '${t}' stream ${a} transport.`),v.open(),y=!0),Y(ge,`RPC '${t}' stream ${a} sending:`,B),v.send(B))},Ho:()=>v.close()});return Ss(v,Rs.EventType.OPEN,()=>{E||(Y(ge,`RPC '${t}' stream ${a} transport opened.`),S.i_())}),Ss(v,Rs.EventType.CLOSE,()=>{E||(E=!0,Y(ge,`RPC '${t}' stream ${a} transport closed`),S.o_(),this.I_(v))}),Ss(v,Rs.EventType.ERROR,B=>{E||(E=!0,rr(ge,`RPC '${t}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),S.o_(new tt(H.UNAVAILABLE,"The operation could not be completed")))}),Ss(v,Rs.EventType.MESSAGE,B=>{var V;if(!E){const j=B.data[0];Rt(!!j,16349);const $=j,X=($==null?void 0:$.error)||((V=$[0])==null?void 0:V.error);if(X){Y(ge,`RPC '${t}' stream ${a} received error:`,X);const et=X.status;let Mt=function(R){const I=te[R];if(I!==void 0)return pf(I)}(et),bt=X.message;et==="NOT_FOUND"&&bt.includes("database")&&bt.includes("does not exist")&&bt.includes(this.databaseId.database)&&rr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Mt===void 0&&(Mt=H.INTERNAL,bt="Unknown error status: "+et+" with message "+X.message),E=!0,S.o_(new tt(Mt,bt)),v.close()}else Y(ge,`RPC '${t}' stream ${a} received:`,j),S.__(j)}}),Wr.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Od()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(i){return new Wr(i)}function nl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(i){return new yw(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr.c_=!1;class Lf{constructor(t,e,r=1e3,a=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=a,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),a=Math.max(0,e-r);a>0&&Y("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="PersistentStream";class Rf{constructor(t,e,r,a,o,l,h,f){this.Ci=t,this.S_=r,this.b_=a,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===H.RESOURCE_EXHAUSTED?(si(e.toString()),si("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.D_===e&&this.G_(r,a)},r=>{t(()=>{const a=new tt(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(a)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(a=>{r(()=>this.z_(a))}),this.stream.onMessage(a=>{r(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return Y(oh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(Y(oh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mT extends Rf{constructor(t,e,r,a,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,a,l),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Tw(this.serializer,t),r=function(o){if(!("targetChange"in o))return dt.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?dt.min():l.readTime?kn(l.readTime):dt.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=Sl(this.serializer),e.addTarget=function(o,l){let h;const f=l.target;if(h=El(f)?{documents:bw(o,f)}:{query:Pw(o,f).ft},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=gf(o,l.resumeToken);const m=bl(o,l.expectedCount);m!==null&&(h.expectedCount=m)}else if(l.snapshotVersion.compareTo(dt.min())>0){h.readTime=ha(o,l.snapshotVersion.toTimestamp());const m=bl(o,l.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,t);const r=Sw(this.serializer,t);r&&(e.labels=r),this.q_(e)}X_(t){const e={};e.database=Sl(this.serializer),e.removeTarget=t,this.q_(e)}}class _T extends Rf{constructor(t,e,r,a,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,a,l),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Rt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Rt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Rt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Iw(t.writeResults,t.commitTime),r=kn(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Sl(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ew(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{}class yT extends gT{constructor(t,e,r,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new tt(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,Pl(e,r),a,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new tt(H.UNKNOWN,o.toString())})}jo(t,e,r,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.jo(t,Pl(e,r),a,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new tt(H.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vT(i,t,e,r){return new yT(i,t,e,r)}class wT{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(si(e),this.aa=!1):Y("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="RemoteStore";class TT{constructor(t,e,r,a,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{pr(this)&&(Y(sr,"Restarting streams for network reachability change."),await async function(f){const m=ft(f);m.Ia.add(4),await oo(m),m.Va.set("Unknown"),m.Ia.delete(4),await Ma(m)}(this))})}),this.Va=new wT(r,a)}}async function Ma(i){if(pr(i))for(const t of i.Ra)await t(!0)}async function oo(i){for(const t of i.Ra)await t(!1)}function kf(i,t){const e=ft(i);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),uc(e)?cc(e):os(e).O_()&&lc(e,t))}function ac(i,t){const e=ft(i),r=os(e);e.Ea.delete(t),r.O_()&&xf(e,t),e.Ea.size===0&&(r.O_()?r.L_():pr(e)&&e.Va.set("Unknown"))}function lc(i,t){if(i.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(dt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}os(i).Z_(t)}function xf(i,t){i.da.$e(t),os(i).X_(t)}function cc(i){i.da=new pw({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),At:t=>i.Ea.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),os(i).start(),i.Va.ua()}function uc(i){return pr(i)&&!os(i).x_()&&i.Ea.size>0}function pr(i){return ft(i).Ia.size===0}function Mf(i){i.da=void 0}async function ET(i){i.Va.set("Online")}async function IT(i){i.Ea.forEach((t,e)=>{lc(i,t)})}async function bT(i,t){Mf(i),uc(i)?(i.Va.ha(t),cc(i)):i.Va.set("Unknown")}async function PT(i,t,e){if(i.Va.set("Online"),t instanceof _f&&t.state===2&&t.cause)try{await async function(a,o){const l=o.cause;for(const h of o.targetIds)a.Ea.has(h)&&(await a.remoteSyncer.rejectListen(h,l),a.Ea.delete(h),a.da.removeTarget(h))}(i,t)}catch(r){Y(sr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fa(i,r)}else if(t instanceof $o?i.da.Xe(t):t instanceof mf?i.da.st(t):i.da.tt(t),!e.isEqual(dt.min()))try{const r=await Cf(i.localStore);e.compareTo(r)>=0&&await function(o,l){const h=o.da.Tt(l);return h.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=o.Ea.get(m);v&&o.Ea.set(m,v.withResumeToken(f.resumeToken,l))}}),h.targetMismatches.forEach((f,m)=>{const v=o.Ea.get(f);if(!v)return;o.Ea.set(f,v.withResumeToken(me.EMPTY_BYTE_STRING,v.snapshotVersion)),xf(o,f);const y=new Ii(v.target,f,m,v.sequenceNumber);lc(o,y)}),o.remoteSyncer.applyRemoteEvent(h)}(i,e)}catch(r){Y(sr,"Failed to raise snapshot:",r),await fa(i,r)}}async function fa(i,t,e){if(!ss(t))throw t;i.Ia.add(1),await oo(i),i.Va.set("Offline"),e||(e=()=>Cf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Y(sr,"Retrying IndexedDB access"),await e(),i.Ia.delete(1),await Ma(i)})}function Of(i,t){return t().catch(e=>fa(i,e,t))}async function Oa(i){const t=ft(i),e=Mi(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Wl;for(;AT(t);)try{const a=await oT(t.localStore,r);if(a===null){t.Ta.length===0&&e.L_();break}r=a.batchId,ST(t,a)}catch(a){await fa(t,a)}Df(t)&&Nf(t)}function AT(i){return pr(i)&&i.Ta.length<10}function ST(i,t){i.Ta.push(t);const e=Mi(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function Df(i){return pr(i)&&!Mi(i).x_()&&i.Ta.length>0}function Nf(i){Mi(i).start()}async function CT(i){Mi(i).ra()}async function LT(i){const t=Mi(i);for(const e of i.Ta)t.ea(e.mutations)}async function RT(i,t,e){const r=i.Ta.shift(),a=tc.from(r,t,e);await Of(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Oa(i)}async function kT(i,t){t&&Mi(i).Y_&&await async function(r,a){if(function(l){return hw(l)&&l!==H.ABORTED}(a.code)){const o=r.Ta.shift();Mi(r).B_(),await Of(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Oa(r)}}(i,t),Df(i)&&Nf(i)}async function ah(i,t){const e=ft(i);e.asyncQueue.verifyOperationInProgress(),Y(sr,"RemoteStore received new credentials");const r=pr(e);e.Ia.add(3),await oo(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Ma(e)}async function xT(i,t){const e=ft(i);t?(e.Ia.delete(2),await Ma(e)):t||(e.Ia.add(2),await oo(e),e.Va.set("Unknown"))}function os(i){return i.ma||(i.ma=function(e,r,a){const o=ft(e);return o.sa(),new mT(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(i.datastore,i.asyncQueue,{Zo:ET.bind(null,i),Yo:IT.bind(null,i),t_:bT.bind(null,i),H_:PT.bind(null,i)}),i.Ra.push(async t=>{t?(i.ma.B_(),uc(i)?cc(i):i.Va.set("Unknown")):(await i.ma.stop(),Mf(i))})),i.ma}function Mi(i){return i.fa||(i.fa=function(e,r,a){const o=ft(e);return o.sa(),new _T(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:CT.bind(null,i),t_:kT.bind(null,i),ta:LT.bind(null,i),na:RT.bind(null,i)}),i.Ra.push(async t=>{t?(i.fa.B_(),await Oa(i)):(await i.fa.stop(),i.Ta.length>0&&(Y(sr,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,r,a,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new Si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,a,o){const l=Date.now()+r,h=new hc(t,e,l,a,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new tt(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(i,t){if(si("AsyncQueue",`${t}: ${i}`),ss(i))return new tt(H.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{static emptySet(t){return new $r(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||it.comparator(e.key,r.key):(e,r)=>it.comparator(e.key,r.key),this.keyedMap=ks(),this.sortedSet=new qt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof $r)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const a=e.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new $r;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.ga=new qt(it.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):at(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class ts{constructor(t,e,r,a,o,l,h,f,m){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(t,e,r,a,o){const l=[];return e.forEach(h=>{l.push({type:0,doc:h})}),new ts(t,e,$r.emptySet(e),l,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==r[a].type||!e[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class OT{constructor(){this.queries=ch(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const a=ft(e),o=a.queries;a.queries=ch(),o.forEach((l,h)=>{for(const f of h.Sa)f.onError(r)})})(this,new tt(H.ABORTED,"Firestore shutting down"))}}function ch(){return new dr(i=>tf(i),Sa)}async function DT(i,t){const e=ft(i);let r=3;const a=t.query;let o=e.queries.get(a);o?!o.ba()&&t.Da()&&(r=2):(o=new MT,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(a,!0);break;case 1:o.wa=await e.onListen(a,!1);break;case 2:await e.onFirstRemoteStoreListen(a)}}catch(l){const h=dc(l,`Initialization of query '${zr(t.query)}' failed`);return void t.onError(h)}e.queries.set(a,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&fc(e)}async function NT(i,t){const e=ft(i),r=t.query;let a=3;const o=e.queries.get(r);if(o){const l=o.Sa.indexOf(t);l>=0&&(o.Sa.splice(l,1),o.Sa.length===0?a=t.Da()?0:1:!o.ba()&&t.Da()&&(a=2))}switch(a){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function VT(i,t){const e=ft(i);let r=!1;for(const a of t){const o=a.query,l=e.queries.get(o);if(l){for(const h of l.Sa)h.Fa(a)&&(r=!0);l.wa=a}}r&&fc(e)}function FT(i,t,e){const r=ft(i),a=r.queries.get(t);if(a)for(const o of a.Sa)o.onError(e);r.queries.delete(t)}function fc(i){i.Ca.forEach(t=>{t.next()})}var Rl,uh;(uh=Rl||(Rl={})).Ma="default",uh.Cache="cache";class BT{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const a of t.docChanges)a.type!==3&&r.push(a);t=new ts(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=ts.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.key=t}}class Ff{constructor(t){this.key=t}}class zT{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=wt(),this.mutatedKeys=wt(),this.eu=ef(t),this.tu=new $r(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new lh,a=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,l=a,h=!1;const f=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal((v,y)=>{const E=a.get(v),S=Ca(this.query,y)?y:null,B=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let j=!1;E&&S?E.data.isEqual(S.data)?B!==V&&(r.track({type:3,doc:S}),j=!0):this.su(E,S)||(r.track({type:2,doc:S}),j=!0,(f&&this.eu(S,f)>0||m&&this.eu(S,m)<0)&&(h=!0)):!E&&S?(r.track({type:0,doc:S}),j=!0):E&&!S&&(r.track({type:1,doc:E}),j=!0,(f||m)&&(h=!0)),j&&(S?(l=l.add(S),o=V?o.add(v):o.delete(v)):(l=l.delete(v),o=o.delete(v)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),o=o.delete(v.key),r.track({type:1,doc:v})}return{tu:l,iu:r,bs:h,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,a){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const l=t.iu.ya();l.sort((v,y)=>function(S,B){const V=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return at(20277,{Vt:j})}};return V(S)-V(B)}(v.type,y.type)||this.eu(v.doc,y.doc)),this.ou(r),a=a??!1;const h=e&&!a?this._u():[],f=this.Ya.size===0&&this.current&&!a?1:0,m=f!==this.Xa;return this.Xa=f,l.length!==0||m?{snapshot:new ts(this.query,t.tu,o,l,t.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:h}:{au:h}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=wt(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Ff(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Vf(r))}),e}cu(t){this.Za=t.ks,this.Ya=wt();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const pc="SyncEngine";class UT{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class HT{constructor(t){this.key=t,this.hu=!1}}class jT{constructor(t,e,r,a,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new dr(h=>tf(h),Sa),this.Eu=new Map,this.Iu=new Set,this.Ru=new qt(it.comparator),this.Au=new Map,this.Vu=new ic,this.du={},this.mu=new Map,this.fu=Xr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qT(i,t,e=!0){const r=qf(i);let a;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.lu()):a=await Bf(r,t,e,!0),a}async function GT(i,t){const e=qf(i);await Bf(e,t,!0,!1)}async function Bf(i,t,e,r){const a=await aT(i.localStore,Rn(t)),o=a.targetId,l=i.sharedClientState.addLocalQueryTarget(o,e);let h;return r&&(h=await ZT(i,t,o,l==="current",a.resumeToken)),i.isPrimaryClient&&e&&kf(i.remoteStore,a),h}async function ZT(i,t,e,r,a){i.pu=(y,E,S)=>async function(V,j,$,X){let et=j.view.ru($);et.bs&&(et=await nh(V.localStore,j.query,!1).then(({documents:R})=>j.view.ru(R,et)));const Mt=X&&X.targetChanges.get(j.targetId),bt=X&&X.targetMismatches.get(j.targetId)!=null,Bt=j.view.applyChanges(et,V.isPrimaryClient,Mt,bt);return dh(V,j.targetId,Bt.au),Bt.snapshot}(i,y,E,S);const o=await nh(i.localStore,t,!0),l=new zT(t,o.ks),h=l.ru(o.documents),f=so.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",a),m=l.applyChanges(h,i.isPrimaryClient,f);dh(i,e,m.au);const v=new UT(t,e,l);return i.Tu.set(t,v),i.Eu.has(e)?i.Eu.get(e).push(t):i.Eu.set(e,[t]),m.snapshot}async function WT(i,t,e){const r=ft(i),a=r.Tu.get(t),o=r.Eu.get(a.targetId);if(o.length>1)return r.Eu.set(a.targetId,o.filter(l=>!Sa(l,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Cl(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),e&&ac(r.remoteStore,a.targetId),kl(r,a.targetId)}).catch(rs)):(kl(r,a.targetId),await Cl(r.localStore,a.targetId,!0))}async function $T(i,t){const e=ft(i),r=e.Tu.get(t),a=e.Eu.get(r.targetId);e.isPrimaryClient&&a.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ac(e.remoteStore,r.targetId))}async function KT(i,t,e){const r=nE(i);try{const a=await function(l,h){const f=ft(l),m=Ft.now(),v=h.reduce((S,B)=>S.add(B.key),wt());let y,E;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let B=oi(),V=wt();return f.xs.getEntries(S,v).next(j=>{B=j,B.forEach(($,X)=>{X.isValidDocument()||(V=V.add($))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,B)).next(j=>{y=j;const $=[];for(const X of h){const et=ow(X,y.get(X.key).overlayedDocument);et!=null&&$.push(new fr(X.key,et,Wd(et.value.mapValue),ni.exists(!0)))}return f.mutationQueue.addMutationBatch(S,m,$,h)}).next(j=>{E=j;const $=j.applyToLocalDocumentSet(y,V);return f.documentOverlayCache.saveOverlays(S,j.batchId,$)})}).then(()=>({batchId:E.batchId,changes:rf(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),function(l,h,f){let m=l.du[l.currentUser.toKey()];m||(m=new qt(vt)),m=m.insert(h,f),l.du[l.currentUser.toKey()]=m}(r,a.batchId,e),await ao(r,a.changes),await Oa(r.remoteStore)}catch(a){const o=dc(a,"Failed to persist write");e.reject(o)}}async function zf(i,t){const e=ft(i);try{const r=await rT(e.localStore,t);t.targetChanges.forEach((a,o)=>{const l=e.Au.get(o);l&&(Rt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?l.hu=!0:a.modifiedDocuments.size>0?Rt(l.hu,14607):a.removedDocuments.size>0&&(Rt(l.hu,42227),l.hu=!1))}),await ao(e,r,t)}catch(r){await rs(r)}}function hh(i,t,e){const r=ft(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const a=[];r.Tu.forEach((o,l)=>{const h=l.view.va(t);h.snapshot&&a.push(h.snapshot)}),function(l,h){const f=ft(l);f.onlineState=h;let m=!1;f.queries.forEach((v,y)=>{for(const E of y.Sa)E.va(h)&&(m=!0)}),m&&fc(f)}(r.eventManager,t),a.length&&r.Pu.H_(a),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function QT(i,t,e){const r=ft(i);r.sharedClientState.updateQueryState(t,"rejected",e);const a=r.Au.get(t),o=a&&a.key;if(o){let l=new qt(it.comparator);l=l.insert(o,ve.newNoDocument(o,dt.min()));const h=wt().add(o),f=new ka(dt.min(),new Map,new qt(vt),l,h);await zf(r,f),r.Ru=r.Ru.remove(o),r.Au.delete(t),mc(r)}else await Cl(r.localStore,t,!1).then(()=>kl(r,t,e)).catch(rs)}async function YT(i,t){const e=ft(i),r=t.batch.batchId;try{const a=await iT(e.localStore,t);Hf(e,r,null),Uf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ao(e,a)}catch(a){await rs(a)}}async function JT(i,t,e){const r=ft(i);try{const a=await function(l,h){const f=ft(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,h).next(y=>(Rt(y!==null,37113),v=y.keys(),f.mutationQueue.removeMutationBatch(m,y))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,t);Hf(r,t,e),Uf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ao(r,a)}catch(a){await rs(a)}}function Uf(i,t){(i.mu.get(t)||[]).forEach(e=>{e.resolve()}),i.mu.delete(t)}function Hf(i,t,e){const r=ft(i);let a=r.du[r.currentUser.toKey()];if(a){const o=a.get(t);o&&(e?o.reject(e):o.resolve(),a=a.remove(t)),r.du[r.currentUser.toKey()]=a}}function kl(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Eu.get(t))i.Tu.delete(r),e&&i.Pu.yu(r,e);i.Eu.delete(t),i.isPrimaryClient&&i.Vu.Gr(t).forEach(r=>{i.Vu.containsKey(r)||jf(i,r)})}function jf(i,t){i.Iu.delete(t.path.canonicalString());const e=i.Ru.get(t);e!==null&&(ac(i.remoteStore,e),i.Ru=i.Ru.remove(t),i.Au.delete(e),mc(i))}function dh(i,t,e){for(const r of e)r instanceof Vf?(i.Vu.addReference(r.key,t),XT(i,r)):r instanceof Ff?(Y(pc,"Document no longer in limbo: "+r.key),i.Vu.removeReference(r.key,t),i.Vu.containsKey(r.key)||jf(i,r.key)):at(19791,{wu:r})}function XT(i,t){const e=t.key,r=e.path.canonicalString();i.Ru.get(e)||i.Iu.has(r)||(Y(pc,"New document in limbo: "+e),i.Iu.add(r),mc(i))}function mc(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const t=i.Iu.values().next().value;i.Iu.delete(t);const e=new it(jt.fromString(t)),r=i.fu.next();i.Au.set(r,new HT(e)),i.Ru=i.Ru.insert(e,r),kf(i.remoteStore,new Ii(Rn(Jl(e.path)),r,"TargetPurposeLimboResolution",Ia.ce))}}async function ao(i,t,e){const r=ft(i),a=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((h,f)=>{l.push(r.pu(f,t,e).then(m=>{var v;if((m||e)&&r.isPrimaryClient){const y=m?!m.fromCache:(v=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,y?"current":"not-current")}if(m){a.push(m);const y=sc.Is(f.targetId,m);o.push(y)}}))}),await Promise.all(l),r.Pu.H_(a),await async function(f,m){const v=ft(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>z.forEach(m,E=>z.forEach(E.Ts,S=>v.persistence.referenceDelegate.addReference(y,E.targetId,S)).next(()=>z.forEach(E.Es,S=>v.persistence.referenceDelegate.removeReference(y,E.targetId,S)))))}catch(y){if(!ss(y))throw y;Y(oc,"Failed to update sequence numbers: "+y)}for(const y of m){const E=y.targetId;if(!y.fromCache){const S=v.vs.get(E),B=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(B);v.vs=v.vs.insert(E,V)}}}(r.localStore,o))}async function tE(i,t){const e=ft(i);if(!e.currentUser.isEqual(t)){Y(pc,"User change. New user:",t.toKey());const r=await Sf(e.localStore,t);e.currentUser=t,function(o,l){o.mu.forEach(h=>{h.forEach(f=>{f.reject(new tt(H.CANCELLED,l))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ao(e,r.Ns)}}function eE(i,t){const e=ft(i),r=e.Au.get(t);if(r&&r.hu)return wt().add(r.key);{let a=wt();const o=e.Eu.get(t);if(!o)return a;for(const l of o){const h=e.Tu.get(l);a=a.unionWith(h.view.nu)}return a}}function qf(i){const t=ft(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=QT.bind(null,t),t.Pu.H_=VT.bind(null,t.eventManager),t.Pu.yu=FT.bind(null,t.eventManager),t}function nE(i){const t=ft(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=YT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=JT.bind(null,t),t}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xa(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return nT(this.persistence,new Xw,t.initialUser,this.serializer)}Cu(t){return new Af(rc.Vi,this.serializer)}Du(t){return new cT}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class iE extends pa{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Rt(this.persistence.referenceDelegate instanceof da,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Fw(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Af(r=>da.Vi(r,e),this.serializer)}}class xl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tE.bind(null,this.syncEngine),await xT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new OT}()}createDatastore(t){const e=xa(t.databaseInfo.databaseId),r=pT(t.databaseInfo);return vT(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,a,o,l,h){return new TT(r,a,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>hh(this.syncEngine,e,0),function(){return sh.v()?new sh:new uT}())}createSyncEngine(t,e){return function(a,o,l,h,f,m,v){const y=new jT(a,o,l,h,f,m);return v&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(a){const o=ft(a);Y(sr,"RemoteStore shutting down."),o.Ia.add(5),await oo(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}xl.provider={build:()=>new xl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):si("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="FirestoreClient";class sE{constructor(t,e,r,a,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=a,this.user=ye.UNAUTHENTICATED,this.clientId=Gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{Y(Oi,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(Y(Oi,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=dc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function il(i,t){i.asyncQueue.verifyOperationInProgress(),Y(Oi,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await Sf(t.localStore,a),r=a)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function fh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await oE(i);Y(Oi,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>ah(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>ah(t.remoteStore,a)),i._onlineComponents=t}async function oE(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Y(Oi,"Using user provided OfflineComponentProvider");try{await il(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(a){return a.name==="FirebaseError"?a.code===H.FAILED_PRECONDITION||a.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(e))throw e;rr("Error using user provided cache. Falling back to memory cache: "+e),await il(i,new pa)}}else Y(Oi,"Using default OfflineComponentProvider"),await il(i,new iE(void 0));return i._offlineComponents}async function Gf(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Y(Oi,"Using user provided OnlineComponentProvider"),await fh(i,i._uninitializedComponentsProvider._online)):(Y(Oi,"Using default OnlineComponentProvider"),await fh(i,new xl))),i._onlineComponents}function aE(i){return Gf(i).then(t=>t.syncEngine)}async function lE(i){const t=await Gf(i),e=t.eventManager;return e.onListen=qT.bind(null,t.syncEngine),e.onUnlisten=WT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=GT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=$T.bind(null,t.syncEngine),e}function cE(i,t,e={}){const r=new Si;return i.asyncQueue.enqueueAndForget(async()=>function(o,l,h,f,m){const v=new rE({next:E=>{v.Nu(),l.enqueueAndForget(()=>NT(o,y));const S=E.docs.has(h);!S&&E.fromCache?m.reject(new tt(H.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&f&&f.source==="server"?m.reject(new tt(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(E)},error:E=>m.reject(E)}),y=new BT(Jl(h.path),v,{includeMetadataChanges:!0,qa:!0});return DT(o,y)}(await lE(i),i.asyncQueue,t,e,r)),r.promise}function uE(i,t){const e=new Si;return i.asyncQueue.enqueueAndForget(async()=>KT(await aE(i),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="ComponentProvider",ph=new Map;function dE(i,t,e,r,a){return new Cv(i,t,e,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,Zf(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="firestore.googleapis.com",mh=!0;class _h{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new tt(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wf,this.ssl=mh}else this.host=t.host,this.ssl=t.ssl??mh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Pf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nw)throw new tt(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zf(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new tt(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new tt(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new tt(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _c{constructor(t,e,r,a){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _h({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tt(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new tt(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _h(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ov;switch(r.type){case"firstParty":return new uv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new tt(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ph.get(e);r&&(Y(hE,"Removing Datastore"),ph.delete(e),r.terminate())}(this),Promise.resolve()}}function fE(i,t,e,r={}){var m;i=js(i,_c);const a=Js(t),o=i._getSettings(),l={...o,emulatorOptions:i._getEmulatorOptions()},h=`${t}:${e}`;a&&Hh(`https://${h}`),o.host!==Wf&&o.host!==h&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:a,emulatorOptions:r};if(!Ci(f,l)&&(i._setSettings(f),r.mockUserToken)){let v,y;if(typeof r.mockUserToken=="string")v=r.mockUserToken,y=ye.MOCK_USER;else{v=_m(r.mockUserToken,(m=i._app)==null?void 0:m.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new tt(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new ye(E)}i._authCredentials=new av(new Nd(v,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gc(this.firestore,t,this._query)}}class ue{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ue(this.firestore,t,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(io(e,ue._jsonSchema))return new ue(t,r||null,new it(jt.fromString(e.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:ee("string",ue._jsonSchemaVersion),referencePath:ee("string")};class Qs extends gc{constructor(t,e,r){super(t,e,Jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ue(this.firestore,null,new it(t))}withConverter(t){return new Qs(this.firestore,t,this._path)}}function gh(i,t,...e){if(i=Te(i),arguments.length===1&&(t=Gl.newId()),_v("doc","path",t),i instanceof _c){const r=jt.fromString(t,...e);return Ru(r),new ue(i,null,new it(r))}{if(!(i instanceof ue||i instanceof Qs))throw new tt(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(jt.fromString(t,...e));return Ru(r),new ue(i.firestore,i instanceof Qs?i.converter:null,new it(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="AsyncQueue";class vh{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lf(this,"async_queue_retry"),this._c=()=>{const r=nl();r&&Y(yh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=nl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Si;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ss(t))throw t;Y(yh,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,si("INTERNAL UNHANDLED ERROR: ",wh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const a=hc.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(a),a}uc(){this.nc&&at(47125,{Pc:wh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function wh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class yc extends _c{constructor(t,e,r,a){super(t,e,r,a),this.type="firestore",this._queue=new vh,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vh(t),this._firestoreClient=void 0,await t}}}function pE(i,t){const e=typeof i=="object"?i:Dl(),r=typeof i=="string"?i:sa,a=cr(e,"firestore").getImmediate({identifier:r});if(!a._initialized){const o=pm("firestore");o&&fE(a,...o)}return a}function $f(i){if(i._terminated)throw new tt(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||mE(i),i._firestoreClient}function mE(i){var r,a,o,l;const t=i._freezeSettings(),e=dE(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(a=i._app)==null?void 0:a.options.apiKey,t);i._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((l=t.localCache)!=null&&l._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new sE(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ke(me.fromBase64String(t))}catch(e){throw new tt(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ke(me.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(io(t,Ke._jsonSchema))return Ke.fromBase64String(t.bytes)}}Ke._jsonSchemaVersion="firestore/bytes/1.0",Ke._jsonSchema={type:ee("string",Ke._jsonSchemaVersion),bytes:ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new tt(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new tt(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new tt(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return vt(this._lat,t._lat)||vt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(t){if(io(t,xn._jsonSchema))return new xn(t.latitude,t.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:ee("string",xn._jsonSchemaVersion),latitude:ee("number"),longitude:ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(io(t,un._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new un(t.vectorValues);throw new tt(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:ee("string",un._jsonSchemaVersion),vectorValues:ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=/^__.*__$/;class gE{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new fr(t,this.data,this.fieldMask,e,this.fieldTransforms):new ro(t,this.data,e,this.fieldTransforms)}}function Yf(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw at(40011,{dataSource:i})}}class vc{constructor(t,e,r,a,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new vc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var a;const e=(a=this.path)==null?void 0:a.child(t),r=this.i({path:e,arrayElement:!1});return r.mc(t),r}fc(t){var a;const e=(a=this.path)==null?void 0:a.child(t),r=this.i({path:e,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return ma(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Yf(this.dataSource)&&_E.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class yE{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xa(t)}A(t,e,r,a=!1){return new vc({dataSource:t,methodName:e,targetDoc:r,path:pe.emptyPath(),arrayElement:!1,hasConverter:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vE(i){const t=i._freezeSettings(),e=xa(i._databaseId);return new yE(i._databaseId,!!t.ignoreUndefinedProperties,e)}function wE(i,t,e,r,a,o={}){const l=i.A(o.merge||o.mergeFields?2:0,t,e,a);ep("Data must be an object, but it was:",l,r);const h=Xf(r,l);let f,m;if(o.merge)f=new cn(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const y of o.mergeFields){const E=wc(t,y,e);if(!l.contains(E))throw new tt(H.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);IE(v,E)||v.push(E)}f=new cn(v),m=l.fieldTransforms.filter(y=>f.covers(y.field))}else f=null,m=l.fieldTransforms;return new gE(new $e(h),f,m)}function Jf(i,t){if(tp(i=Te(i)))return ep("Unsupported field value:",t,i),Xf(i,t);if(i instanceof Qf)return function(r,a){if(!Yf(a.dataSource))throw a.yc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,a){const o=[];let l=0;for(const h of r){let f=Jf(h,a.gc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(i,t)}return function(r,a){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tw(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ft.fromDate(r);return{timestampValue:ha(a.serializer,o)}}if(r instanceof Ft){const o=new Ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(a.serializer,o)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:gf(a.serializer,r._byteString)};if(r instanceof ue){const o=a.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw a.yc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:nc(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof un)return function(l,h){const f=l instanceof un?l.toArray():l;return{mapValue:{fields:{[Gd]:{stringValue:Zd},[oa]:{arrayValue:{values:f.map(v=>{if(typeof v!="number")throw h.yc("VectorValues must only contain numeric values.");return Xl(h.serializer,v)})}}}}}}(r,a);if(bf(r))return r._toProto(a.serializer);throw a.yc(`Unsupported field value: ${Zl(r)}`)}(i,t)}function Xf(i,t){const e={};return Bd(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hr(i,(r,a)=>{const o=Jf(a,t.dc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function tp(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ft||i instanceof xn||i instanceof Ke||i instanceof ue||i instanceof Qf||i instanceof un||bf(i))}function ep(i,t,e){if(!tp(e)||!Vd(e)){const r=Zl(e);throw r==="an object"?t.yc(i+" a custom object"):t.yc(i+" "+r)}}function wc(i,t,e){if((t=Te(t))instanceof Kf)return t._internalPath;if(typeof t=="string")return EE(i,t);throw ma("Field path arguments must be of type string or ",i,!1,void 0,e)}const TE=new RegExp("[~\\*/\\[\\]]");function EE(i,t,e){if(t.search(TE)>=0)throw ma(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Kf(...t.split("."))._internalPath}catch{throw ma(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function ma(i,t,e,r,a){const o=r&&!r.isEmpty(),l=a!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${a}`),f+=")"),new tt(H.INVALID_ARGUMENT,h+i+f)}function IE(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{convertValue(t,e="none"){switch(xi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ki(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw at(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hr(t,(a,o)=>{r[a]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,a,o;const e=(o=(a=(r=t.fields)==null?void 0:r[oa].arrayValue)==null?void 0:a.values)==null?void 0:o.map(l=>Qt(l.doubleValue));return new un(e)}convertGeoPoint(t){return new xn(Qt(t.latitude),Qt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Pa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Gs(t));default:return null}}convertTimestamp(t){const e=Ri(t);return new Ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=jt.fromString(t);Rt(If(r),9688,{name:t});const a=new Zs(r.get(1),r.get(3)),o=new it(r.popFirst(5));return a.isEqual(e)||si(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends bE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ue(this.firestore,null,e)}}const Th="@firebase/firestore",Eh="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e,r,a,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new AE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(wc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class AE extends np{data(){return super.data()}}function SE(i,t,e){let r;return r=i?i.toFirestore(t):t,r}class Ms{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tr extends np{constructor(t,e,r,a,o,l){super(t,e,r,a,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(wc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new tt(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=tr._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",tr._jsonSchema={type:ee("string",tr._jsonSchemaVersion),bundleSource:ee("string","DocumentSnapshot"),bundleName:ee("string"),bundle:ee("string")};class Ko extends tr{data(t={}){return super.data(t)}}class Bs{constructor(t,e,r,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new Ms(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ko(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new tt(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let l=0;return a._snapshot.docChanges.map(h=>{const f=new Ko(a._firestore,a._userDataWriter,h.doc.key,h.doc,new Ms(a._snapshot.mutatedKeys.has(h.doc.key),a._snapshot.fromCache),a.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Ko(a._firestore,a._userDataWriter,h.doc.key,h.doc,new Ms(a._snapshot.mutatedKeys.has(h.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,v=-1;return h.type!==0&&(m=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),v=l.indexOf(h.doc.key)),{type:CE(h.type),doc:f,oldIndex:m,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new tt(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Bs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Gl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],a=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),a.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function CE(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return at(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bs._jsonSchemaVersion="firestore/querySnapshot/1.0",Bs._jsonSchema={type:ee("string",Bs._jsonSchemaVersion),bundleSource:ee("string","QuerySnapshot"),bundleName:ee("string"),bundle:ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(i){i=js(i,ue);const t=js(i.firestore,yc),e=$f(t);return cE(e,i._key).then(r=>xE(t,i,r))}function RE(i,t,e){i=js(i,ue);const r=js(i.firestore,yc),a=SE(i.converter,t),o=vE(r);return kE(r,[wE(o,"setDoc",i._key,a,i.converter!==null,e).toMutation(i._key,ni.none())])}function kE(i,t){const e=$f(i);return uE(e,t)}function xE(i,t,e){const r=e.docs.get(t._key),a=new PE(i);return new tr(i,a,t._key,r,new Ms(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){sv(es),Mn(new hn("firestore",(r,{instanceIdentifier:a,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new yc(new lv(r.getProvider("auth-internal")),new hv(l,r.getProvider("app-check-internal")),Lv(l,a),l);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Qe(Th,Eh,t),Qe(Th,Eh,"esm2020")})();const ip="@firebase/installations",Tc="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1e4,sp=`w:${Tc}`,op="FIS_v2",ME="https://firebaseinstallations.googleapis.com/v1",OE=60*60*1e3,DE="installations",NE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},or=new lr(DE,NE,VE);function ap(i){return i instanceof fn&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp({projectId:i}){return`${ME}/projects/${i}/installations`}function cp(i){return{token:i.token,requestStatus:2,expiresIn:BE(i.expiresIn),creationTime:Date.now()}}async function up(i,t){const r=(await t.json()).error;return or.create("request-failed",{requestName:i,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function hp({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function FE(i,{refreshToken:t}){const e=hp(i);return e.append("Authorization",zE(t)),e}async function dp(i){const t=await i();return t.status>=500&&t.status<600?i():t}function BE(i){return Number(i.replace("s","000"))}function zE(i){return`${op} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE({appConfig:i,heartbeatServiceProvider:t},{fid:e}){const r=lp(i),a=hp(i),o=t.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const l={fid:e,authVersion:op,appId:i.appId,sdkVersion:sp},h={method:"POST",headers:a,body:JSON.stringify(l)},f=await dp(()=>fetch(r,h));if(f.ok){const m=await f.json();return{fid:m.fid||e,registrationStatus:2,refreshToken:m.refreshToken,authToken:cp(m.authToken)}}else throw await up("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(i){return new Promise(t=>{setTimeout(t,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^[cdef][\w-]{21}$/,Ml="";function qE(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const e=GE(i);return jE.test(e)?e:Ml}catch{return Ml}}function GE(i){return HE(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function mp(i,t){const e=Da(i);_p(e,t),ZE(e,t)}function _p(i,t){const e=pp.get(i);if(e)for(const r of e)r(t)}function ZE(i,t){const e=WE();e&&e.postMessage({key:i,fid:t}),$E()}let Xi=null;function WE(){return!Xi&&"BroadcastChannel"in self&&(Xi=new BroadcastChannel("[Firebase] FID Change"),Xi.onmessage=i=>{_p(i.data.key,i.data.fid)}),Xi}function $E(){pp.size===0&&Xi&&(Xi.close(),Xi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="firebase-installations-database",QE=1,ar="firebase-installations-store";let rl=null;function Ec(){return rl||(rl=Gh(KE,QE,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(ar)}}})),rl}async function _a(i,t){const e=Da(i),a=(await Ec()).transaction(ar,"readwrite"),o=a.objectStore(ar),l=await o.get(e);return await o.put(t,e),await a.done,(!l||l.fid!==t.fid)&&mp(i,t.fid),t}async function gp(i){const t=Da(i),r=(await Ec()).transaction(ar,"readwrite");await r.objectStore(ar).delete(t),await r.done}async function Na(i,t){const e=Da(i),a=(await Ec()).transaction(ar,"readwrite"),o=a.objectStore(ar),l=await o.get(e),h=t(l);return h===void 0?await o.delete(e):await o.put(h,e),await a.done,h&&(!l||l.fid!==h.fid)&&mp(i,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(i){let t;const e=await Na(i.appConfig,r=>{const a=YE(r),o=JE(i,a);return t=o.registrationPromise,o.installationEntry});return e.fid===Ml?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function YE(i){const t=i||{fid:qE(),registrationStatus:0};return yp(t)}function JE(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(or.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=XE(i,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:tI(i)}:{installationEntry:t}}async function XE(i,t){try{const e=await UE(i,t);return _a(i.appConfig,e)}catch(e){throw ap(e)&&e.customData.serverCode===409?await gp(i.appConfig):await _a(i.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function tI(i){let t=await Ih(i.appConfig);for(;t.registrationStatus===1;)await fp(100),t=await Ih(i.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ic(i);return r||e}return t}function Ih(i){return Na(i,t=>{if(!t)throw or.create("installation-not-found");return yp(t)})}function yp(i){return eI(i)?{fid:i.fid,registrationStatus:0}:i}function eI(i){return i.registrationStatus===1&&i.registrationTime+rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI({appConfig:i,heartbeatServiceProvider:t},e){const r=iI(i,e),a=FE(i,e),o=t.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const l={installation:{sdkVersion:sp,appId:i.appId}},h={method:"POST",headers:a,body:JSON.stringify(l)},f=await dp(()=>fetch(r,h));if(f.ok){const m=await f.json();return cp(m)}else throw await up("Generate Auth Token",f)}function iI(i,{fid:t}){return`${lp(i)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(i,t=!1){let e;const r=await Na(i.appConfig,o=>{if(!vp(o))throw or.create("not-registered");const l=o.authToken;if(!t&&oI(l))return o;if(l.requestStatus===1)return e=rI(i,t),o;{if(!navigator.onLine)throw or.create("app-offline");const h=lI(o);return e=sI(i,h),h}});return e?await e:r.authToken}async function rI(i,t){let e=await bh(i.appConfig);for(;e.authToken.requestStatus===1;)await fp(100),e=await bh(i.appConfig);const r=e.authToken;return r.requestStatus===0?bc(i,t):r}function bh(i){return Na(i,t=>{if(!vp(t))throw or.create("not-registered");const e=t.authToken;return cI(e)?{...t,authToken:{requestStatus:0}}:t})}async function sI(i,t){try{const e=await nI(i,t),r={...t,authToken:e};return await _a(i.appConfig,r),e}catch(e){if(ap(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await gp(i.appConfig);else{const r={...t,authToken:{requestStatus:0}};await _a(i.appConfig,r)}throw e}}function vp(i){return i!==void 0&&i.registrationStatus===2}function oI(i){return i.requestStatus===2&&!aI(i)}function aI(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+OE}function lI(i){const t={requestStatus:1,requestTime:Date.now()};return{...i,authToken:t}}function cI(i){return i.requestStatus===1&&i.requestTime+rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(i){const t=i,{installationEntry:e,registrationPromise:r}=await Ic(t);return r?r.catch(console.error):bc(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(i,t=!1){const e=i;return await dI(e),(await bc(e,t)).token}async function dI(i){const{registrationPromise:t}=await Ic(i);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(i){if(!i||!i.options)throw sl("App Configuration");if(!i.name)throw sl("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!i.options[e])throw sl(e);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function sl(i){return or.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="installations",pI="installations-internal",mI=i=>{const t=i.getProvider("app").getImmediate(),e=fI(t),r=cr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_I=i=>{const t=i.getProvider("app").getImmediate(),e=cr(t,wp).getImmediate();return{getId:()=>uI(e),getToken:a=>hI(e,a)}};function gI(){Mn(new hn(wp,mI,"PUBLIC")),Mn(new hn(pI,_I,"PRIVATE"))}gI();Qe(ip,Tc);Qe(ip,Tc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="analytics",yI="firebase_id",vI="origin",wI=60*1e3,TI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new va("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new lr("analytics","Analytics",EI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(i){if(!i.startsWith(Pc)){const t=De.create("invalid-gtag-resource",{gtagURL:i});return Ae.warn(t.message),""}return i}function Tp(i){return Promise.all(i.map(t=>t.catch(e=>e)))}function bI(i,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(i,t)),e}function PI(i,t){const e=bI("firebase-js-sdk-policy",{createScriptURL:II}),r=document.createElement("script"),a=`${Pc}?l=${i}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function AI(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function SI(i,t,e,r,a,o){const l=r[a];try{if(l)await t[l];else{const f=(await Tp(e)).find(m=>m.measurementId===a);f&&await t[f.appId]}}catch(h){Ae.error(h)}i("config",a,o)}async function CI(i,t,e,r,a){try{let o=[];if(a&&a.send_to){let l=a.send_to;Array.isArray(l)||(l=[l]);const h=await Tp(e);for(const f of l){const m=h.find(y=>y.measurementId===f),v=m&&t[m.appId];if(v)o.push(v);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),i("event",r,a||{})}catch(o){Ae.error(o)}}function LI(i,t,e,r){async function a(o,...l){try{if(o==="event"){const[h,f]=l;await CI(i,t,e,h,f)}else if(o==="config"){const[h,f]=l;await SI(i,t,e,r,h,f)}else if(o==="consent"){const[h,f]=l;i("consent",h,f)}else if(o==="get"){const[h,f,m]=l;i("get",h,f,m)}else if(o==="set"){const[h]=l;i("set",h)}else i(o,...l)}catch(h){Ae.error(h)}}return a}function RI(i,t,e,r,a){let o=function(...l){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=LI(o,i,t,e),{gtagCore:o,wrappedGtag:window[a]}}function kI(i){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Pc)&&e.src.includes(i))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=30,MI=1e3;class OI{constructor(t={},e=MI){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ep=new OI;function DI(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function NI(i){var l;const{appId:t,apiKey:e}=i,r={method:"GET",headers:DI(e)},a=TI.replace("{app-id}",t),o=await fetch(a,r);if(o.status!==200&&o.status!==304){let h="";try{const f=await o.json();(l=f.error)!=null&&l.message&&(h=f.error.message)}catch{}throw De.create("config-fetch-failed",{httpStatus:o.status,responseMessage:h})}return o.json()}async function VI(i,t=Ep,e){const{appId:r,apiKey:a,measurementId:o}=i.options;if(!r)throw De.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:r};throw De.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new zI;return setTimeout(async()=>{h.abort()},wI),Ip({appId:r,apiKey:a,measurementId:o},l,h,t)}async function Ip(i,{throttleEndTimeMillis:t,backoffCount:e},r,a=Ep){var h;const{appId:o,measurementId:l}=i;try{await FI(r,t)}catch(f){if(l)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:l};throw f}try{const f=await NI(i);return a.deleteThrottleMetadata(o),f}catch(f){const m=f;if(!BI(m)){if(a.deleteThrottleMetadata(o),l)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:o,measurementId:l};throw f}const v=Number((h=m==null?void 0:m.customData)==null?void 0:h.httpStatus)===503?Xc(e,a.intervalMillis,xI):Xc(e,a.intervalMillis),y={throttleEndTimeMillis:Date.now()+v,backoffCount:e+1};return a.setThrottleMetadata(o,y),Ae.debug(`Calling attemptFetch again in ${v} millis`),Ip(i,y,r,a)}}function FI(i,t){return new Promise((e,r)=>{const a=Math.max(t-Date.now(),0),o=setTimeout(e,a);i.addEventListener(()=>{clearTimeout(o),r(De.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function BI(i){if(!(i instanceof fn)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class zI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function UI(i,t,e,r,a){if(a&&a.global){i("event",e,r);return}else{const o=await t,l={...r,send_to:o};i("event",e,l)}}async function HI(i,t,e,r){if(r&&r.global){const a={};for(const o of Object.keys(e))a[`user_properties.${o}`]=e[o];return i("set",a),Promise.resolve()}else{const a=await t;i("config",a,{update:!0,user_properties:e})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(){if(zh())try{await Uh()}catch(i){return Ae.warn(De.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Ae.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qI(i,t,e,r,a,o,l){const h=VI(i);h.then(E=>{e[E.measurementId]=E.appId,i.options.measurementId&&E.measurementId!==i.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Ae.error(E)),t.push(h);const f=jI().then(E=>{if(E)return r.getId()}),[m,v]=await Promise.all([h,f]);kI(o)||PI(o,m.measurementId),a("js",new Date);const y=(l==null?void 0:l.config)??{};return y[vI]="firebase",y.update=!0,v!=null&&(y[yI]=v),a("config",m.measurementId,y),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t){this.app=t}_delete(){return delete Kr[this.app.options.appId],Promise.resolve()}}let Kr={},Ph=[];const Ah={};let ol="dataLayer",ZI="gtag",Sh,Ac,Ch=!1;function WI(){const i=[];if(Bh()&&i.push("This is a browser extension environment."),Im()||i.push("Cookies are not available."),i.length>0){const t=i.map((r,a)=>`(${a+1}) ${r}`).join(" "),e=De.create("invalid-analytics-context",{errorInfo:t});Ae.warn(e.message)}}function $I(i,t,e){WI();const r=i.options.appId;if(!r)throw De.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw De.create("no-api-key");if(Kr[r]!=null)throw De.create("already-exists",{id:r});if(!Ch){AI(ol);const{wrappedGtag:o,gtagCore:l}=RI(Kr,Ph,Ah,ol,ZI);Ac=o,Sh=l,Ch=!0}return Kr[r]=qI(i,Ph,Ah,t,Sh,ol,e),new GI(i)}function KI(i=Dl()){i=Te(i);const t=cr(i,ga);return t.isInitialized()?t.getImmediate():QI(i)}function QI(i,t={}){const e=cr(i,ga);if(e.isInitialized()){const a=e.getImmediate();if(Ci(t,e.getOptions()))return a;throw De.create("already-initialized")}return e.initialize({options:t})}function YI(i,t,e){i=Te(i),HI(Ac,Kr[i.app.options.appId],t,e).catch(r=>Ae.error(r))}function JI(i,t,e,r){i=Te(i),UI(Ac,Kr[i.app.options.appId],t,e,r).catch(a=>Ae.error(a))}const Lh="@firebase/analytics",Rh="0.10.21";function XI(){Mn(new hn(ga,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return $I(r,a,e)},"PUBLIC")),Mn(new hn("analytics-internal",i,"PRIVATE")),Qe(Lh,Rh),Qe(Lh,Rh,"esm2020");function i(t){try{const e=t.getProvider(ga).getImmediate();return{logEvent:(r,a,o)=>JI(e,r,a,o),setUserProperties:(r,a)=>YI(e,r,a)}}catch(e){throw De.create("interop-component-reg-failed",{reason:e})}}}XI();const tb={apiKey:"AIzaSyAeo6stBSEBh7uQUIkYgJ7TFFjM8Siu4AU",authDomain:"optitank-c7709.firebaseapp.com",projectId:"optitank-c7709",storageBucket:"optitank-c7709.firebasestorage.app",messagingSenderId:"234789643916",appId:"1:234789643916:web:aabec1180d95eff9093da9",measurementId:"G-8ZZBVN0DTL"},Sc=Zh(tb),Bo=iv(Sc),kh=pE(Sc);KI(Sc);document.addEventListener("DOMContentLoaded",()=>{var ci,Bn,_r,Bi,ui,zi,en,gn,zn,Be,nn,Un,Ui;const i=document.getElementById("main-content"),t=document.querySelectorAll(".nav-item");let e=[],r=JSON.parse(localStorage.getItem("fillz_profile")||"null"),a=(r==null?void 0:r.fuelType)||"SP95",o=JSON.parse(localStorage.getItem("fillz_favs")||"[]"),l=!1,h=!r,f=null,m="price",v=localStorage.getItem("fillz_map_theme")||"dark",y=null,E=null,S=null,B=46.52,V=6.63;async function j(){if(f)try{const F=JSON.parse(localStorage.getItem("fillz_refuels")||"[]");await RE(gh(kh,"users",f.uid),{profile:r,favorites:o,refuels:F})}catch(F){console.error("Erreur Sync Firestore",F)}}async function $(F){try{const G=await LE(gh(kh,"users",F.uid));if(G.exists()){const q=G.data();return q.profile&&(r=q.profile,a=r.fuelType||"SP95",localStorage.setItem("fillz_profile",JSON.stringify(r))),q.favorites&&(o=q.favorites,localStorage.setItem("fillz_favs",JSON.stringify(o))),q.refuels&&localStorage.setItem("fillz_refuels",JSON.stringify(q.refuels)),!0}}catch(G){console.error("Erreur Load Firestore",G)}return!1}Gg(Bo,F=>{f=F,F&&r&&j()});function X(F,G,q,Q){const gt=(q-F)*Math.PI/180,ie=(Q-G)*Math.PI/180,Dt=Math.sin(gt/2)*Math.sin(gt/2)+Math.cos(F*Math.PI/180)*Math.cos(q*Math.PI/180)*Math.sin(ie/2)*Math.sin(ie/2);return 6371*2*Math.atan2(Math.sqrt(Dt),Math.sqrt(1-Dt))}function et(){if(!(r!=null&&r.vehicleMotorization))return 50;const F=r.vehicleMotorization.match(/(\d+)L/);return F?parseInt(F[1],10):r.vehicleMotorization.includes("Électrique")?0:50}function Mt(){return a}function bt(){return r!=null&&r.vehicleBrand?r.vehicleBrand+" "+r.vehicleModel+(r.vehicleYear?" ("+r.vehicleYear+")":"")+(r.vehicleMotorization&&r.vehicleMotorization!=="0"?" — "+r.vehicleMotorization:""):"Véhicule non configuré"}navigator.geolocation&&navigator.geolocation.getCurrentPosition(F=>{B=F.coords.latitude,V=F.coords.longitude});const R=`<div id="onboarding" style="${h?"":"display:none"}">
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
      ${x("ob")}
      <button class="btn-primary ob-next">Continuer</button>
      <button class="ob-skip">Passer cette étape</button>
    </div>
    <div class="onboarding-step" data-step="5">
      <i class="ph-fill ph-check-circle step-icon" style="color:var(--accent-green)"></i>
      <h1 class="ob-title">Tout est prêt !</h1>
      <p class="ob-text">Vos préférences sont enregistrées dans le cloud. L'IA va scanner le meilleur choix pour <strong>${a}</strong>.</p>
      <button class="btn-primary" id="ob-finish">Lancer le radar IA</button>
    </div>
  </div>`,I=(r==null?void 0:r.name)||"Utilisateur",A=(r==null?void 0:r.email)||"email@exemple.com",C=`
    <div class="view view-radar ${h?"":"active"}" id="view-radar">
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
        <button class="filter-chip active" id="chip-fuel"><i class="ph ph-gas-pump"></i> ${a} <i class="ph ph-caret-down"></i></button>
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
        <h2 id="prof-name">${I}</h2>
        <p class="email" id="prof-email">${A}</p>
      </div>
      <div class="profile-cards">
        <div class="section-title">Mon véhicule</div>
        <div class="vehicle-card" id="vehicle-card">
          <div class="vehicle-card-info">
            <i class="ph-fill ph-car" style="font-size:26px;color:var(--accent-purple)"></i>
            <div>
              <strong id="prof-vehicle">${bt()}</strong>
              <span class="text-muted" id="prof-moto" style="font-size:12px;display:block">${(r==null?void 0:r.vehicleMotorization)||""}</span>
            </div>
          </div>
          <button class="btn-sm" id="btn-change-vehicle">Modifier</button>
        </div>
        <div class="section-title">Préférences</div>
        <div class="list-item" style="padding-right: 12px;">
          <div class="item-left"><i class="ph-fill ph-gas-pump"></i> Carburant préféré</div>
          <select id="prof-fuel-sel" class="ob-input ob-select" style="width: auto; margin: 0; padding: 6px 30px 6px 12px; background: rgba(255,255,255,0.08); border: none; font-size: 14px; text-align: right;">
            <option value="SP95" ${a==="SP95"?"selected":""}>SP95</option>
            <option value="SP98" ${a==="SP98"?"selected":""}>SP98</option>
            <option value="Diesel" ${a==="Diesel"?"selected":""}>Diesel</option>
            <option value="Diesel Premium" ${a==="Diesel Premium"?"selected":""}>Diesel Premium</option>
            <option value="GPL" ${a==="GPL"?"selected":""}>GPL</option>
            <option value="GNC" ${a==="GNC"?"selected":""}>GNC</option>
            <option value="Ethanol 85" ${a==="Ethanol 85"?"selected":""}>E85</option>
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
    </div>`;document.body.insertAdjacentHTML("afterbegin",R),i.innerHTML=C;function x(F){return`<select id="${F}-brand" class="ob-input ob-select"><option value="">Chargement des marques...</option></select><select id="${F}-model" class="ob-input ob-select" disabled><option value="">Sélectionnez une marque d'abord...</option></select><select id="${F}-year" class="ob-input ob-select" disabled><option value="">Sélectionnez un modèle d'abord...</option></select><div id="${F}-badge" class="tank-info-badge" style="display:none; margin-top:12px; justify-content:center;"></div>`}const b=document.getElementById("onboarding"),pt={};async function Ne(F){const G=document.getElementById("auth-email").value,q=document.getElementById("auth-pwd").value,Q=document.getElementById("auth-error");if(!G||!q){Q.textContent="Tous les champs sont requis",Q.style.display="block";return}document.getElementById("btn-auth-login").disabled=!0,document.getElementById("btn-auth-register").disabled=!0,Q.style.display="none";try{if(F==="register")f=(await Ug(Bo,G,q)).user,Yt(1);else{const nt=await Hg(Bo,G,q);f=nt.user,await $(nt.user)&&r?(b.style.display="none",h=!1,St(),tn("radar"),ke()):Yt(1)}}catch(nt){Q.textContent="Erreur: "+nt.message,Q.style.display="block",document.getElementById("btn-auth-login").disabled=!1,document.getElementById("btn-auth-register").disabled=!1}}(ci=document.getElementById("btn-auth-login"))==null||ci.addEventListener("click",()=>Ne("login")),(Bn=document.getElementById("btn-auth-register"))==null||Bn.addEventListener("click",()=>Ne("register"));function Yt(F){const G=document.querySelector(`.onboarding-step[data-step="${F}"]`),q=document.querySelector(`.onboarding-step[data-step="${F+1}"]`);G&&(G.classList.remove("active"),G.classList.add("prev")),q&&q.classList.add("active")}document.querySelectorAll(".ob-next").forEach(F=>{F.addEventListener("click",G=>{const q=parseInt(G.target.closest(".onboarding-step").dataset.step);q===2&&(pt.name=document.getElementById("ob-name").value||"Utilisateur"),q===3&&(a=pt.fuelType||"SP95",document.getElementById("chip-fuel").innerHTML=`<i class="ph ph-gas-pump"></i> ${a} <i class="ph ph-caret-down"></i>`),Yt(q)})}),rt("ob",pt,()=>{}),document.querySelectorAll(".fuel-btn").forEach(F=>{F.addEventListener("click",()=>{document.querySelectorAll(".fuel-btn").forEach(G=>G.classList.remove("selected")),F.classList.add("selected"),pt.fuelType=F.dataset.fuel})}),(_r=document.querySelector(".ob-skip"))==null||_r.addEventListener("click",()=>{Yt(4)}),(Bi=document.getElementById("ob-finish"))==null||Bi.addEventListener("click",()=>{r={name:pt.name||"Utilisateur",email:(f==null?void 0:f.email)||"",fuelType:pt.fuelType||a,vehicleBrand:pt.brand||"Inconnu",vehicleModel:pt.model||"Modèle",vehicleYear:pt.year||new Date().getFullYear(),vehicleMotorization:pt.moto||"Standard (50L)"},a=r.fuelType,localStorage.setItem("fillz_profile",JSON.stringify(r)),j(),b.style.opacity="0",setTimeout(()=>{b.style.display="none",St(),tn("radar"),ke()},400)});const Nn=`<div class="modal-overlay" id="vehicle-modal" style="display:none">
    <div class="modal-card">
      <h3><i class="ph-fill ph-car" style="color:var(--accent-purple)"></i> Sélectionner un véhicule</h3>
      <div class="vehicle-steps">
        <div class="vstep-label">1 · Marque</div>
        ${x("md")}
      </div>
      <div style="display:flex;gap:10px;margin-top:16px">
        <button class="btn-primary" id="modal-save-vehicle" disabled>Enregistrer</button>
        <button class="btn-link" id="md-cancel">Annuler</button>
      </div>
    </div>
  </div>`;document.body.insertAdjacentHTML("beforeend",Nn),document.body.insertAdjacentHTML("beforeend",`<div class="modal-overlay" id="refuel-modal" style="display:none">
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
  </div>`);async function Vn(F){try{const G=await fetch("/vehicles.json");window.vehicleDB=await G.json();const q=Object.keys(window.vehicleDB).sort((Q,nt)=>Q.localeCompare(nt));F.innerHTML='<option value="">Choisir une marque...</option>',q.forEach(Q=>F.add(new Option(Q,Q)))}catch{F.innerHTML='<option value="">Erreur base de données locales</option>'}}function rt(F,G,q){const Q=document.getElementById(`${F}-brand`),nt=document.getElementById(`${F}-model`),gt=document.getElementById(`${F}-year`),ie=document.getElementById(`${F}-badge`);Vn(Q),Q.addEventListener("change",()=>{const Dt=Q.value;if(G.brand=Dt,G.model="",G.year="",G.moto="",Dt&&window.vehicleDB&&window.vehicleDB[Dt]){const Nt=window.vehicleDB[Dt].map(Ht=>Ht.model).sort((Ht,kt)=>Ht.localeCompare(kt));nt.innerHTML='<option value="">Choisir un modèle...</option>',Nt.forEach(Ht=>nt.add(new Option(Ht,Ht))),nt.disabled=!1}else nt.innerHTML="<option value=''>Sélectionnez une marque d'abord...</option>",nt.disabled=!0;gt.innerHTML="<option value=''>Sélectionnez un modèle d'abord...</option>",gt.disabled=!0,ie.style.display="none",q&&q(!1)}),nt.addEventListener("change",()=>{const Dt=nt.value;if(G.model=Dt,G.year="",G.moto="",Dt&&window.vehicleDB){let Nt="<option value=''>Choisir l'année (ex: 2018)...</option>";const Ht=new Date().getFullYear();for(let kt=Ht;kt>=1990;kt--)Nt+=`<option value="${kt}">${kt}</option>`;gt.innerHTML=Nt,gt.disabled=!1}else gt.innerHTML="<option value=''>Sélectionnez un modèle d'abord...</option>",gt.disabled=!0;ie.style.display="none",q&&q(!1)}),gt.addEventListener("change",()=>{var Nt;const Dt=gt.value;if(G.year=Dt,G.moto="",Dt&&window.vehicleDB){const Ht=Q.value,kt=nt.value,re=(Nt=window.vehicleDB[Ht])==null?void 0:Nt.find(de=>de.model===kt);if(re){const de=re.tank;G.moto=de>0?`Standard (${de}L)`:"Électrique (0L)",ie.innerHTML=de>0?`<i class="ph-fill ph-gas-pump"></i> Réservoir exact : <strong>${de} L</strong>`:'<i class="ph-fill ph-lightning"></i> <strong>100% Électrique</strong>',ie.style.display="flex",q&&q(!0);return}}ie.style.display="none",q&&q(!1)})}rt("md",pt,F=>{document.getElementById("modal-save-vehicle").disabled=!F}),(ui=document.getElementById("modal-save-vehicle"))==null||ui.addEventListener("click",()=>{r={...r,fuelType:a,vehicleBrand:pt.brand||"Inconnu",vehicleModel:pt.model||"Modèle",vehicleYear:pt.year||new Date().getFullYear(),vehicleMotorization:pt.moto||"Standard (50L)"},localStorage.setItem("fillz_profile",JSON.stringify(r)),document.getElementById("vehicle-modal").style.display="none",St(),j(),l&&ht(),ke()}),document.getElementById("md-cancel").addEventListener("click",()=>{document.getElementById("vehicle-modal").style.display="none"}),(zi=document.getElementById("btn-change-vehicle"))==null||zi.addEventListener("click",()=>{document.getElementById("vehicle-modal").style.display="flex"});function St(){const F=document.getElementById("prof-name");F&&(F.textContent=(r==null?void 0:r.name)||"Utilisateur");const G=document.getElementById("prof-email");G&&(G.textContent=(r==null?void 0:r.email)||"email@exemple.com");const q=document.getElementById("prof-vehicle");q&&(q.textContent=bt());const Q=document.getElementById("prof-moto");Q&&(Q.textContent=(r==null?void 0:r.vehicleMotorization)||"")}(en=document.getElementById("prof-fuel-sel"))==null||en.addEventListener("change",F=>{if(!r)return;const G=F.target.value;r.fuelType=G,a=G,localStorage.setItem("fillz_profile",JSON.stringify(r)),j(),document.getElementById("chip-fuel").innerHTML=`<i class="ph ph-gas-pump"></i> ${a} <i class="ph ph-caret-down"></i>`,l&&ht(),setTimeout(ke,50)});const Gt={dark:{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",opts:{subdomains:"abcd",maxZoom:19}},light:{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",opts:{subdomains:"abcd",maxZoom:19}},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",opts:{maxZoom:19}}};function ne(F){y&&(v=F,localStorage.setItem("fillz_map_theme",F),S&&y.removeLayer(S),S=Oe.tileLayer(Gt[F].url,Gt[F].opts).addTo(y),document.getElementById("leaflet-map").className="theme-"+F)}async function Ot(){if(l){ht();return}const F=document.getElementById("map-loader");F&&F.classList.add("active"),e=await Ga(),e.length||(e=[{id:"f1",name:"Garage Emery Sàrl",address:"Route de Sullens 9, 1303 Penthaz",lat:46.5947,lng:6.5413,prices:{SP95:"1.920",Diesel:"2.230"}},{id:"f2",name:"Station Bavois",address:"Autoroute A1, 1372 Bavois",lat:46.6833,lng:6.5667,prices:{SP95:"1.950",Diesel:"2.100"}}]),F&&F.classList.remove("active"),l=!0,ht()}function Tt(){let F=e.filter(G=>G.prices[a]);return m==="price"?F.sort((G,q)=>parseFloat(G.prices[a])-parseFloat(q.prices[a])):F.sort((G,q)=>G.name.localeCompare(q.name)),F}function ht(){if(!y)return;E&&y.removeLayer(E),E=Oe.markerClusterGroup({maxClusterRadius:60,disableClusteringAtZoom:14,showCoverageOnHover:!1,spiderfyOnMaxZoom:!0,iconCreateFunction(q){const Q=q.getChildCount(),nt=Q>50?"large":Q>20?"medium":"small";return Oe.divIcon({html:`<div class="cluster-icon cluster-${nt}">${Q}</div>`,className:"custom-cluster",iconSize:[44,44]})}});const F=Tt();document.getElementById("chip-count").innerHTML=`<i class="ph ph-map-trifold"></i> ${F.length} stations`,F.forEach(q=>{const Q=Oe.divIcon({className:"custom-marker",html:`<div class="marker-pill"><i class="ph-fill ph-gas-pump"></i> CHF ${q.prices[a]}</div>`,iconSize:[120,36],iconAnchor:[60,18]}),nt=Oe.marker([q.lat,q.lng],{icon:Q});nt.on("click",()=>mn(q)),E.addLayer(nt)}),y.addLayer(E);const G=E.getBounds();G.isValid()&&y.fitBounds(G,{padding:[50,50],maxZoom:12})}function he(){var G;if(y)return;y=Oe.map("leaflet-map",{zoomControl:!1,attributionControl:!1}).setView([46.8,8.2],8),S=Oe.tileLayer(Gt[v].url,Gt[v].opts).addTo(y),document.getElementById("leaflet-map").classList.add("theme-"+v);const F=Oe.divIcon({className:"user-marker",html:'<div class="user-dot"></div>',iconSize:[24,24],iconAnchor:[12,12]});navigator.geolocation&&navigator.geolocation.getCurrentPosition(q=>{B=q.coords.latitude,V=q.coords.longitude,window.userMarker=Oe.marker([B,V],{icon:F}).addTo(y)}),Ot(),(G=document.getElementById("btn-gps-locate"))==null||G.addEventListener("click",()=>{if(!y)return;const Q=document.getElementById("btn-gps-locate").querySelector("i");Q.className="ph-fill ph-spinner-gap spin",navigator.geolocation&&navigator.geolocation.getCurrentPosition(nt=>{B=nt.coords.latitude,V=nt.coords.longitude,y.flyTo([B,V],14,{animate:!0,duration:1.2}),window.userMarker?window.userMarker.setLatLng([B,V]):window.userMarker=Oe.marker([B,V],{icon:F}).addTo(y),setTimeout(()=>Q.className="ph ph-crosshair",1e3)},()=>{Q.className="ph ph-crosshair"},{enableHighAccuracy:!0})})}function Ee(F){tn("map"),setTimeout(()=>{if(!y){he(),setTimeout(()=>Ee(F),600);return}y.invalidateSize(),y.flyTo([F.lat,F.lng],16,{animate:!0,duration:1.2}),setTimeout(()=>mn(F),800)},150)}let Ye=null;const Je=document.getElementById("bs-fav"),ai=document.getElementById("bs-title"),Xe=document.getElementById("bs-address"),pn=document.getElementById("bs-distance");document.getElementById("bs-open");const Vi=document.getElementById("bs-prices");Je==null||Je.addEventListener("click",()=>{if(!Ye)return;const F=o.includes(Ye.id),G=Je.querySelector("i");F?(o=o.filter(q=>q!==Ye.id),G.classList.replace("ph-fill","ph"),G.style.color=""):(o.push(Ye.id),G.classList.replace("ph","ph-fill"),G.style.color="#ef4444"),localStorage.setItem("fillz_favs",JSON.stringify(o)),j()});const mr=document.getElementById("station-bottom-sheet");function mn(F){Ye=F,ai&&(ai.textContent=F.name),Xe&&(Xe.textContent=F.address),pn&&(pn.textContent=X(B,V,F.lat,F.lng).toFixed(1)+" km");let G="";const q=et();Object.entries(F.prices).forEach(([gt,ie])=>{const Dt=parseFloat(ie);G+=`<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
          <span>${gt}</span>
          <div style="text-align:right">
            <strong>${Dt.toFixed(3)} CHF</strong>
            <div style="font-size:11px; color:var(--text-muted)">Plein : ${(Dt*q).toFixed(1)} CHF</div>
          </div>
        </div>`}),Vi&&(Vi.innerHTML=G||'<div style="padding:10px 0; color:var(--text-muted)">Aucun prix connu</div>');const Q=o.includes(F.id),nt=Je.querySelector("i");Q?(nt.classList.replace("ph","ph-fill"),nt.style.color="#ef4444"):(nt.classList.replace("ph-fill","ph"),nt.style.color=""),mr.classList.add("active")}async function ke(){const F=document.getElementById("radar-results"),G=document.getElementById("btn-radar-scan");G.disabled=!0,G.innerHTML='<div class="spinner-small"></div> Analyse...',e.length||(e=await Ga());const q=Mt(),Q=et(),nt=sm[q]||7.5,gt=document.getElementById("radar-range"),ie=gt?parseInt(gt.value,10):40,Nt=e.filter(kt=>kt.prices[q]).map(kt=>{const re=X(B,V,kt.lat,kt.lng),de=parseFloat(kt.prices[q]),hi=Q>0?de*Q:0,Zt=Q>0?re*2*nt/100*de:0;return{...kt,dist:re,pricePerL:de,fullCost:hi,tripCost:Zt,total:hi+Zt}}).filter(kt=>kt.dist<=ie).sort((kt,re)=>kt.total-re.total).slice(0,5);if(!Nt.length){F.innerHTML='<p style="text-align:center;color:var(--text-muted);padding:30px">Aucune station trouvée.</p>',G.disabled=!1,G.innerHTML='<i class="ph-bold ph-brain"></i> Analyser';return}let Ht='<div class="radar-cards">';Nt.forEach((kt,re)=>{Ht+=`<div class="radar-result-card" data-id="${kt.id}">
        <div class="rrc-left">
          <span class="rrc-medal">${re+1}</span>
          <div><div class="rrc-name">${kt.name}</div></div>
        </div>
        <div class="rrc-right"><span class="rrc-price">CHF ${kt.pricePerL.toFixed(3)}</span></div>
      </div>`}),Ht+="</div>",F.innerHTML=Ht,G.disabled=!1,G.innerHTML='<i class="ph-bold ph-brain"></i> Relancer'}document.getElementById("btn-radar-scan").addEventListener("click",ke);const Ve=document.getElementById("fuel-dropdown"),zt=document.getElementById("sort-dropdown"),Ut=document.getElementById("theme-dropdown");document.getElementById("chip-fuel").addEventListener("click",F=>{F.stopPropagation(),Ve.classList.toggle("visible")}),document.getElementById("chip-sort").addEventListener("click",F=>{F.stopPropagation(),zt.classList.toggle("visible")}),document.getElementById("btn-theme-toggle").addEventListener("click",F=>{F.stopPropagation(),Ut.classList.toggle("visible")}),Ve.querySelectorAll(".dropdown-item").forEach(F=>F.addEventListener("click",()=>{a=F.dataset.fuel,document.getElementById("chip-fuel").innerHTML=`<i class="ph ph-gas-pump"></i> ${a} <i class="ph ph-caret-down"></i>`,Ve.classList.remove("visible"),ht()})),zt.querySelectorAll(".dropdown-item").forEach(F=>F.addEventListener("click",()=>{m=F.dataset.sort,zt.classList.remove("visible"),ht()})),Ut.querySelectorAll(".theme-opt").forEach(F=>F.addEventListener("click",()=>{ne(F.dataset.theme),Ut.classList.remove("visible")})),document.addEventListener("click",()=>{Ve.classList.remove("visible"),zt.classList.remove("visible"),Ut.classList.remove("visible")}),document.getElementById("search-field").addEventListener("input",F=>{const G=F.target.value.toLowerCase();if(!E)return;E.clearLayers(),Tt().filter(Q=>Q.name.toLowerCase().includes(G)||Q.address.toLowerCase().includes(G)).forEach(Q=>{const nt=Oe.divIcon({className:"custom-marker",html:`<div class="marker-pill"><i class="ph-fill ph-gas-pump"></i> CHF ${Q.prices[a]}</div>`,iconSize:[120,36],iconAnchor:[60,18]}),gt=Oe.marker([Q.lat,Q.lng],{icon:nt});gt.on("click",()=>mn(Q)),E.addLayer(gt)});const q=document.getElementById("chip-count");q&&(q.innerHTML=`<i class="ph ph-map-trifold"></i> ${E.getLayers().length} stations`)}),(gn=document.getElementById("view-map"))==null||gn.addEventListener("click",F=>{var G;F.target.closest(".custom-marker,.bottom-sheet,.map-filters,.map-top-bar,.filter-dropdown")||(G=document.getElementById("station-bottom-sheet"))==null||G.classList.remove("active")}),(zn=document.getElementById("btn-reset"))==null||zn.addEventListener("click",()=>{localStorage.clear(),f?Zg(Bo).then(()=>{location.reload()}):location.reload()});const _n={radar:document.getElementById("view-radar"),map:document.getElementById("view-map"),route:document.getElementById("view-route"),profile:document.getElementById("view-profile")};function tn(F){t.forEach(G=>G.classList.toggle("active",G.dataset.view===F)),Object.entries(_n).forEach(([G,q])=>{G===F?(q.classList.add("active"),q.style.display="flex",F==="map"&&setTimeout(()=>{he(),y==null||y.invalidateSize()},100)):(q.classList.remove("active"),q.style.display="none")})}t.forEach(F=>F.addEventListener("click",()=>tn(F.dataset.view))),h||tn("radar");function li(){const F=document.getElementById("refuels-list");if(!F)return;const G=JSON.parse(localStorage.getItem("fillz_refuels")||"[]");if(!G.length){F.innerHTML='<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:10px;"><i class="ph-bold ph-gas-pump" style="font-size:24px;display:block;margin-bottom:8px;opacity:0.5"></i>Aucun plein enregistré.</p>';return}let q="";G.sort((Q,nt)=>nt.km-Q.km).forEach((Q,nt)=>{let gt="";if(nt<G.length-1){const Dt=G[nt+1],Nt=Q.km-Dt.km;Nt>0&&(gt=`<span style="font-size:12px;color:var(--accent-purple);font-weight:700;"><i class="ph-fill ph-trend-down"></i> ${(Q.liters/Nt*100).toFixed(1)} L/100</span>`)}else gt='<span style="font-size:11px;color:var(--text-muted);">Plein Initial</span>';const ie=new Date(Q.date).toLocaleDateString("fr-CH");q+=`<div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="display:block;font-size:14px;color:white;">${Q.liters} L — CHF ${Q.price.toFixed(2)}</strong>
          <span style="color:var(--text-muted);font-size:11px;">${ie} · ${Q.km} km</span>
        </div>
        ${gt}
      </div>`}),F.innerHTML=q}const Fi=document.getElementById("refuel-modal");(Be=document.getElementById("btn-add-refuel"))==null||Be.addEventListener("click",()=>Fi.style.display="flex"),(nn=document.getElementById("rf-cancel"))==null||nn.addEventListener("click",()=>Fi.style.display="none"),(Un=document.getElementById("rf-save"))==null||Un.addEventListener("click",()=>{const F=parseFloat(document.getElementById("rf-liters").value),G=parseFloat(document.getElementById("rf-price").value),q=parseInt(document.getElementById("rf-km").value,10);if(!F||!G||!q)return alert("Veuillez remplir tous les champs");const Q=JSON.parse(localStorage.getItem("fillz_refuels")||"[]");Q.push({date:Date.now(),liters:F,price:G,km:q}),localStorage.setItem("fillz_refuels",JSON.stringify(Q)),j(),document.getElementById("rf-liters").value="",document.getElementById("rf-price").value="",document.getElementById("rf-km").value="",Fi.style.display="none",li()}),li();let Fe=null;async function Fn(F){const q=await(await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(F)}&format=json&limit=1`)).json();return q.length?q[0]:null}(Ui=document.getElementById("btn-calc-route"))==null||Ui.addEventListener("click",async()=>{const F=document.getElementById("route-start").value,G=document.getElementById("route-end").value,q=document.getElementById("btn-calc-route"),Q=document.getElementById("route-results");if(!F||!G)return alert("Veuillez entrer un départ et une arrivée.");q.disabled=!0,q.innerHTML='<div class="spinner-small"></div> Recherche...',Q.innerHTML='<p style="text-align:center;color:var(--text-muted);padding:20px;">Géocodage des adresses...</p>';try{const nt=await Fn(F),gt=await Fn(G);if(!nt||!gt)throw new Error("Cité/Code Postal introuvable. Soyez plus précis.");Q.innerHTML='<p style="text-align:center;color:var(--text-muted);padding:20px;">Calcul du trajet (OSRM)...</p>';const Dt=await(await fetch(`https://router.project-osrm.org/route/v1/driving/${nt.lon},${nt.lat};${gt.lon},${gt.lat}?overview=simplified&geometries=geojson`)).json();if(Dt.code!=="Ok")throw new Error("Trajet impossible.");const Nt=Dt.routes[0].geometry.coordinates,Ht=Dt.routes[0].distance/1e3;y||he(),Fe&&y.removeLayer(Fe);const kt=Nt.map(W=>[W[1],W[0]]);Fe=Oe.polyline(kt,{color:"var(--accent-purple)",weight:5,opacity:.8,dashArray:"10, 10"}).addTo(y),y.fitBounds(Fe.getBounds(),{padding:[40,40]}),Q.innerHTML=`<p style="text-align:center;color:var(--text-muted);padding:20px;">Analyse de ${e.length} stations sur ${Ht.toFixed(0)}km...</p>`,e.length||(e=await Ga());const re=Mt(),de=4,Zt=e.filter(W=>W.prices[re]).map(W=>{let ae=1/0;for(let $t=0;$t<Nt.length;$t+=3){const yn=X(W.lat,W.lng,Nt[$t][1],Nt[$t][0]);yn<ae&&(ae=yn)}return{...W,devDist:ae,pricePerL:parseFloat(W.prices[re])}}).filter(W=>W.devDist<=de).sort((W,ae)=>W.pricePerL-ae.pricePerL).slice(0,5);if(!Zt.length)Q.innerHTML='<p style="text-align:center;color:var(--text-muted);padding:20px;">Aucune station trouvée le long de ce trajet sans faire un énorme détour.</p>';else{let W=`<div class="radar-cards-label"><i class="ph-fill ph-check-circle" style="color:var(--accent-green)"></i> ${Zt.length} top stations sur votre trajet</div><div class="radar-cards">`;Zt.forEach((ae,$t)=>{W+=`<div class="radar-result-card" data-id="${ae.id}" style="animation-delay:${$t*.07}s">
            <div class="rrc-left">
              <span class="rrc-medal" style="font-size:16px;">${$t+1}</span>
              <div>
                <div class="rrc-name">${ae.name}</div>
                <div class="rrc-tags">
                  <span class="rrc-tag"><i class="ph-bold ph-arrows-split"></i> Détour ${ae.devDist.toFixed(1)} km</span>
                </div>
              </div>
            </div>
            <div class="rrc-right">
              <span class="rrc-price">CHF ${ae.pricePerL.toFixed(3)}</span>
              <button class="rrc-map-btn"><i class="ph-bold ph-map-pin"></i></button>
            </div>
          </div>`}),W+="</div>",Q.innerHTML=W,Q.querySelectorAll(".radar-result-card").forEach(ae=>{const $t=Zt.find(yn=>yn.id===ae.dataset.id);ae.addEventListener("click",()=>{tn("map"),setTimeout(()=>{Ee($t)},300)})})}}catch(nt){Q.innerHTML=`<p style="text-align:center;color:#ef4444;padding:20px;">${nt.message}</p>`}q.disabled=!1,q.innerHTML=`<i class="ph-bold ph-route"></i> Calculer l'itinéraire IA`})});
