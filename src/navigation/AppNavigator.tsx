import { createSwitchNavigator } from 'react-navigation';
import Splash from '../containers/Splash';
import AppStackNav from './AppStackNav';
// import AuthStackNav from './AuthStackNav';
import { withBackHandler } from "../helper/hoc";

export default createSwitchNavigator(
  {
    // auth: withBackHandler(AuthStackNav, 'auth'),
    App: withBackHandler(AppStackNav, 'App'),
    Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);
