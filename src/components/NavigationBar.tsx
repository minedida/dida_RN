import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  StyleProp,
  ViewStyle
} from 'react-native'
import { material } from 'react-native-typography'
import { Icon } from "./";
import { goBack } from "../navigation";
import { d, t } from "../helper/utils/ScreenUtil";
import { DeviceSize } from "../helper/constant/DeviceConstants";

const isAndroid = Platform.OS === 'android'
const P_Version = isAndroid && Platform.Version >= 28;

const NAV_BAR_HEIGHT_IOS = d(44)
const NAV_BAR_HEIGHT_ANDROID = d(50)

const {
  status_bar_height,
  fake_status_bar_padding_for_ios,
  fake_status_bar_height_for_android
} = DeviceSize

interface Props {
  title?: string,
  statusBarStyle?: 'light-content' | 'dark-content',
  navBarBackgroundColor?: string, // nav背景色
  navBarContentColor?: string, // nav中内容的颜色
  statusBarHidden?: boolean,
  backBtnColor?: string,
  titleView?: JSX.Element,
  rightButton?: JSX.Element,
  leftButton?: JSX.Element | null,
  style?: StyleProp<ViewStyle>
  onBackPress?: (e) => void
  elevation?: boolean
}


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: NAV_BAR_HEIGHT_IOS + status_bar_height,
      },
      android: {
        height: NAV_BAR_HEIGHT_ANDROID + status_bar_height,
      }
    })
  },
  shadow: {
    elevation: 4,
    zIndex: 1
  },
  fakeHolder: {
    height: fake_status_bar_height_for_android,
    width: '100%',
    paddingTop: fake_status_bar_padding_for_ios
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: isAndroid ? 'flex-start' : 'center',
    alignItems: 'center',
    height: isAndroid ? NAV_BAR_HEIGHT_ANDROID : NAV_BAR_HEIGHT_IOS,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginLeft: d(60),
    marginRight: d(60),
    fontSize: t(18),
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#333'
  }
})

class NavigationBar extends PureComponent<Props> {
  static defaultProps = {
    title: '标题',
    statusBarStyle: 'dark-content',
    statusBarHidden: false,
    navBarBackgroundColor: '#fff',
    navBarContentColor: '#333',
    backBtnColor: '#62646c',
    elevation: true
  }

  private getRightButton(rightView: any) {
    return (
      <View style={[styles.center, { height: '100%', width: d(38) }]}>
        {rightView && rightView}
      </View>
    )
  }

  // 三种状态，自定义、默认、空
  // undefined -> 默认
  // null -> 空
  private getLeftButton(leftButton: any) {
    if (leftButton === null) {
      return null
    }
    return <View style={{
      width: d(50), height: '100%',
      justifyContent: 'center', alignItems: 'center'
    }}>
      {
        leftButton !== undefined ? leftButton :
          <Icon
            largeTouchArea
            type={isAndroid ? 'Feather' : 'Ionicons'}
            name={isAndroid ? 'arrow-left' : 'ios-arrow-back'}
            size={isAndroid ? 24 : 26}
            color={this.props.navBarContentColor}
            onPress={this.props.onBackPress ? this.props.onBackPress : goBack}/>
      }

    </View>
  }

  getTitleView(title: any) {
    const { titleView, leftButton } = this.props
    const marginLeft = leftButton === null ? d(15) : d(0)
    return (
      <View style={{ marginLeft, height: '100%', justifyContent: 'center', flex: 1 }}>
        {
          !title ? titleView :
            <Text
              style={[material.titleObject]}
              numberOfLines={1}
              allowFontScaling={false}>{title}</Text>
        }
      </View>
    )
  }

  render() {
    const {
      title,
      navBarBackgroundColor,
      rightButton,
      leftButton,
      statusBarStyle,
      statusBarHidden,
      elevation
    } = this.props
    const content = (
      <View style={[styles.navBar]}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', flex: 1 }}>
          {this.getLeftButton(leftButton)}
          {this.getTitleView(title)}
        </View>
        {this.getRightButton(rightButton)}
      </View>
    )
    const elevation_android = elevation ? { elevation: P_Version ? 4 : 2, zIndex: 1 } : {}

    return (
      <View style={[styles.container, elevation_android, { backgroundColor: navBarBackgroundColor }, this.props.style]}>
        <StatusBar barStyle={statusBarStyle} backgroundColor="transparent" translucent animated hidden={statusBarHidden}/>
        <View style={styles.fakeHolder} />
        {content}
      </View>
    )
  }
}

export default NavigationBar
