import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { NavigationBar, SettingListGroup, SettingListItem, Switch } from "../../components";
import { d } from "../../helper/utils/ScreenUtil";

const styles = StyleSheet.create({
  switch: {
    alignSelf: 'center'
  }
})

const configs: Array<Array<any>> = [
  [
    {
      id: 'everyday-notify',
      title: '每日提醒',
      description: '每日9:00提醒我',
    },
    {
      id: 'ring',
      title: '铃声',
      description: 'Dida Pop',
    },
    {
      id: 'vibration',
      title: '震动',
      rightView: <Switch value={true} style={styles.switch}/>
    },
    {
      id: 'dialog_notify',
      title: '弹窗提醒',
      description: '总是显示提醒弹窗'
    },
    {
      id: 'continuous-ring',
      title: '持续响铃',
      description: '启用后，提醒铃声会持续播放1分钟直到产生操作。若未及时处理任务提醒，则第一次响铃结束后，间隔2分钟再次响铃。',
      rightView: <Switch value={true} style={styles.switch}/>
    },
    {
      id: 'reserve-notification-bar',
      title: '常驻通知栏',
      description: '启用后，提醒发生时会常驻状态栏，直到对任务提醒进行查看、完成或暂缓操作。',
      rightView: <Switch value={true} style={styles.switch}/>
    },
    {
      id: 'alarm-mode',
      title: '闹钟模式',
      description: '启用后，当6.0及以上系统的手机进入doze模式时，仍然会正常提醒，但系统状态栏会显示闹钟图标',
      rightView: <Switch value={true} style={styles.switch}/>
    },
    {
      id: 'combination-system-notify',
      title: '组合系统通知',
      description: '跟随系统'
    },
  ],
  [
    {
      id: 'complete-alarm-ring',
      title: '完成提示音',
      description: '叮'
    },
    {
      id: 'app-vibration',
      title: '应用震感',
      description: '开启后，完成任务、拖拽任务排序时，应用将会产生轻微震感。',
      rightView: <Switch value={false} style={styles.switch}/>
    },
  ],
  [
    {
      id: 'alarm-not-work',
      title: '提醒不工作？',
    }
  ]
]

class SoundAndNotify extends React.PureComponent {

  onSettingListItemPress() {

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'声音与提醒'}/>
        <ScrollView endFillColor={'cyan'} style={{ flex: 1, backgroundColor: '#fff' }}>

          {configs.map((g, i) =>
              <SettingListGroup key={i}>
                {
                  g.map(v =>
                    <SettingListItem key={v.id} onPress={this.onSettingListItemPress} itemHeight={d(78)} {...v}/>)
                }
              </SettingListGroup>
          )}
        </ScrollView>
      </View>
    )
  }
}

export default SoundAndNotify
