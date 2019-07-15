import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { NavigationBar, SettingListItem, Switch, Toast } from "../../components";
import { List } from 'react-native-paper';
import { d } from "../../helper/utils/ScreenUtil";


const styles = StyleSheet.create({
  switch: {
    alignSelf: 'center'
  }
})
class IntelligentRecognition extends React.Component {

  onSettingListItemPress(type) {
    Toast.show(type)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={'智能识别'}/>
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <List.Section>
            <List.Subheader>智能识别</List.Subheader>
            <SettingListItem key={'intelligent-recognition-date'} id={'intelligent-recognition-date'}
                             title={'智能识别日期'} description={'通过快速添加、语言输入等方式创建任务时，自动识别任务中的日期和时间信息并设置提醒。'}
                             onPress={_ => this.onSettingListItemPress('intelligent-recognition-date')}
                             rightView={ <Switch value={false} style={styles.switch}/>} itemHeight={d(70)} />

            <SettingListItem key={'remove-date'} id={'remove-date'}
                             title={'移除任务文本中的日期'} description={'通过快速添加、语言输入等方式创建任务时，移除任务详情中识别到到日期文本。'}
                             onPress={_ => this.onSettingListItemPress('remove-date')}
                             rightView={ <Switch value={false} style={styles.switch}/>} itemHeight={d(70)} />

            <SettingListItem key={'rule-example'} id={'rule-example'}
                             title={'规则示例'}
                             onPress={_ => this.onSettingListItemPress('intelligent-recognition-date')} />

            <List.Subheader>标签识别</List.Subheader>

            <SettingListItem key={'remove-tag'} id={'remove-tag'}
                             title={'移除任务文本中的日期'} description={'通过快速添加新建任务时，移除任务标题中到标签文本。'}
                             onPress={_ => this.onSettingListItemPress('remove-tag')}
                             rightView={ <Switch value={false} style={styles.switch}/>} itemHeight={d(70)} />
          </List.Section>
        </ScrollView>
      </View>
    )
  }
}

export default IntelligentRecognition
