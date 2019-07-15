import React from 'react'
import { Platform } from "react-native";
import { NavigationPops } from "../navigation/utils";
import SplashScreen from 'react-native-splash-screen'
import initPersist from "../store/persist-store";

type Props = {
  navigation: NavigationPops
}

function Splash(props: Props) {
  function goNext(routeName: string) {
    props.navigation.navigate(routeName)
  }

  React.useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
    let timmer;
    initPersist().then(() => {
      timmer = setTimeout(() => {
        goNext('App')
      }, 200)
    })
    return () => {
      timmer && clearTimeout(timmer)
    }
  })
  return null
}

export default Splash
