import React from 'react'
import { BackHandler, Platform } from "react-native";
import { getCurrentSwitchName } from "../../navigation";
import AppStack from "../../navigation/AppStack";
import AuthStack from "../../navigation/AuthStack";
import stores from '../../store'
import { Toast } from "../../components";

export default function withBackHandler(WrappedComponent: any, params: 'Auth' | 'App') {
  return class extends React.Component {
    // @ts-ignore
    static router = params === 'Auth' ? AuthStack.router : AppStack.router;

    lastBackPressed: number = 0;

    constructor(props) {
      super(props)
      this.onBackAndroid = this.onBackAndroid.bind(this)
    }

    componentDidMount() {
      if (Platform.OS === 'android') {
        // BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }

    componentWillUnmount() {
      if (Platform.OS === 'android') {
        // BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }

    /**
     * false -> 交给系统处理，自己不处理。
     * true -> 由自己处理，系统不要处理
     */
    onBackAndroid(): boolean {
      const currentSwitch = getCurrentSwitchName();

      if ('Auth' === params && 'Auth' !== currentSwitch) {
        // pop view
        return false;
      }

      if ('App' === params) {
        if ('AppTabBar' !== currentSwitch) {
          return false
        }
        // 处理抽屉的返回
        if (stores.drawer.showDrawer) {
          stores.drawer.toggleMenu()
          return true
        }
        // 处理fabinput
        const fabInputWithBackButtonResult = this.handleFabInputWithBackButton()
        if (fabInputWithBackButtonResult) {
          return true
        }
      }

      if (this.lastBackPressed && this.lastBackPressed + 1500 >= Date.now()) {
        BackHandler.exitApp();
        return false;
      }

      this.lastBackPressed = Date.now();
      Toast.show('再次点击退出程序')

      return true;
    }

    // 处理fabinput
    handleFabInputWithBackButton(): boolean {
      if (stores.app.currentScreen === 'TodoTab' || stores.app.currentScreen === 'AppTabBar') {
        if (stores.app.fabOpen) {
          // 恢复fab状态
          stores.app
          .setFabOpen(false)
          .setFabVisible(true)
          return true
        }
      }
      return false
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
