import React, { Component } from 'react'
import { UIManager, Platform } from 'react-native';
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import { useScreens } from "react-native-screens";
import stores from './store'
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import RootView from "./containers/RootView";
import { withAppInit } from "./helper/hoc";

Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental(true);
useScreens()

@withAppInit @observer
export default class App extends Component<any> {

  render() {
    const theme = stores.app.appTheme
    return (
      <StoreProvider {...stores}>
        <PaperProvider theme={theme}>
          <AppNavigatorCmp />
          <RootView/>
        </PaperProvider>
      </StoreProvider>
    )
  }
}
