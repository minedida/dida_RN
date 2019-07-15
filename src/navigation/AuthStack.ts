import { createStackNavigator } from 'react-navigation';
import Auth from "../containers/auth/Auth";
import MailAuth from "../containers/auth/MailAuth";

export default createStackNavigator(
  {
    Auth: Auth,
    MailAuth,
  },
  {
    // initialRouteName: 'MailAuth',
    headerMode: 'none',
    cardStyle: {
      shadowColor: 'transparent',
    },
  },
);
