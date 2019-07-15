import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NavigationPops } from "../../navigation/utils";
import { NavigationBar, Space } from "../../components/";
import { material } from "react-native-typography";
import { Images } from "../../assets";
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { d } from "../../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { AuthStore } from "../../store/AuthStore";

type Props = {
  navigation: NavigationPops
  auth: AuthStore
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: d(90)
  },
  logoStyle: {
    width: d(100),
    height: d(100),
    marginTop: d(50)
  },
  bottomContainer: {
    alignItems: 'center',
    width: '100%'
  },
  iconView: {
    height: d(36),
    width: d(310),
    justifyContent: 'center'
  },
  wechatIcon: {
    borderWidth: 1,
    borderColor: '#00bf67'
  }
})


@inject('auth')
@observer
class Auth extends React.Component<Props> {

  onPress(type: 'mail' | 'wechat' | 'more') {
   type === 'mail' && this.props.navigation.navigate('MailAuth')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={''} elevation={false}/>
        <View style={styles.container}>
          <Image resizeMode={'contain'} source={Images.auth_logo} style={styles.logoStyle}/>

          <View style={styles.bottomContainer}>
            <MaterialCommunityIconsIcon.Button
              borderRadius={d(8)}
              style={styles.iconView}
              name="email"
              backgroundColor="#607edf"
              onPress={() => this.onPress('mail')}
            >
              邮箱登录
            </MaterialCommunityIconsIcon.Button>

            <Space height={d(14)}/>
            <MaterialCommunityIconsIcon.Button
              borderRadius={d(8)}
              style={[styles.iconView, styles.wechatIcon]}
              iconStyle={{ color: '#00bf67' }}
              color={'#00bf67'}
              name="wechat"
              backgroundColor="#fff"
              onPress={() => this.onPress('wechat')}
            >
              微信登录
            </MaterialCommunityIconsIcon.Button>

            <Space height={d(20)}/>
            <Text style={[material.button, { paddingLeft: d(4) }]} onPress={() => this.onPress('more')}>更多</Text>

          </View>
        </View>
      </View>
    )
  }
}

export default Auth
