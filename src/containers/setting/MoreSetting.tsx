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
      id: 'language',
      title: '语言',
      description: '跟随系统'
    },
    {
      id: 'font-size',
      title: '字体大小',
      description: '标准'
    },
    {
      id: 'start-in-week',
      title: '星期开始于',
      description: '周日'
    },
    {
      id: 'lunar-calendar',
      title: '农历、周数与节假日'
    },
  ],
  [
    {
      id: 'default-setting',
      title: '新任务默认设置'
    },
    {
      id: 'shortcut',
      title: '快捷方式'
    },
    {
      id: 'swipe-setting',
      title: '滑动选项',
      description: '配置列表页滑动任务的快捷操作'
    },
    {
      id: 'position-outdate-task',
      title: '已过期任务的位置',
      description: '清单顶部'
    },
    {
      id: 'countdown-mode',
      title: '倒数日模式',
      description: '启用后，清单内各任务右侧的日期，将显示为倒数日。你可以点击任务右侧的倒数日或日期进行切换。',
      rightView: <Switch value={false} style={styles.switch}/>
    },
    {
      id: 'attachment',
      title: '上传/下载附件'
    }
  ],
  [
    {
      id: 'gesture-code',
      title: '手势密码'
    },
    {
      id: 'import-data',
      title: '数据导入'
    },
    {
      id: 'background-pure-mode',
      title: '后台纯净模式',
      rightView: <Switch value={false} style={styles.switch}/>
    },
    {
      id: 'double-back',
      title: '退出前提示',
      description: '点击返回键退出应用时，需要再次点击确认',
      rightView: <Switch value={false} style={styles.switch}/>
    }
  ]
]

class MoreSetting extends React.PureComponent {
  onSettingListItemPress(type) {
    console.log(type)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'更多设置'}/>
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

          {configs.map((g, i) =>
            <SettingListGroup key={i} last={i === configs.length -1}>
              {
                g.map(v =>
                  <SettingListItem key={v.id} onPress={this.onSettingListItemPress}
                                   itemHeight={d(70)} {...v}/>)
              }
            </SettingListGroup>
          )}
        </ScrollView>
      </View>
    )
  }
}

export default MoreSetting
