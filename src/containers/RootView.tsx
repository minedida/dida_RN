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

  /*
   * status: true -> fab展开了  false -> fab 收起了
   */
  onFabPress(status) {
    // 如果fab展开了，就让fab消失，input出现。如果fab收起了，让fab出现，input消失
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
        {/*
            用一个空布局将输入框顶到屏幕最下面(安卓用)
        */}
        <View style={{ flex: 1 }} pointerEvents={"none"}/>
      <QuickInput/>
    </Portal>
  }
}

export default RootView
