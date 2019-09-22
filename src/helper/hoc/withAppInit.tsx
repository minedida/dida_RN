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
      setI18nConfig()
      checkUpdate()
      SentryUtil.init()
      if(__DEV__) {
        import('../enhance/ReactotronConfig').then(() => console.log('Reactotron Configured'))
      }

      // NetInfo.addEventListener("connectionChange", this.handleConnectionChange)
      RNLocalize.addEventListener("change", this.handleLocalizationChange);
    }


    componentWillUnmount() {
      RNLocalize.removeEventListener("change", this.handleLocalizationChange)
    }

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
