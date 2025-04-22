import Toast from "react-native-root-toast";

// đanng lỗi ReferenceError: Property '_stopObservingProgress' doesn't exist

export default function ToastNotification(message: string) {
  return Toast.show(message, {
    position: 60,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: "#212b23",
    opacity: 0.8,
  });
}
