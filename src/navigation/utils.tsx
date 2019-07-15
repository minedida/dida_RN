import React, { Component } from 'react'
import { NavigationParams, NavigationRoute, NavigationScreenProp } from "react-navigation";
import stores from '../store'

/**
 * Make the navigation state params "this.props.navigation.state.params.<x>" become a component props
 * @param ScreenComponent Page component
 */
const paramsToProps = (ScreenComponent: any) =>
  class extends Component<any> {
    static navigationOptions = ScreenComponent.navigationOptions

    render() {
      const { params } = this.props.navigation.state;
      return <ScreenComponent {...this.props} {...params} />
    }
  }


type NavigationPops =
  NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>


// gets the current screen from navigation state
// @ts-ignore
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

function onNavigationStateChange(prevState: any, currentState: any) {
  let currentScreen = getActiveRouteName(currentState);
  const prevScreen = getActiveRouteName(prevState);
  if (prevScreen !== currentScreen) {
    if (prevScreen === 'Splash' && currentScreen === 'AppTabBar') {
      currentScreen = 'TodoTab'
    }
    stores.app.setCurrentScreen(currentScreen);
  }
}


export {
  paramsToProps,
  NavigationPops,
  onNavigationStateChange,
  getActiveRouteName
}
