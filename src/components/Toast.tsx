import SimpleToast from "react-native-simple-toast";

class Toast {
  static TOP: number = SimpleToast.TOP
  static BOTTOM: number = SimpleToast.BOTTOM
  static CENTER: number = SimpleToast.CENTER
  static SHORT: number = SimpleToast.SHORT
  static LONG: number = SimpleToast.LONG

  static show(message: string, duration?: number) {
    SimpleToast.show(message, duration)
  }
  static showWithGravity
  (message: string, duration: number, gravity: number )
  {
    SimpleToast.showWithGravity(message, duration, gravity)
  }
}

export default Toast
