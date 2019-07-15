import React from 'react'
import { View, Text } from 'react-native'
import { TomatoTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";

class TomatoTab extends React.Component {
  static navigationOptions = TomatoTabNavigationOptions

  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>TomatoTab</Text></View>
  }
}

export default TomatoTab
