import React from 'react'
import { Portal } from "react-native-paper";
import { d } from "../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { AppStore } from "../store/AppStore";
import { FabGroup, QuickInput } from "../components";
import { View } from "react-native";


type Props = {
  app?: AppStore
}

@inject('app') @observer
class RootView extends React.Component<Props> {

  onFabPress(status) {
    this.props.app!.setFabVisible(!status)
    this.props.app!.setFabOpen(status)
  }

  render() {
    return <Portal>
      <FabGroup
        color={'#fff'}
        visible={this.props.app!.fabVisible}
        fabStyle={{ marginBottom: d(56) }}
        open={this.props.app!.fabOpen}
        icon={this.props.app!.fabOpen ? 'today' : 'add'}
        actions={[]}
        onStateChange={({ open }) => this.onFabPress(open)}
        onPress={() => {}}/>
        <View style={{ flex: 1 }} pointerEvents={"none"}/>
      <QuickInput/>
    </Portal>
  }
}

export default RootView
