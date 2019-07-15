import React from 'react'
import { View, Text } from 'react-native'
import {NavigationBar} from "../../components/";
import { material } from "react-native-typography";

class Register extends React.PureComponent{
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar title={'注册'} />
        <View style={{ flex: 1,  backgroundColor: '#fff' }}>
          <Text style={material.button}>Register</Text>
        </View>
      </View>
    )
  }
}
export default Register
