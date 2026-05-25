import SwiftUI
import WebKit

// Observable state shared between WebView and ContentView
class WebViewModel: ObservableObject {
    @Published var isLoading = true
    @Published var canGoBack = false
    weak var webView: WKWebView?

    func goBack()  { webView?.goBack() }
    func reload()  { webView?.reload() }
    func navigate(to urlString: String) {
        guard let url = URL(string: urlString) else { return }
        webView?.load(URLRequest(url: url))
    }
}

struct WebView: UIViewRepresentable {
    @ObservedObject var model: WebViewModel
    let url: URL

    // MARK: Coordinator — handles WKWebView delegate callbacks
    class Coordinator: NSObject, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
        let model: WebViewModel

        init(_ model: WebViewModel) { self.model = model }

        func webView(_ webView: WKWebView, didStartProvisionalNavigation _: WKNavigation!) {
            DispatchQueue.main.async {
                self.model.isLoading = true
                self.model.canGoBack = webView.canGoBack
            }
        }

        func webView(_ webView: WKWebView, didFinish _: WKNavigation!) {
            DispatchQueue.main.async {
                self.model.isLoading = false
                self.model.canGoBack = webView.canGoBack
            }
            // Signal the web app that it is running inside the native iOS app
            webView.evaluateJavaScript(
                "window.isOptiTankApp = true; window.dispatchEvent(new Event('optitank-native-ready'));",
                completionHandler: nil
            )
        }

        func webView(_ webView: WKWebView, didFail _: WKNavigation!, withError _: Error) {
            DispatchQueue.main.async { self.model.isLoading = false }
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation _: WKNavigation!, withError _: Error) {
            DispatchQueue.main.async { self.model.isLoading = false }
        }

        // Allow internal links, open external ones in Safari
        func webView(
            _ webView: WKWebView,
            decidePolicyFor action: WKNavigationAction,
            decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
        ) {
            guard let url = action.request.url else { decisionHandler(.allow); return }
            let internalHosts = ["optitank.online", "optitank-c7709.web.app", "optitank-c7709.firebaseapp.com"]
            if internalHosts.contains(where: { url.host?.contains($0) == true }) || url.scheme == "about" {
                decisionHandler(.allow)
            } else if url.scheme == "https" || url.scheme == "http" {
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        }

        // JS → Swift bridge: window.webkit.messageHandlers.optitank.postMessage({type:"...", ...})
        func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
            guard let body = message.body as? [String: Any] else { return }
            switch body["type"] as? String {
            case "requestNotifications":
                NotificationManager.shared.requestPermission()
            case "getAPNSToken":
                let token = UserDefaults.standard.string(forKey: "apns_device_token") ?? ""
                model.webView?.evaluateJavaScript("window.__apnsToken = '\(token)'; window.dispatchEvent(new CustomEvent('apns-token', {detail: '\(token)'}));", completionHandler: nil)
            case "navigate":
                if let urlString = body["url"] as? String { model.navigate(to: urlString) }
            default:
                break
            }
        }

        @objc func handleRefresh(_ sender: UIRefreshControl) {
            model.webView?.reload()
            DispatchQueue.main.asyncAfter(deadline: .now() + 1) { sender.endRefreshing() }
        }

        @objc func handleNavigate(_ notification: Notification) {
            if let urlString = notification.object as? String { model.navigate(to: urlString) }
        }
    }

    func makeCoordinator() -> Coordinator { Coordinator(model) }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        // Inject: navigator.standalone = true  (so the PWA gate lets the app through)
        let bootstrap = WKUserScript(
            source: """
                Object.defineProperty(navigator, 'standalone', { get: () => true, configurable: true });
                window.isOptiTankApp = true;
                // Bridge helper callable from JS: OptiTankBridge.post({type:'requestNotifications'})
                window.OptiTankBridge = { post: (m) => window.webkit.messageHandlers.optitank.postMessage(m) };
            """,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: false
        )
        config.userContentController.addUserScript(bootstrap)
        config.userContentController.add(context.coordinator, name: "optitank")

        let wv = WKWebView(frame: .zero, configuration: config)
        wv.navigationDelegate = context.coordinator
        wv.uiDelegate = context.coordinator
        wv.allowsBackForwardNavigationGestures = true
        wv.scrollView.contentInsetAdjustmentBehavior = .never
        wv.isOpaque = false
        wv.backgroundColor = .clear

        // Pull-to-refresh
        let refresh = UIRefreshControl()
        refresh.tintColor = UIColor(red: 0.545, green: 0.361, blue: 0.965, alpha: 1) // purple
        refresh.addTarget(context.coordinator, action: #selector(Coordinator.handleRefresh(_:)), for: .valueChanged)
        wv.scrollView.addSubview(refresh)

        // Listen for deep-link navigation from notification taps
        NotificationCenter.default.addObserver(
            context.coordinator,
            selector: #selector(Coordinator.handleNavigate(_:)),
            name: .navigateToURL,
            object: nil
        )

        DispatchQueue.main.async { self.model.webView = wv }
        wv.load(URLRequest(url: url))
        return wv
    }

    func updateUIView(_ webView: WKWebView, context: Context) {}
}
