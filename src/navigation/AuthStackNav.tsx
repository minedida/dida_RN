import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { NavigationContainerComponent } from 'react-navigation';
import AuthStack from './AuthStack';
import { setNavigator } from './';

@observer
class AuthStackNav extends Component<any> {
  static router = AuthStack.router;

  render() {
    const { navigation } = this.props;
    return <AuthStack
      navigation={navigation}
      ref={(nav: NavigationContainerComponent) => setNavigator(nav)}/>
  }
}

export default AuthStackNav
