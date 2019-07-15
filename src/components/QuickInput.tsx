import React from 'react'
import { inject, observer } from "mobx-react";
import { View, Text, StyleSheet, Platform } from 'react-native'
import { KeyboardAccessoryView } from 'react-native-keyboard-input';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { AppStore } from "../store/AppStore";
import { TodoStore } from "../store/TodoStore";
import { d, t } from "../helper/utils/ScreenUtil";
import { ButtonContainer, Icon, Toast } from "./index";
import { Theme, withTheme } from "react-native-paper";


const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: d(6),
    borderTopRightRadius: d(6),
  },
  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      }
    })
  },
  textInput: {
    flex: 1,
    marginLeft: d(6),
    marginTop: d(6),
    marginBottom: d(6),
    paddingLeft: d(6),
    fontSize: t(15),
    backgroundColor: 'white',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: d(8)
  },
  toolView: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: d(6)
  }
});

type Props = {
  app?: AppStore
  todo?: TodoStore
  theme: Theme
}

const InputIcon = (props: any) =>
  <Icon style={styles.iconView} color={'#787878'} size={t(22)} scale={1.8} {...props}/>


//todo contentView 在y轴方向上的动画
@inject('app', 'todo') @observer
class QuickInput extends React.Component<Props, any> {
  textInputRef: any
  state = {
    inputTxt: ''
  }

  onToolItemPress(type: string) {
    if (type === 'send') {
      // 1.添加todo到store中
      this.props.todo!.addTodo(this.state.inputTxt)
      // 2.清空state
      this.setState({ inputTxt: '' })
      // 3.恢复fab状态
      this.props.app!
        .setFabOpen(false)
        .setFabVisible(true)
      return
    }
    Toast.show(type);
  }

  onChangeText(txt: string) {
    this.setState({ inputTxt: txt })
  }

  renderToolView() {
    const { theme: { colors: { primary } } } = this.props
    const sendBtnDisabled = !this.state.inputTxt
    const sendIconColor = sendBtnDisabled ? '#d1d1d1' : primary
    return (
      <View style={styles.toolView}>

        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <InputIcon
            onPress={() => this.onToolItemPress('KeyboardView')}
            type={'FontAwesome5'} name={'calendar-alt'} size={t(20)}/>
          <InputIcon
            onPress={() => this.onToolItemPress('priority')}
            type={'MaterialCommunityIcons'} name={'priority-high'}/>

          <InputIcon onPress={() => this.onToolItemPress('tag')}
                     type={'AntDesign'} name={'tag'} size={t(20)}/>

          <ButtonContainer onPress={() => this.onToolItemPress('inbox')} style={[styles.iconView, { flex: 1 }]}>
            <InputIcon type={'MaterialCommunityIcons'} name={'inbox'}/>
            <Text>收集箱</Text>
          </ButtonContainer>
        </View>

        <ButtonContainer style={styles.iconView} disabled={sendBtnDisabled}
                         onPress={() => this.onToolItemPress('send')}>
          <InputIcon type={'MaterialCommunityIcons'} name={'send'} color={sendIconColor}/>
        </ButtonContainer>

      </View>
    )
  }

  renderTextView() {
    // todo: 同步textinput的光标颜色
    return (
      <View style={styles.inputContainer}>
        <AutoGrowingTextInput
          autoFocus
          maxHeight={d(100)}
          style={styles.textInput}
          ref={r => this.textInputRef = r}
          placeholder={'准备做什么?'}
          underlineColorAndroid="transparent"
          value={this.state.inputTxt}
          onChangeText={(t) => this.onChangeText(t)}
        />
      </View>
    )
  }

  renderKeyboardContent() {
    return (
      <View style={styles.blurContainer}>
        {this.renderTextView()}
        {this.renderToolView()}
      </View>
    );
  }

  render() {
    if (!this.props.app!.fabOpen) {
      return null
    }
    return (
      <KeyboardAccessoryView
        revealKeyboardInteractive
        renderContent={() => this.renderKeyboardContent()}
        onHeightChanged={IsIOS ? height => this.setState({ keyboardAccessoryViewHeight: height }) : undefined}
        trackInteractive={TrackInteractive}
        kbInputRef={this.textInputRef}/>
    )
  }
}

export default withTheme(QuickInput)
