import React from 'react'
import { View, Text } from 'react-native'
import { material } from "react-native-typography";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Theme, withTheme } from 'react-native-paper'
import { NavigationBar } from "../../components/";
import CommonList from "./CommonList";
import SmartList from "./SmartList";
import Label from "./Label";

type Props = {
  theme: Theme
}

class ManageTodo extends React.PureComponent<Props> {
  state = {
    index: 0,
    routes: [
      { key: 'CommonList', title: '普通清单' },
      { key: 'SmartList', title: '智能清单' },
      { key: 'Label', title: '标签' },
    ],
  };
  render() {
    const Scenes = SceneMap({
      CommonList,
      SmartList,
      Label,
    })

    const {theme: {colors: {primary}}} = this.props
    const Tab = props =>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: primary }}
        style={{ backgroundColor: '#fff' }}
        pressColor={'rgba(0, 0, 0, .2)'}
        renderLabel={props =>
          <Text style={material.subheading}>
            {props.route.title}
          </Text>
        }
      />

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'管理清单和标签'} elevation={false}/>
        <TabView
          navigationState={this.state}
          renderScene={Scenes}
          onIndexChange={index => this.setState({ index })}
          renderTabBar={Tab}/>
      </View>
    )
  }
}

export default withTheme(ManageTodo)
