import React from 'react'
import {
  View,
  TouchableNativeFeedback, TouchableOpacityProps,
} from 'react-native'

export interface anyProps {
  [k: string]: any
}

/*export default (props: anyProps) =>
  <TouchableNativeFeedback
    delayPressIn={0}
    background={this.props.background}
    {...props}>
    <View style={props.style}>
      {props.children}
    </View>
  </TouchableNativeFeedback>*/

interface Props extends TouchableNativeFeedback, TouchableOpacityProps, anyProps {}
export default class ButtonContainer extends React.PureComponent<Props, any> {
  static defaultProps = {
    background:TouchableNativeFeedback.SelectableBackground()
  }
  render() {
    return (
      <TouchableNativeFeedback
        delayPressIn={0}
        background={this.props.background}
        {...this.props}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}
