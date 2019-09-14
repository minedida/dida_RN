import React from 'react'
import { createAppContainer, NavigationContainerComponent } from 'react-navigation'
import { onNavigationStateChange } from "./utils";
import AppNavigator from "./AppNavigator";
import { observer } from "mobx-react";
import { setNavigator } from "./index";


@observer
class Route extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator as any)
    return (
      <AppContainer
        onNavigationStateChange={onNavigationStateChange}
        ref={(nav: NavigationContainerComponent) => setNavigator(nav)}/>
    )
  }
}

export default Route
