import React from 'react';
import {
  TouchableNativeFeedback,
  View, ViewStyle, ViewProps
} from 'react-native';

import getIconType from './getIconType';
import { ButtonContainer } from '../'
import { d } from "../../helper/utils/ScreenUtil";
import { isEmpty } from "../../helper/utils/Utils";

interface IconProps extends ViewProps {
  type?:
    'Zocial' | 'Octicons' | 'MaterialIcons' | 'MaterialCommunityIcons' |
    'Ionicons' | 'AntDesign' | 'Foundation' | 'EvilIcons' | 'Entypo' |
    'FontAwesome' | 'SimpleLineIcons' | 'Feather' | 'FontAwesome5'
  name: string
  size: number
  color?: string
  onPress?: Function
  style?: ViewStyle
  ref?: Function
  scale?: number
  hitSlop?: { left: number, top: number, right: number, bottom: number }
  largeTouchArea?: boolean
}

const Icon = (props: IconProps) => {
  let {
    type,
    name,
    size,
    color,
    onPress,
    // style = { height: '100%', width: '100%' },
    style,
    scale = 1.2,
    hitSlop = {},
    largeTouchArea
  } = props;
  const IconComponent = getIconType(type);
  const Component = onPress ? ButtonContainer : View as any
  const ComponentProps = onPress ?
    { background: TouchableNativeFeedback.SelectableBackgroundBorderless() } : {}
  const containerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: size * scale,
    height: size * scale,
  } as any
  hitSlop = !isEmpty(hitSlop) ? hitSlop :
    (largeTouchArea ? { left: d(20), top: d(20), right: d(20), bottom: d(20) } : {})
  return (
    <Component style={[containerStyle, style]} onPress={onPress} hitSlop={hitSlop} {...ComponentProps}>
      <IconComponent
        style={{ position: 'relative' }}
        testID="iconIcon"
        size={size}
        name={name}
        color={color}/>
    </Component>
  )
}


export default Icon
