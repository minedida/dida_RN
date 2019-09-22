import React from 'react'
import { UIManager, LayoutAnimation, View, Dimensions, Vibration } from 'react-native'
import { Divider } from 'react-native-paper'
import { TodoStore } from "../../store/TodoStore";
import { inject, observer } from "mobx-react";
import { TodoModel } from "../../model";
import Row from "./Row";
// import SwipeableContainer from '../../../demo/sort-and-swipe/react-native-sort-and-swipe-list/src/SwipeableContainer'
import SortableList from '../../libs/react-native-sortable-list/src/SortableList';
import { AppStore } from "../../store/AppStore";
import SwipeabTodoItem from "./SwipeabTodoItem";
// import SortableList from '../../../demo/sort-and-swipe/react-native-sort-and-swipe-list/src/SortableList'

type Props = {
  todo?: TodoStore
  app?: AppStore
  data: Array<TodoModel>
  headerTxt?: string,
  renderHeader?: () => void,
}


UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
const window = Dimensions.get("window");


@inject('todo', 'app')
@observer
class TodoList extends React.Component<Props, {
  scrollEnabled: boolean
  rowHasMoved: boolean
}> {
  openRowKey = "-1";
  rowsRef = {};
  constructor(props) {
    super(props)
    this.state = {
      scrollEnabled: true,
      rowHasMoved: false
    }
    this.renderItem = this.renderItem.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.onItemCheck = this.onItemCheck.bind(this)
    this.onActivateRow = this.onActivateRow.bind(this)
    this.onReleaseRow = this.onReleaseRow.bind(this)
  }

  UNSAFE_componentWillUpdate(): void {
    LayoutAnimation.easeInEaseOut()
  }

  onItemCheck(id: number) {
    this.props.todo!.checkTodo(id)
  }

  renderSeparator(index: number) {
    if (index !== this.props.data.length) {
      return <Divider/>
    }
    return null
  }
  renderHeader() {
    return this.props.renderHeader && this.props.renderHeader()
  }

  onActivateRow() {
    Vibration.vibrate([0, 30], false)
    this.props.app!.setFabVisible(false)
  }
  onReleaseRow() {
    this.props.app!.setFabVisible(true)
  }

  // -----------------------------
  myOnMove = async () => {
    await this.setState({rowHasMoved: true});
  }
  swipeGestureBegan = () => {
    this.setState({scrollEnabled: false});
  };
  rowDoneMoving = async () => {
    await this.setState({rowHasMoved: false});
  };
  onRowOpen = key => {
    this.openRowKey = key;

    // Close all other rows when one is opened.
    let closeRowKey = 0;
    for (let i = 0; i < this.props.data.length; i++) {
      closeRowKey = i;
      if (parseInt(this.openRowKey, 10) !== closeRowKey) {
        const rowRef = this.rowsRef[i.toString()];
        rowRef.closeRow();
      }
    }
    this.setState({scrollEnabled: true});
  }
  onRowClose = async key => {
    if (this.openRowKey === key) {
      await this.setState({scrollEnabled: true});
    }
    this.setState({scrollEnabled: true});
  };
  renderItem = (datas: {key: number, data: TodoModel, disabled: boolean, active: boolean, index: number}) => {
    const { data, ...rest } = datas
    const adb = { ...rest, item: datas.data }
    return <Row {...adb} onItemCheck={this.onItemCheck}/>;
  }

  renderList() {
    return (
      <SortableList
        manualActivateRows
        renderHeader={this.renderHeader}
        data={this.props.data}
        sortingEnabled={true}
        renderSeparator={this.renderSeparator}
        onActivateRow={this.onActivateRow}
        onReleaseRow={this.onReleaseRow}
        renderRow={this.renderItem}/>
    )
  }

  render() {
    const { data } = this.props
    if (data.length === 0)
      return null
    return this.renderList()
  }
}

export default TodoList
