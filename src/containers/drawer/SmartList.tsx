import React from 'react'
import { ScrollView } from 'react-native'
import { SettingListItem, SettingIcon, Toast } from "../../components";
import { d } from "../../helper/utils/ScreenUtil";
import { List, Divider } from "react-native-paper";

type Props = any

const configs: Array<any> = [
  {
    id: 'all',
    title: '所有',
    description: '隐藏',
    leftIcon: <SettingIcon type={'Ionicons'} name={'ios-wallet'} size={22}/>
  },
  {
    id: 'today',
    title: '今天',
    description: '显示',
    leftIcon: <SettingIcon type={'Entypo'} name={'calendar'} size={22}/>
  },
  {
    id: 'tomorrow',
    title: '明天',
    description: '隐藏',
    leftIcon: <SettingIcon type={'MaterialCommunityIcons'} name={'bell-ring'} size={22}/>
  },
  {
    id: '7days',
    title: '最近7天',
    description: '隐藏',
    leftIcon: <SettingIcon type={'FontAwesome5'} name={'calendar-week'} size={22}/>
  },
  {
    id: 'assign_to_me',
    title: '分配给我',
    description: '自动',
    leftIcon: <SettingIcon type={'FontAwesome5'} name={'user-alt'} size={22}/>
  },
  {
    id: 'event',
    title: '事件',
    description: '显示',
    leftIcon: <SettingIcon type={'FontAwesome5'} name={'rss-square'} size={22}/>
  },
  {
    id: 'down',
    title: '已完成',
    description: '隐藏',
    leftIcon: <SettingIcon type={'FontAwesome'} name={'check-square-o'} size={22}/>
  },
  {
    id: 'trash',
    title: '垃圾桶',
    description: '隐藏',
    leftIcon: <SettingIcon type={'FontAwesome5'} name={'trash'} size={18}/>
  },
]

class SmartList extends React.PureComponent<Props> {

  onSettingListItemPress(type: string) {
    Toast.show(type)
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        {configs.map((v) =>
          <SettingListItem key={v.id} itemHeight={d(66)} onPress={this.onSettingListItemPress} {...v}/>
        )}
        <Divider/>
        <List.Section>
          <List.Subheader>自定义智能清单</List.Subheader>
          <SettingListItem id={'custom-smart-list'} title={'添加智能清单'} itemHeight={d(70)}
                           leftIcon={<SettingIcon type={'MaterialIcons'} name={'add'}/>}
                           onPress={_ => this.onSettingListItemPress('intelligent-recognition-date')}
          />
        </List.Section>
      </ScrollView>
    )
  }
}

export default SmartList
