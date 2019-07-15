import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  }
}

const ignores = [
  'You should only render one navigator explicitly in your app',
  'Async Storage has been extracted from react-native core and will be removed in a future release',
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  'Require cycle',
  'NetInfo has been extracted from react-native core and will be removed in a future release'
]
YellowBox.ignoreWarnings(ignores)
// todo async-storage、NetInfo


AppRegistry.registerComponent(appName, () => App);
