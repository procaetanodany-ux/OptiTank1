import SwiftUI

struct ContentView: View {
    @StateObject private var model = WebViewModel()
    private let appURL = URL(string: "https://optitank.online?app=1")!

    var body: some View {
        ZStack(alignment: .bottom) {
            // Dark background while loading
            Color(red: 0.059, green: 0.059, blue: 0.071).ignoresSafeArea()

            WebView(model: model, url: appURL)
                .ignoresSafeArea(edges: .bottom)

            // Loading splash — shown only on first load
            if model.isLoading {
                LoadingSplash()
                    .transition(.opacity)
            }
        }
        .animation(.easeOut(duration: 0.3), value: model.isLoading)
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
                NotificationManager.shared.requestPermission()
            }
        }
        .onOpenURL { url in
            guard url.scheme == "optitank" else { return }
            if url.host == "station",
               let comps = URLComponents(url: url, resolvingAgainstBaseURL: false),
               let stationId = comps.queryItems?.first(where: { $0.name == "id" })?.value,
               !stationId.isEmpty {
                model.openDeepLink(stationId: stationId)
            }
        }
    }
}

// MARK: - Loading splash screen
struct LoadingSplash: View {
    @State private var pulse = false

    var body: some View {
        ZStack {
            Color(red: 0.059, green: 0.059, blue: 0.071).ignoresSafeArea()

            VStack(spacing: 20) {
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [Color(hex: "8b5cf6"), Color(hex: "6366f1")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 72, height: 72)
                        .scaleEffect(pulse ? 1.05 : 1.0)
                        .animation(.easeInOut(duration: 1.2).repeatForever(autoreverses: true), value: pulse)

                    Text("⛽")
                        .font(.system(size: 32))
                }
                .onAppear { pulse = true }

                Text("OptiTank")
                    .font(.system(size: 22, weight: .bold, design: .rounded))
                    .foregroundColor(.white)

                ProgressView()
                    .progressViewStyle(.circular)
                    .tint(Color(hex: "8b5cf6"))
                    .scaleEffect(1.1)
            }
        }
    }
}

// MARK: - Color from hex string
extension Color {
    init(hex: String) {
        var int: UInt64 = 0
        Scanner(string: hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)).scanHexInt64(&int)
        self.init(
            red:   Double((int >> 16) & 0xFF) / 255,
            green: Double((int >>  8) & 0xFF) / 255,
            blue:  Double( int        & 0xFF) / 255
        )
    }
}
