import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Divider, List, TouchableRipple } from "react-native-paper";
import { d, t } from "../helper/utils/ScreenUtil";
import { material } from "react-native-typography";
import { Icon } from "./index";

type Props = {
  id?: string,
  onPress: any,
  title: string,
  leftIcon?: React.ReactNode,
  rightView?: React.ReactNode
  description?: string
  itemHeight?: number
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: d(4),
    height: d(40),
    width: d(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  divider: {
    backgroundColor: '#333',
    opacity: 0.4,
    marginLeft: d(18)
  },
  headerView: {
    paddingLeft: d(4),
    height: d(76),
    justifyContent: 'center'
  }
})

function ListIcon({ leftIcon }) {
  return <View style={styles.icon} pointerEvents="box-none">{leftIcon}</View>
}

class SettingListItem extends React.PureComponent<Props> {

  static defaultProps = {
    itemHeight: d(52)
  }

  render() {
    const {
      onPress, title, id, description, itemHeight,
      leftIcon, rightView: rightViewProp
    } = this.props
    const leftView = _props => leftIcon && <ListIcon leftIcon={leftIcon}/>
    const rightView = _props => rightViewProp
    return (
      <View>
        <TouchableRipple
          rippleColor={"rgba(0, 0, 0, .12)"}
          onPress={() => onPress(id)}>
          <List.Item
            style={{ height: itemHeight, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
            title={title}
            left={leftView}
            right={rightView}
            description={description}
          />
        </TouchableRipple>
      </View>
    )
  }
}

const SettingListGroup = (props: any) =>
  <View>
    <View style={{ paddingVertical: d(12) }}>
      {props.children}
    </View>

    {!props.last && <Divider style={styles.divider}/>}
  </View>

const SettingHeader = props =>
  <View style={{ width: '100%', height: d(90) }}>
    <TouchableRipple
      rippleColor={"rgba(0, 0, 0, .12)"}
      style={styles.headerView}
      onPress={props.onPress}>
      <List.Item
        style={{ justifyContent: 'center' }}
        left={_props => <Avatar.Icon size={52} style={{ backgroundColor: '#62d6c5' }} icon="folder"/>}
        titleStyle={[material.title, { fontSize: 18, paddingLeft: d(8) }]}
        title="登录或注册"/>
    </TouchableRipple>
    <Divider style={styles.divider}/>
  </View>

const SettingIcon = ({ type, name, color = '#757575', size = t(24) }) =>
  <Icon type={type} color={color} name={name} size={size} style={{ alignSelf: 'center' }}/>

export {
  SettingListItem,
  SettingListGroup,
  SettingHeader,
  SettingIcon
}
