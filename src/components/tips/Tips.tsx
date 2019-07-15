import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native'
import { material } from "react-native-typography";
import { Theme, withTheme } from 'react-native-paper'
import { d, t } from "../../helper/utils/ScreenUtil";
import { Icon, Space } from "../";

const styles = StyleSheet.create({
  container: {
    width: d(355),
    height: d(86),
    marginLeft: d(10),
    borderRadius: d(10),
    backgroundColor: '#6071e2',
    flexDirection: 'row'
  },
  iconStyle: {
    margin: d(10),
    marginTop: d(6)
  },
  btnView: {
    width: d(65),
    height: d(24),
    borderRadius: d(14),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: d(8),
    right: d(-16)
  }
})

type Props = {
  type: string
  theme: Theme
}
const txts = {
  inbox: '当你需要临时记录杂事、备忘或想法，可以先写进收集箱，方便稍后查看和整理。',
  calendar: '你可以为事情设置日期，然后在日历中查看每一天需要做哪些事。',
  today: '智能清单"今天"会筛选出日期为今天的所有事情，帮助你快速浏览你的一天。'
}
const icons = {
  inbox: { type: 'Feather', name: 'inbox' },
  calendar: { type: 'MaterialCommunityIcons', name: 'calendar-text' },
  today: { type: 'FontAwesome5', name: 'calendar-alt' }
}

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


class Tips extends React.PureComponent<Props> {
  state = {
    click: false
  }

  componentWillUpdate = () => LayoutAnimation.easeInEaseOut()

  render() {
    const {
      theme: { colors: { primary } },
      type = 'inbox',
    } = this.props
    return !this.state.click && (
      <View style={[styles.container,
        { backgroundColor: primary }]}>
        <Icon {...icons[type]} color={'#fff'}
              size={t(34)} style={styles.iconStyle}/>

        <View style={{ width: d(270) }}>
          <Space height={d(8)}/>
          <Text
            style={[material.caption, { color: '#fff', lineHeight: t(20) }]}>{txts[type]}</Text>
          <TouchableOpacity style={styles.btnView} onPress={() => this.setState({ click: true })}>
            <Text style={[material.caption, { color: primary }]}>我知道了</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withTheme(Tips)
