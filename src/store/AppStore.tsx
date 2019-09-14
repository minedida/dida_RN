import { action, computed, observable, observe } from 'mobx'
import { Theme } from 'react-native-paper'
import { persist } from 'mobx-persist'
import {TodoTab, CalendarTab, SearchTab,
  SettingTab, TomatoTab, ClockinTab} from '../containers'
import { theme } from "../theme";
import { Toast } from "../components";
import { AppTabBarModel } from "../model";
import { translate } from "../i18n";
import { getCmpName } from "../helper/utils/Utils";


class AppStore {
  constructor() {
    observe(this, 'currentScreen', change => {
      const fabVisibleScreenArrays = ['TodoTab', 'CalendarTab', 'ClockinTab', 'SearchTab']
      this.fabVisible = fabVisibleScreenArrays.findIndex(v => v === change.newValue) > -1
    })
    observe(this, 'appTabs', change => {
      console.log('appTabs-change')
      console.log(change)
    })
  }

  @observable fabVisible: boolean = true
  @observable fabOpen: boolean = false

  @observable appTabs: Array<AppTabBarModel> = [
    { index: 0, cmp: TodoTab, show: true },
    { index: 1, cmp: CalendarTab, show: true },
    { index: 2, cmp: TomatoTab, show: true },
    { index: 3, cmp: ClockinTab, show: true },
    { index: 4, cmp: SearchTab, show: true },
    { index: 5, cmp: SettingTab, show: true }
  ]

  @persist('object')
  @observable appTheme: Theme = theme
  @observable currentScreen: string = ''
  @observable isNetworkConnected: boolean = true
  @observable languageTag: string = 'zh'

  @computed get tabMap(): { [index: string]: any } {
    const value = this.appTabs
    .reduce((p, c) => {
      if (c.show) {
        const name = getCmpName(c.cmp)
        p[name] = c.cmp;
      }
      return p;
    }, {})
    // console.log('AppStore-tabMap-value', value)
    return value;
  }

  @computed get tabRoutes() {
    return this.appTabs
    .filter(v => v.show)
    .reduce((p: any, c) => {
      const name = getCmpName(c.cmp)
      p.push({
        key: name,
        routeName: name,
        params: undefined,
      })
      return p;
    }, [])
  }

  @observable tabMap2 = {
    TodoMain: TodoTab,
    CalendarMain: CalendarTab,
    SettingMain: SettingTab,
  } as any;

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

  // 修改Theme的primary color
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

