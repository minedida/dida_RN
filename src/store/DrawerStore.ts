import { action, computed, observable } from 'mobx'
import { closeDrawer, navigate } from "../navigation";
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
    if (item === 'AddTodo' || item === 'ManageTodo'){
      navigate(item)
      return
    }
    closeDrawer()
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
