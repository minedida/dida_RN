import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface anyProps {
  [k: string]: any
}

interface Props extends TouchableOpacityProps, anyProps{}
export default class ButtonContainer extends React.PureComponent<Props, any> {
  render() {
    return <TouchableOpacity {...this.props}>
      {this.props.children}
    </TouchableOpacity>
  }
}
