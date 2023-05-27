import { PushNotifications } from "@capacitor/push-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { deviceTokenUpdate } from "./deviceTokenService";

export const registerPushNotification = () => {
  //   const navigate = useNavigate();
  PushNotifications.checkPermissions().then((res) => {
    if (res.receive !== "granted") {
      PushNotifications.requestPermissions().then((res) => {
        if (res.receive === "denied") {
          console.log("Push Notification permission denied");
        } else {
          console.log("Push Notification permission granted");
          register();
        }
      });
    } else {
      register();
    }
  });
};
const register = () => {
  console.log("Initializing HomePage");
  // Register with Apple / Google to receive push via APNS/FCM
  PushNotifications.register();
  // On success, we should be able to receive notifications
  PushNotifications.addListener("registration", (token) => {
    // console.log("token", token.value);
    deviceTokenUpdate(token.value);
  });

  // Some issue with our setup and push will not work
  PushNotifications.addListener("registrationError", (error) => {
    alert("Error on registration: " + JSON.stringify(error));
  });

  // Show us the notification payload if the app is open on our device
  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    console.log("pushNotificationReceived", notification);
    const randomId = Math.floor(Math.random() * 10000) + 1;
    LocalNotifications.schedule({
      notifications: [
        {
          title: notification.title,
          body: notification.body,
          id: randomId,
          smallIcon: "ic_launcher_rounded",
          iconColor: "#ff0000",
        },
      ],
    });
    // setnotifications(notifications => [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }])
  });

  // Method called when tapping on a notification
  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification) => {
      console.log("pushNotificationActionPerformed", notification);
      //   navigate("./notification");
      // setnotifications(notifications => [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }])
    }
  );
};
