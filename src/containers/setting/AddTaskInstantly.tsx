import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { NavigationBar, SettingListGroup, SettingListItem, Switch } from "../../components";
import { d } from "../../helper/utils/ScreenUtil";
import { navigate } from "../../navigation";


const styles = StyleSheet.create({
  switch: {
    alignSelf: 'center'
  }
})

const configs: Array<Array<any>> = [
  [
    {
      id: 'add-instantly',
      title: '快速添加',
      description: '在清单列表点击"+"键快速添加一条新建任务',
      rightView: <Switch value={false} style={styles.switch}/>
    },
    {
      id: 'clipboard',
      title: '剪切板',
      description: '当识别到剪切板内容包含时间等特殊信息时，打开应用后将自动询问是否添加任务。',
      rightView: <Switch value={false} style={styles.switch}/>
    },
    {
      id: 'status-bar',
      title: '状态栏',
      description: '在状态栏显示快速添加及未完成任务',
      rightView: <Switch value={false} style={styles.switch}/>
    },
    {
      id: 'float-ball',
      title: '悬浮球',
      description: '在手机桌面快速添加任务',
      rightView: <Switch value={false} style={styles.switch}/>
    },
  ],
  [
    {
      id: 'other',
      title: '智能识别',
    }
  ]
]

class AddTaskInstantly extends React.PureComponent {

  onSettingListItemPress(type) {
    type === 'other' && navigate('IntelligentRecognition')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'快速添加任务'}/>
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

export default AddTaskInstantly
