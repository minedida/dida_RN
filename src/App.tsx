import React, { Component } from 'react'
import {SafeAreaView} from 'react-navigation'
import { observer, Provider as StoreProvider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import stores from './store'
import AppNavigatorCmp from "./navigation/AppNavigatorCmp";
import RootView from "./containers/RootView";
import { withAppInit } from "./helper/hoc";

@withAppInit @observer
export default class App extends Component<any> {
  render() {
    const theme = stores.app.appTheme
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
        <StoreProvider {...stores}>
          <PaperProvider theme={theme}>
            <AppNavigatorCmp/>
            <RootView/>
          </PaperProvider>
        </StoreProvider>
      </SafeAreaView>
    )
  }
}
