import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { material } from "react-native-typography";

class AddTodo extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'AddTodo'}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.button}>
            AddTodo
          </Text>
        </View>
      </View>
    )
  }
}

export default AddTodo
