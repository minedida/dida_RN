// import React from 'react';
import {
  Dimensions, Platform
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import AppTabBar from "./AppTabBar";
import DrawerPanel from "../containers/drawer/DrawerPanel";

export default createDrawerNavigator(
  {
    AppTabBar
  },
  {
    initialRouteName: 'AppTabBar',
    contentComponent: DrawerPanel,
    drawerWidth: Dimensions.get('window').width * 0.86,
    drawerType: Platform.OS === 'android' ? 'front' : 'slide',
    unmountInactiveRoutes: false // 设置false才能有缓存
  }
);
