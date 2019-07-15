import firHelper from "./fir";
import { Alert, NativeModules, Platform } from "react-native";
import { DeviceInfos } from "../constant/DeviceConstants";
import { FirVersionModel } from "../../model";
import { Toast } from "../../components";

async function checkUpdate() {
  if (Platform.OS === 'ios') {
    return
  }
  try {
    const result = await firHelper.queryVersion();
    const data: FirVersionModel = result.data
    if (Number(data.version) > Number(DeviceInfos.buildNumber)) {
      showDialog(data)
    }
  } catch (e) {
    Toast.show('检查更新失败')
  }
}
function showDialog(data: FirVersionModel) {
  Alert.alert(`升级提示`, `发现新版本`,
    [
      { text: '取消', onPress: () => {} },
      { text: '升级', onPress: () =>
        {
          NativeModules.UpgradeModule.update(data.direct_install_url);
        }
      }])
}


export {
  checkUpdate
}
