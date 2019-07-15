import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SettingIcon, NavigationBar, Switch } from "../../components";
import { List } from 'react-native-paper'
import { inject, observer } from "mobx-react";
import { AppStore } from "../../store/AppStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})


type Props = {
  app: AppStore
}


@inject('app')
@observer
class Dashboard extends React.Component<Props> {

  change = (index) => {
    this.props.app.changeTabs(index)
    // this.setState({})
  }

  render() {
    let [, CalendarItem, TomatoItem,
      ClockInItem, SearchItem, SettingItem]
      = this.props.app.appTabs

    return <View style={styles.container}>
      <NavigationBar title={'选项卡'}/>
      <List.Subheader numberOfLines={2}>
        你可以在滴答清单中开启/关闭以下功能，已开启的功能将在主洁面选项卡展示。</List.Subheader>


      <List.Item title={'日历'} description={'开启后，即可在5种日历视图种方便地规划任务。'}
                 onPress={_ => this.change(1)}
                 left={_ => <SettingIcon type={'Entypo'} name={'calendar'} />}
                 right={_ => <Switch value={CalendarItem.show} onValueChange={() => this.change(1)} style={{ alignSelf: 'center' }}/>}
      />
      <List.Item title={'番茄'} description={'开启后，即可从主洁面选项卡，任务详情或提醒弹窗种打开专注，并在个人中心查看相关统计。'}
                 onPress={_ => this.change(2)}
                 left={_ => <SettingIcon type={'MaterialCommunityIcons'} name={'tennis-ball'}/>}
                 right={_ => <Switch value={TomatoItem.show} onValueChange={() => this.change(2)} style={{ alignSelf: 'center' }}/>}
      />
      <List.Item title={'打卡'} description={'开启后，即可添加想要养成的习惯，并追踪打卡数据。'}
                 onPress={_ => this.change(3)}
                 left={_ => <SettingIcon type={'Feather'} name={'clock'} />}
                 right={_ => <Switch value={ClockInItem.show} onValueChange={() => this.change(3)} style={{ alignSelf: 'center' }}/>}
      />
      <List.Item title={'搜索'} description={'开启后，即可在主界面选项卡快速搜索任务。'}
                 onPress={_ => this.change(4)}
                 left={_ => <SettingIcon type={'Feather'} name={'search'} />}
                 right={_ => <Switch value={SearchItem.show} onValueChange={() => this.change(4)} style={{ alignSelf: 'center' }}/>}
      />
      <List.Item title={'设置'} description={'开启后，即可在主界面选项卡查看并更改各类配置。'}
                 onPress={_ => this.change(5)}
                 left={_ => <SettingIcon type={'Ionicons'} name={'md-settings'} />}
                 right={_ => <Switch value={SettingItem.show} onValueChange={() => this.change(5)} style={{ alignSelf: 'center' }}/>}
      />
    </View>
  }
}

export default Dashboard
