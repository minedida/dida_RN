import React from 'react'
import {Switch as PaperSwitch, SwitchProps, withTheme, Theme} from 'react-native-paper'

interface ISwitchProps extends SwitchProps{
  theme: Theme
}
const Switch = withTheme((props: ISwitchProps) =>
    <PaperSwitch {...props} color={props.theme.colors.primary}/>
)

export default Switch
