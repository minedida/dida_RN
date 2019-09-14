import { createStackNavigator } from 'react-navigation-stack';
import AddTodo from "../containers/drawer/AddTodo";
import InboxTodo from "../containers/drawer/InboxTodo";
import ManageTodo from "../containers/drawer/ManageTodo";
import TodayTodo from "../containers/drawer/TodayTodo";
import Auth from "../containers/auth/Auth";
import MailAuth from "../containers/auth/MailAuth";
import SettingTab from "../containers/setting/SettingTab";
import Webview from "../containers/webview/Webview";
import { paramsToProps } from "./utils";
import Dashboard from "../containers/setting/Dashboard";
import SoundAndNotify from "../containers/setting/SoundAndNotify";
import AddTaskInstantly from "../containers/setting/AddTaskInstantly";
import IntelligentRecognition from "../containers/setting/IntelligentRecognition";
import MoreSetting from "../containers/setting/MoreSetting";
import ThemeSetting from "../containers/setting/ThemeSetting";
import AppDrawer from "./AppDrawer";

const stackConfig = {
  headerMode: 'none',
  // initialRouteName: 'AppTabBar',
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: true,
  },
} as any;

const routeConfigMap = {
  AppDrawer,
  AddTodo,
  InboxTodo,
  ManageTodo,
  TodayTodo,
  Auth,
  MailAuth,
  SettingTab,
  SettingTab2: SettingTab,
  Webview,
  Dashboard,
  SoundAndNotify,
  AddTaskInstantly,
  IntelligentRecognition,
  MoreSetting,
  ThemeSetting,
};


const getRouteConfigMap = (map) => Object.keys(map).reduce((p, c) => {
  p[c] = paramsToProps(map[c]);
  return p;
}, {});

export default createStackNavigator(
  getRouteConfigMap(routeConfigMap),
  stackConfig
);
