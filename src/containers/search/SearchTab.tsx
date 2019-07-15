import React from 'react'
import { Text, View } from 'react-native'
import { SearchTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";

class SearchTab extends React.Component {
  static navigationOptions = SearchTabNavigationOptions
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text>SearchTab</Text></View>
  }
}

export default SearchTab
