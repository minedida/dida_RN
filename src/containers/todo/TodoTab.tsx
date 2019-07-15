import React from 'react'
import { inject, observer } from "mobx-react";
import { DrawerItems, DrawerStore } from "../../store/DrawerStore";
import { TodoTabNavigationOptions } from "../../navigation/TabBarNavigationOptions";
import InboxTodo from "../drawer/InboxTodo";
import TodayTodo from "../drawer/TodayTodo";
import AddTodo from "../drawer/AddTodo";
import ManageTodo from "../drawer/ManageTodo";
import IconsPreview from "./IconsPreview";

type Props = {
  drawer: DrawerStore
}

const DrawerItemComponents = {
  InboxTodo,
  TodayTodo,
  AddTodo,
  ManageTodo,
  IconsPreview
}

@inject('drawer') @observer
class TodoTab extends React.Component<Props> {
  static navigationOptions = TodoTabNavigationOptions;

  render() {
    const SelectedItem: DrawerItems = this.props.drawer!.selectedItem
    const DrawerItemComponent = DrawerItemComponents[SelectedItem] as any;
    return <DrawerItemComponent/>
  }
}

export default TodoTab
