import React from 'react'
import { NetInfo } from "react-native";
import * as RNLocalize from "react-native-localize";
import stores from '../../store'
import { setI18nConfig } from "../../i18n";
import { app } from "../../store/AppStore";
import { checkUpdate } from "../utils/UpdateApp";
import SentryUtil from "../utils/SentryUtil";

export default function withAppInit(WrappedComponent: any) {
  return class extends React.Component {

    async componentDidMount() {
      // 1.网络连接
      this.handleConnectionChange()
      // 2.国际化
      setI18nConfig()
      // 3.检查更新
      checkUpdate()
      // 4.sentry
      SentryUtil.init()

      NetInfo.addEventListener("connectionChange", this.handleConnectionChange)
      RNLocalize.addEventListener("change", this.handleLocalizationChange);
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleConnectionChange
      )
      RNLocalize.removeEventListener("change", this.handleLocalizationChange)
    }

    // 处理网络连接发生改变
    handleConnectionChange = async (_connectionInfo?: any) => {
      const result = await NetInfo.isConnected.fetch()
      stores.app.setNetworkConnected(result)
    }

    // 处理语言发生改变
    handleLocalizationChange = () => {
      const languageTag = setI18nConfig();
      app.setLanguageTag(languageTag)
      this.forceUpdate();
    }

    render() {
      return <WrappedComponent/>
    }
  }
}
