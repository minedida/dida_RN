import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { NavigationContainerComponent } from 'react-navigation';
import AppStack from './AppStack';
import { setNavigator } from './';

@observer
class AppStackNav extends Component<any> {
  static router = AppStack.router;

  render() {
    const { navigation } = this.props;
    return <AppStack
      navigation={navigation}
      ref={(nav: NavigationContainerComponent) => setNavigator(nav)}/>
  }
}

export default AppStackNav
