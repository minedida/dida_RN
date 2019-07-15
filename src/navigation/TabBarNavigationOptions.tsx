import React from "react";
import { Icon } from '../components/'
import { t } from "../helper/utils/ScreenUtil";

type NavigationOptionsParams = {
  navigation: any
  navigationOptions: any
}
type tabBarIconParams = {
  focused: boolean,
  tintColor: string
}
export const TodoTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'Ionicons'} color={params.tintColor} name={'md-checkbox'} size={t(24)}/>
  }
}
export const CalendarTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'Entypo'} color={params.tintColor} name={'calendar'} size={t(24)}/>
  }
}
export const SettingTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'Ionicons'} color={params.tintColor} name={'md-settings'} size={t(24)}/>
  }
}
export const TomatoTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'MaterialCommunityIcons'} color={params.tintColor} name={'tennis-ball'} size={24}/>
  }
}
export const ClockInTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'Feather'} color={params.tintColor} name={'clock'} size={24}/>
  }
}
export const SearchTabNavigationOptions = (_navigationOptionsParams: NavigationOptionsParams) => {
  return {
    tabBarIcon: (params: tabBarIconParams) =>
      <Icon type={'Feather'} color={params.tintColor} name={'search'} size={24}/>
  }
}
