import { observer } from 'mobx-react';
import React, { Component } from 'react';
import AppStack from './AppStack';
import { app } from "../store/AppStore";

@observer
class AppStackNav extends Component<any> {
  // @ts-ignore
  static router = AppStack.router;

  calculateNavigation(navigation) {
    // @ts-ignore
    const { routes, index } = navigation.state;

  let [dest, ...rest] = navigation.state.routes
    rest.unshift({
      ...dest,
      routes: app.tabRoutes
    });
    // @ts-ignore
    const nav = {
      ...navigation,
      state: {
        ...navigation.state,
        routes: rest
      }
    };

    return navigation;
  }

  render() {
    // @ts-ignore
    const customNavigation = this.calculateNavigation(this.props.navigation)

    return <AppStack {...this.props}/>
  }
}

export default AppStackNav
