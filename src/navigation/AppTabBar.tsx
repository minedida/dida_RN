import React from 'react'
import { createBottomTabNavigator, NavigationContainer } from 'react-navigation';
import { AppStore } from '../store/AppStore'
import { inject, observer } from "mobx-react";
import { onNavigationStateChange } from "./utils";

const tabBarOptions = {
  safeAreaInset: { bottom: 'never', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true
} as any

@inject('app')
@observer
class AppTabBarNav extends React.Component<{ app: AppStore }> {

  render() {
    const Tab: NavigationContainer = createBottomTabNavigator(
      this.props.app.tabMap,
      {
        tabBarOptions: {
          ...tabBarOptions,
          // dynamic change tab activeTintColor
          activeTintColor: this.props.app.appTheme.colors.primary
        },
        // initialRouteName: 'SettingTab',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'none',
      },
    );
    return <Tab onNavigationStateChange={onNavigationStateChange}/>
  }
}
export default AppTabBarNav
