import React from 'react'
import { View, Text } from 'react-native'
import { NavigationPops } from "../../navigation/utils";
import {NavigationBar} from "../../components/";
import { material } from "react-native-typography";

type Props = {
  navigation: NavigationPops
}

class Login extends React.PureComponent<Props>{
  onPress(type: string) {
    if ( 'Login' === type) {
      this.props.navigation.navigate('App')
    }
    if ('GoRegister' === type) {
      this.props.navigation.navigate('Register')
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar leftButton={null} title={'登录'}/>
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={material.button} onPress={() => this.onPress('Login')}>Login</Text>
          <Text style={material.button} onPress={() => this.onPress('GoRegister')}>GoRegister</Text>
        </View>
      </View>
    )
  }
}
export default Login
