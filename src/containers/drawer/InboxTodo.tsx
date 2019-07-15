import React, { RefObject } from 'react'
import { View, Platform, findNodeHandle, UIManager, StyleSheet } from 'react-native'
import { inject, observer } from "mobx-react";
import { NavigationBar, Tips, Icon, Toast, ElevationSpace } from "../../components/";
import { t } from "../../helper/utils/ScreenUtil";
import { DrawerStore } from "../../store/DrawerStore";
import { TodoStore } from "../../store/TodoStore";
import { translate } from "../../i18n";
import TodoList from "../../components/todo/TodoList";
import { toJS } from "mobx";

const styles = StyleSheet.create({
  anchorView: {
    backgroundColor: 'transparent',
    width: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    ...StyleSheet.absoluteFillObject,
  }
})
type Props = {
  drawer: DrawerStore
  todo: TodoStore
}
const isAndroid = Platform.OS === 'android'
const InboxTodoHeader = () => (
  <View>
    <ElevationSpace/>
    <Tips type={'inbox'}/>
  </View>
)

@inject('drawer', 'todo') @observer
class InboxTodo extends React.Component<Props, any> {
  menu: RefObject<View>

  constructor(props) {
    super(props)
    this.onMenuPress = this.onMenuPress.bind(this)
    this.menu = React.createRef<View>();
  }

  onMenuPress() {
    if (!isAndroid) {
      return
    }
    const node = findNodeHandle(this.menu.current) as any;
    const items = ['显示详细', '隐藏已完成', '排序', '分享', '编辑多个任务']
    UIManager.showPopupMenu(
      node,
      items,
      () => {},
      (_item: string, index: number | undefined) =>
      {
        if (index !== undefined) {
          Toast.show(`点击了:${items[index]}`)
        }
      }
    )
  }

  renderLeftBtn() {
    return (
      <Icon
        largeTouchArea
        onPress={this.props.drawer.toggleMenu}
        size={isAndroid ? t(20) : t(20)}
        name={isAndroid ? 'md-menu' : 'ios-menu'}
        type={'Ionicons'} color={'#333'}/>
    )
  }

  renderRightBtn() {
    return (
      <View>
        <Icon
          largeTouchArea
          onPress={this.onMenuPress}
          size={isAndroid ? t(20) : t(20)}
          name={isAndroid ? 'md-more' : 'ios-more'}
          type={'Ionicons'} color={'#333'}/>
        {/* We need this view as an anchor for drop down menu. findNodeHandle can
            find just view with width and height, even it needs backgroundColor
            ref: react-native-material-ui/src/Toolbar/RightElement.react.js line.186
        */}

        <View ref={this.menu} style={styles.anchorView}/>
      </View>
    )
  }

  render() {
    const { todo: { todos } } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationBar title={translate('inbox')} leftButton={this.renderLeftBtn()}
                       rightButton={this.renderRightBtn()}/>

        <TodoList data={toJS(todos)}
                  renderHeader={() => <InboxTodoHeader/>}/>
      </View>
    )
  }
}

export default InboxTodo
