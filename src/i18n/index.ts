import { I18nManager } from "react-native";
import i18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import memoize from "lodash.memoize";



// 1.lazy load translate files
const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./locales/en.json"),
  zh: () => require("./locales/zh.json")
}

// 3.Package i18n.t() -> translate()
const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
)

// 2. init config
const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "zh", isRTL: false }

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback

  // clear translation cache
  translate.cache.clear()
  // update layout direction
  I18nManager.forceRTL(isRTL)

  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() }
  i18n.locale = languageTag
  return languageTag
}

export {
  setI18nConfig,
  translate
}
