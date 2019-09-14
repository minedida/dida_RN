import React from 'react'
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { observer } from "mobx-react";
import { BottomTabBar } from 'react-navigation-tabs';
import { app } from "../store/AppStore";

const tabBarOptions = {
  safeAreaInset: { bottom: 'always', top: 'never' },
  activeTintColor: '#6680d7',
  inactiveTintColor: '#a3a3a3',
  tabStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  showLabel: false,
  showIcon: true,
  style: {
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#fff',
        // 去除bottom-tab的那条线，替换成阴影
        borderTopWidth: 0,
        elevation: 8,
      }
    }),
  },
  lazy: true,
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',

} as any;


@observer
class CustomBottomTabBar extends React.Component<any>{
  calculateNavigation(navigation) {
    // @ts-ignore
    const { routes } = navigation.state;

    // return navigation;
    return {
      state: {
        // index: 0,
        ...navigation.state,
        routes: app.tabRoutes
      }
    }
  }
  render() {
    console.log('CustomBottomTabBar-this.props', this.props)
    const style = {
      activeTintColor: app.appTheme.colors.primary
    };
    const customNavigation = this.calculateNavigation(this.props.navigation)
    return <BottomTabBar {...this.props} navigation={customNavigation} {...style} />;
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  app.tabMap,
  {
    tabBarOptions,
    initialRouteName: 'TodoTab',
    tabBarComponent: CustomBottomTabBar
  },
);

export default bottomTabNavigator;

