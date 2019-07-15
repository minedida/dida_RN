import React from 'react'
import { View, ScrollView } from 'react-native'
import { observer } from "mobx-react";
import { withTheme } from 'react-native-paper';
import { SettingTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
import { navigate } from "../../navigation";
import { d, t } from "../../helper/utils/ScreenUtil";
import { SettingListItem, SettingListGroup, SettingHeader, SettingIcon, NavigationBar }
from "../../components/";
import { NavigationParams } from "react-navigation";
import { Html } from "../../assets";

type ConfigItem = {
  id: string,
  title: string,
  leftIcon: React.ReactNode,
  rightView?: React.ReactNode,
}
const RightViewWithTheme= (props) =>
  <View style={{
    width: d(24),
    height: d(24),
    backgroundColor: props.theme.colors.primary ,
    borderRadius: d(24),
    alignSelf: 'center',
    marginRight: d(10)
  }}/>
const RightViewWithThemeCmp = withTheme(RightViewWithTheme)

const configs: Array<Array<ConfigItem>> = [
  [
    {
      id: 'dashboard',
      title: '选项卡',
      leftIcon: <SettingIcon type={'MaterialIcons'} name={'dashboard'}/>
    },
    {
      id: 'theme', title: '主题',
      leftIcon: <SettingIcon type={'MaterialCommunityIcons'} name={'checkerboard'}/>,
      rightView: <RightViewWithThemeCmp/>
    },
    {
      id: 'alarm',
      title: '声音与提醒',
      leftIcon: <SettingIcon type={'Ionicons'} name={'ios-alarm'}/>
    },
    {
      id: 'addtask',
      title: '快速添加任务',
      leftIcon: <SettingIcon type={'MaterialCommunityIcons'} name={'playlist-plus'}/>
    },
    {
      id: 'settings',
      title: '更多设置',
      leftIcon: <SettingIcon type={'Ionicons'} name={'md-settings'} size={t(24)}/>
    },
  ],
  [
    {
      id: 'wechat',
      title: '玩转微信公众号',
      leftIcon: <SettingIcon type={'MaterialCommunityIcons'} name={'wechat'}/>
    },
  ],
  [
    {
      id: 'rocket',
      title: '进入引导',
      leftIcon: <SettingIcon type={'Ionicons'} name={'ios-rocket'}/>
    },
    {
      id: 'help',
      title: '帮助中心',
      leftIcon: <SettingIcon type={'Ionicons'} name={'md-help-buoy'}/>
    },
    {
      id: 'feedback',
      title: '反馈与建议',
      leftIcon: <SettingIcon type={'MaterialIcons'} name={'feedback'}/>
    },
    {
      id: 'like',
      title: '推荐滴答清单',
      leftIcon: <SettingIcon type={'AntDesign'} name={'like1'}/>
    },
    {
      id: 'info',
      title: '关于',
      leftIcon: <SettingIcon type={'Ionicons'} name={'md-information-circle'}/>
    },
  ],
]

@observer
class SettingTab extends React.Component<NavigationParams> {
  static navigationOptions = SettingTabNavigationOptions;

  constructor(props) {
    super(props)
    this.onSettingListItemPress = this.onSettingListItemPress.bind(this)
    this.renderSettingItem = this.renderSettingItem.bind(this)
  }

  onSettingListItemPress(type: string) {
    type === 'header' && navigate('Auth')
    type === 'wechat' && navigate('Webview',
      { title: '玩转微信公众号', html: Html.play })

    type === 'dashboard' && navigate('Dashboard')
    type === 'alarm' && navigate('SoundAndNotify')
    type === 'addtask' && navigate('AddTaskInstantly')


    type === 'settings' && navigate('MoreSetting')
    type === 'theme' && navigate('ThemeSetting')
  }

  renderSettingItem(g, i) {
    return (
      <SettingListGroup key={i} last={i === configs.length - 1}>
        {
          g.map(v =>
            <SettingListItem key={v.id} onPress={this.onSettingListItemPress} {...v}/>)
        }
      </SettingListGroup>
    )
  }

  render() {
    const params = this.props.navigation.state.params
    const leftButton = params && params.from && params.from === 'drawer' ? undefined : null
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar leftButton={leftButton} title={'设置'}/>
        <ScrollView endFillColor={'cyan'} style={{ flex: 1, backgroundColor: '#fff' }}>

          <SettingHeader onPress={() => this.onSettingListItemPress('header')}/>

          {configs.map(this.renderSettingItem)}
        </ScrollView>
      </View>
    )
  }
}

export default SettingTab
