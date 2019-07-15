import React from 'react'
import { Text, View } from 'react-native'
import { ClockInTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";

class ClockInTab extends React.Component {
  static navigationOptions = ClockInTabNavigationOptions
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>ClockInTab</Text></View>
  }
}

export default ClockInTab
