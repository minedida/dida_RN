import React from 'react'
import { View, Text, Platform } from 'react-native'
import { NavigationBar, Icon, Tips, ElevationSpace } from "../../components/";
import { material } from "react-native-typography";
import { d, t } from "../../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { DrawerStore } from "../../store/DrawerStore";
import { openDrawer } from "../../navigation";

const isAndroid = Platform.OS === 'android'

type Props = {
  drawer: DrawerStore
}

@inject('drawer') @observer
class TodayTodo extends React.Component<Props> {
  renderLeftBtn() {
    return (
      <Icon
        largeTouchArea
        // onPress={this.props.drawer.toggleMenu}
        onPress={() => openDrawer()}
        type={'Ionicons'}
        size={isAndroid ? t(20): t(20)}
        style={{ width: d(26), height: d(26), justifyContent: 'center', alignItems: 'center' }}
        name={isAndroid ? 'md-menu' : 'ios-menu'}
        color={'#333'} />
    )
  }
  renderRightBtn() {
    return (
      <View style={{  justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginRight: d(16) }}>
        <Icon
          largeTouchArea
          onPress={() => {}}
          type={'MaterialCommunityIcons'}
          size={isAndroid ? t(20): t(20)}
          style={{ marginRight: d(8) }}
          name={'radiobox-marked'}
          color={'#333'} />
        <Icon
          largeTouchArea
          onPress={() => {}}
          type={'Ionicons'}
          size={isAndroid ? t(20): t(20)}
          name={isAndroid ? 'md-more' : 'ios-more'}
          color={'#333'} />
      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'今天'} leftButton={this.renderLeftBtn()} rightButton={this.renderRightBtn()}/>
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
          <ElevationSpace/>
          <Tips type={'today'}/>

          <Text style={material.button}>
            TodayTodo
          </Text>
        </View>
      </View>
    )
  }
}

export default TodayTodo
