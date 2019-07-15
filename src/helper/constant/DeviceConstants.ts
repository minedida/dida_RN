import ExtraDimensions from 'react-native-extra-dimensions-android';
import DeviceInfo from 'react-native-device-info';
import { Platform, Dimensions } from 'react-native'
import { format } from 'date-fns'

import { d, isIphoneX } from "../utils/ScreenUtil";

const { height, width } = Dimensions.get('window')
const isAndroid = Platform.OS === 'android'
const isIOS = Platform.OS === 'ios'
const DeviceSize = {
  device_height: isAndroid ? ExtraDimensions.get('REAL_WINDOW_HEIGHT') : height,
  device_width: isAndroid ? ExtraDimensions.get('REAL_WINDOW_WIDTH') : width ,
  status_bar_height: isAndroid ? ExtraDimensions.get('STATUS_BAR_HEIGHT') : (
    isIphoneX() ? d(44) : d(20)
  ),
  soft_menu_bar_height: isAndroid ? ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT') : 0,
  smart_bar_height: isAndroid ? ExtraDimensions.get('SMART_BAR_HEIGHT') : 0,
  bottom_bar_height: isIphoneX() ? d(34) : 0,
  fake_status_bar_height_for_android: isAndroid ? ExtraDimensions.get('STATUS_BAR_HEIGHT') : 0,
  fake_status_bar_padding_for_ios: isIOS ? ( isIphoneX() ? d(44) : d(20)) : 0,
}


const DeviceInfos = {
  buildNumber: DeviceInfo.getBuildNumber(),
  OS: Platform.OS,
  brand: DeviceInfo.getBrand(),
  deviceId: DeviceInfo.getDeviceId(),
  deviceName: DeviceInfo.getDeviceName(),
  firstInstallTime: format(DeviceInfo.getFirstInstallTime(), 'YYYY-MM-DD HH:mm:ss'),
  lastUpdateTime: format(DeviceInfo.getLastUpdateTime(), 'YYYY-MM-DD HH:mm:ss'),
  manufacturer: DeviceInfo.getManufacturer(),
  model: DeviceInfo.getModel(),
  version: DeviceInfo.getReadableVersion(),
  systemVersion: DeviceInfo.getSystemVersion(),
  uniqueId: DeviceInfo.getUniqueID(),
  isEmulator: DeviceInfo.isEmulator()
}


export {
  DeviceSize,
  DeviceInfos
}
