import SwiftUI
import WebKit
import WidgetKit

class WebViewModel: ObservableObject {
    @Published var isLoading = true
    @Published var canGoBack = false
    weak var webView: WKWebView?
    var pendingDeepLink: String?

    func goBack()  { webView?.goBack() }
    func reload()  { webView?.reload() }
    func navigate(to urlString: String) {
        guard let url = URL(string: urlString) else { return }
        webView?.load(URLRequest(url: url))
    }
    func openDeepLink(stationId: String) {
        let target = "https://optitank.online?app=1&view=map&station=\(stationId)"
        if isLoading || webView == nil {
            pendingDeepLink = target
        } else {
            navigate(to: target)
        }
    }
}

struct WebView: UIViewRepresentable {
    @ObservedObject var model: WebViewModel
    let url: URL

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
                if let pending = self.model.pendingDeepLink {
                    self.model.pendingDeepLink = nil
                    self.model.navigate(to: pending)
                }
            }
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
            case "updateWidget":
                if let payload = body["payload"] as? [String: Any],
                   let json = try? JSONSerialization.data(withJSONObject: payload),
                   let jsonStr = String(data: json, encoding: .utf8),
                   let defaults = UserDefaults(suiteName: "group.online.optitank.app") {
                    defaults.set(jsonStr, forKey: "widget_best_price")
                    WidgetCenter.shared.reloadAllTimelines()
                }
            case "saveApnsToken":
                break
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

        let bootstrap = WKUserScript(
            source: """
                Object.defineProperty(navigator, 'standalone', { get: () => true, configurable: true });
                window.isOptiTankApp = true;
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

        let refresh = UIRefreshControl()
        refresh.tintColor = UIColor(red: 0.545, green: 0.361, blue: 0.965, alpha: 1)
        refresh.addTarget(context.coordinator, action: #selector(Coordinator.handleRefresh(_:)), for: .valueChanged)
        wv.scrollView.addSubview(refresh)

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
