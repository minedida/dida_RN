import React from 'react'
import { Checkbox as PaperCheckbox, CheckboxProps, withTheme, Theme } from 'react-native-paper'

interface ICheckboxProps extends CheckboxProps {
  theme: Theme
}

const Checkbox = withTheme((props: ICheckboxProps) =>
  <PaperCheckbox {...props} color={props.theme.colors.primary}/>
)

export default Checkbox
