import { action, computed, observable, observe } from 'mobx'
import { Theme } from 'react-native-paper'
import { persist } from 'mobx-persist'
import {TodoTab, CalendarTab, SearchTab,
  SettingTab, TomatoTab, ClockinTab} from '../containers'
import { theme } from "../theme";
import { Toast } from "../components";
import { AppTabBarModel } from "../model";
import { translate } from "../i18n";



class AppStore {
  constructor() {
    observe(this, 'currentScreen', change => {
      const fabVisibleScreenArrays = ['TodoTab', 'CalendarTab', 'ClockinTab', 'SearchTab']
      this.fabVisible = fabVisibleScreenArrays.findIndex(v => v === change.newValue) > -1
    })
  }

  @observable fabVisible: boolean = true
  @observable fabOpen: boolean = false
  @observable appTabs: Array<AppTabBarModel> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: false },
    { index: 3, cmp: ClockinTab, show: false },
    { index: 4, cmp: SearchTab, show: false },
    { index: 5, cmp: SettingTab, show: true }
  ]
  @persist('object')
  @observable appTheme: Theme = theme
  @observable currentScreen: string = ''
  @observable isNetworkConnected: boolean = true
  @observable languageTag: string = 'zh'

  @computed get tabMap(): { [index: string]: any } {
    return this.appTabs.reduce((p, c) => {
      if (c.show) {
        // get injected component by mobx displayName or plain Component's name
        let name = c.cmp.displayName || c.cmp.name
        console.log(`AppStore-reduce-name:\n:${JSON.stringify(name)}`)
        if (name.indexOf('inject') > -1) {
          name = name.split('-')[1];
          p[name] = c.cmp;
        } else {
          // get a plain Component displayName
          p[name] = c.cmp;
        }
      }
      return p;
    }, {})
  }

  @action.bound
  setCurrentScreen(currentScreen) {
    this.currentScreen = currentScreen
    return this
  }

  @action.bound
  setFabVisible(visible: boolean) {
    this.fabVisible = visible
    return this
  }

  @action.bound
  setFabOpen(visible: boolean) {
    this.fabOpen = visible
    return this
  }

  @action.bound
  setLanguageTag(languageTag: string) {
    this.languageTag = languageTag
    return this
  }

  @action.bound
  setNetworkConnected(isConnected: boolean) {
    Toast.show(`${translate('hello')}:${isConnected}`)
    this.isNetworkConnected = isConnected
    return this
  }

  @action.bound
  changePrimaryColor(color: string) {
    this.appTheme = {
      ...this.appTheme,
      colors: {
        ...this.appTheme.colors,
        primary: color
      }
    }
  }


  @action.bound
  changeTabs(index: number): Array<AppTabBarModel> {
    return this.appTabs = this.appTabs.map(
      (item, i) =>
        i === index ? { ...item, show: !item.show } : item
    )
  }

}

const app = new AppStore()

export {
  app,
  AppStore
}

