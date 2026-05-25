import UIKit
import UserNotifications
import FirebaseCore
import FirebaseMessaging

class AppDelegate: NSObject, UIApplicationDelegate, MessagingDelegate {

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
    ) -> Bool {
        FirebaseApp.configure()
        UNUserNotificationCenter.current().delegate = NotificationManager.shared
        Messaging.messaging().delegate = self
        return true
    }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        print("APNs registration failed: \(error.localizedDescription)")
    }

    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        guard let token = fcmToken else { return }
        print("FCM token: \(token)")
        UserDefaults.standard.set(token, forKey: "fcm_device_token")
        NotificationCenter.default.post(name: .fcmTokenReceived, object: token)
    }

    func application(
        _ application: UIApplication,
        didReceiveRemoteNotification userInfo: [AnyHashable: Any],
        fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void
    ) {
        completionHandler(.newData)
    }
}

extension Notification.Name {
    static let fcmTokenReceived = Notification.Name("fcmTokenReceived")
    static let navigateToURL    = Notification.Name("navigateToURL")
}
