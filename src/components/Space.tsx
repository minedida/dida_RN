import React from 'react'
import { Platform, View } from 'react-native'
import { d } from '../helper/utils/ScreenUtil';

const isAndroid = Platform.OS === 'android'
export const Space = ({ height = 0, width = 0, bgc = 'transparent' }) => height ?
  <View style={{ width: '100%', height, backgroundColor: bgc }}/> :
  <View style={{ height: '100%', width, backgroundColor: bgc }}/>

// 配合NavigationBar.tsx的elevation属性一起使用
export const ElevationSpace = () => isAndroid ? <Space height={d(4)}/> : null

