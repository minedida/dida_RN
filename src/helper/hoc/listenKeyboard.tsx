import React from 'react'
import { Platform, Keyboard, LayoutAnimation, UIManager } from 'react-native'

export default function listenKeyboard(WrappedComponent: any) {
  return class ListenKeyboardHOC extends React.PureComponent {
    keyboardWillShowSub: any
    keyboardWillHideSub: any

    constructor(props: any) {
      super(props)
      this.state = {
        keyboardShown: true,
      }
      Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    componentWillMount() {
      const keyboardShowType = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow'
      const keyboardHideType = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide'
      this.keyboardWillShowSub = Keyboard.addListener(keyboardShowType, this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener(keyboardHideType, this.keyboardWillHide);
    }

    componentWillUnmount() {
      this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub.remove();
    }

    componentWillUpdate() {
      LayoutAnimation.easeInEaseOut()
    }

    keyboardWillShow = (_event: any) => {

      this.setState({ keyboardShown: true })
    };

    keyboardWillHide = (_event: any) => {
      this.setState({ keyboardShown: false })
    };

    render() {
      return <WrappedComponent {...this.state}/>
    }
  }
}
