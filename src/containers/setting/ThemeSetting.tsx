import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { List } from "react-native-paper";
import { material } from 'react-native-typography'
import { ButtonContainer, NavigationBar, Space, Icon, Toast } from "../../components";
import { d, t } from "../../helper/utils/ScreenUtil";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../store/AppStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemView: {
    padding: d(18),
    alignItems: 'center',

  },
  colorsView: {
    width: d(56),
    height: d(56),
    borderRadius: d(12),
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkView: {
    position: "absolute",
    bottom: d(4),
    right: d(4),
    backgroundColor: '#fff',
    width: d(14),
    height: d(14),
    borderRadius: d(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  lockView: {
    width: d(40),
    height: d(40),
    borderRadius: d(20),
    backgroundColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
const SolidColorTheme = [
  {
    type: 'solid-color',
    color: '#607edf',
    title: '官方蓝',
    key: 'blue',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#212121',
    title: '夜间',
    key: 'black_night',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#000',
    title: '纯黑',
    key: 'black_black',
    active: false,
    clocked: true
  },
  {
    type: 'solid-color',
    color: '#fe7797',
    title: '粉色',
    key: 'pink',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#272a34',
    title: '黑色',
    key: 'black_gray',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#04ce91',
    title: '绿色',
    key: 'green',
    active: true,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#7d7f85',
    title: '灰色',
    key: 'gray',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#f9bf13',
    title: '黄色',
    key: 'yellow',
    active: false,
    clocked: false
  },
  {
    type: 'solid-color',
    color: '#f0f0f0',
    title: '白色',
    key: 'white',
    active: false,
    clocked: true
  }
]

const configs: Array<any> = SolidColorTheme

type Props = {
  app: AppStore
}

@inject('app')
@observer
class ThemeSetting extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.onItemPress = this.onItemPress.bind(this)
  }

  onItemPress(value: any) {
    const activePrimaryColor = this.props.app!.appTheme!.colors!.primary

    if (value.type === 'solid-color') {
      if (value.color === activePrimaryColor) {
        return;
      }
      if (value.clocked) {
        Toast.show('会员专享，请充值');
        return;
      }
      this.props.app.changePrimaryColor(value.color);
      //NativeModules.AndroidTheme.changeTheme(value.key)
      Toast.show(`已为你换上${value.title}主题`)
    }
  }

  render() {
    const activePrimaryColor = this.props.app!.appTheme!.colors!.primary

    return <View style={styles.container}>
      <NavigationBar title={'主题'}/>

      <List.Subheader>纯色主题</List.Subheader>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          configs.map(v =>
            <SolidColorItem
              key={v.title.toString()}
              isActive={v.color === activePrimaryColor}
              item={v} onItemPress={this.onItemPress}/>
          )
        }
      </View>
    </View>
  }
}

type ISolidColorItemProps = {
  item: any,
  onItemPress: (value: any) => void,
  isActive: boolean
}

class SolidColorItem extends React.Component<ISolidColorItemProps> {

  shouldComponentUpdate(nextProps: Readonly<ISolidColorItemProps>): boolean {
    return nextProps.isActive !== this.props.isActive
  }

  renderCheckView() {
    const { item: { color } } = this.props
    return <View style={styles.checkView}>
      <Icon type={'Entypo'} name={'check'} size={t(12)} color={color}/>
    </View>
  }

  renderLockView() {
    const { item: { color } } = this.props
    const isWhite = color === '#f0f0f0'
    const viewStyle = [styles.lockView, { backgroundColor: isWhite ? '#fff' : styles.lockView.backgroundColor }] as any
    return <View style={viewStyle}>
      <Icon type={'FontAwesome5'} name={'lock'} size={t(16)} color={'#525252'}/>
    </View>
  }

  render() {
    const {
      item: {
        color,
        title,
        clocked
      },
      isActive,
      onItemPress
    } = this.props
    return (
      <ButtonContainer style={styles.itemView} onPress={() => onItemPress(this.props.item)}>
        <View style={[styles.colorsView, { backgroundColor: color }]}>
          {isActive && this.renderCheckView()}
          {clocked && this.renderLockView()}
        </View>
        <Space height={d(10)}/>
        <Text style={[material.body1, { color: '#989898' }]}>{title}</Text>
      </ButtonContainer>
    )
  }
}


export default ThemeSetting
