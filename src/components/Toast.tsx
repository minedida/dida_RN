import SimpleToast from "react-native-simple-toast";

// 本项目中，致力于将Toast改造为声明式调用。
// 本项目中，力求使用Native质感的Toast，若后期发现simple-toast能力不足，可以切换到native-toast
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
