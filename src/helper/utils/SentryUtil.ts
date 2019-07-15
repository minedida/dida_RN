import { Sentry } from 'react-native-sentry'

class SentryUtil {

  static init() {
    if (!__DEV__) {
      Sentry.config('https://7b1389ba41cf4101ab388f762673cd84@sentry.io/1504123').install();
    }
  }
}

export default SentryUtil
