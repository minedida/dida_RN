import * as Sentry from "@sentry/react-native";

class SentryUtil {

  static init() {
    if (!__DEV__) {
      Sentry.init({
        dsn: 'https://7b1389ba41cf4101ab388f762673cd84@sentry.io/1504123'
      })
    }
  }
}

export default SentryUtil
