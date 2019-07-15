import React from 'react'
import { UIManager, LayoutAnimation } from 'react-native'
import TodoList from "./TodoList";

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class CombineTodoList extends React.Component<any> {

  componentWillUpdate(): void {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    return <TodoList {...this.props} data={this.props.uncheckedList}/>
  }
}

export default CombineTodoList
