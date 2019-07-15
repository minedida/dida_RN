import { action, computed, observable } from 'mobx'
import { navigate } from "../navigation";
import { app } from "./AppStore";

export type DrawerItems = 'InboxTodo' |
  'TodayTodo' | 'AddTodo' | 'ManageTodo'| 'IconsPreview'

class DrawerStore {
  @observable showDrawer: boolean = false
  @observable selectedItem: DrawerItems = 'InboxTodo'
  @observable bounceBackOnOverdraw: boolean = false

  timer: any


  @computed get disableGestures() : boolean {
    return 'TodoTab' !== app.currentScreen
  }

  @action.bound
  onMenuStateChange(isOpen: boolean) {
    this.showDrawer = isOpen
  }

  @action.bound
  onMenuItemSelected(item: DrawerItems) {
    // navigate需要做缓存，当nav到A页面，记下A到key和content；nav到B页面，记下B的key和content；再nav到A页面，可以直接复用A的content
    // ref: https://github.com/react-navigation/react-navigation/issues/1486
    this.showDrawer = false
    if (item === 'AddTodo' || item === 'ManageTodo'){
      this.timer = setTimeout(() => navigate(item), 250)
      return
    }
    this.selectedItem = item

  }

  @action.bound
  toggleMenu() {
    this.showDrawer = !this.showDrawer
  }

}

const drawer = new DrawerStore()
export {
  drawer,
  DrawerStore
}
