import { create } from 'mobx-persist'
import { app } from "./AppStore";
import { AsyncStorage } from "react-native";

const hydrate = create({ storage: AsyncStorage })


export default async function initPersist(): Promise<any> {
  await hydrate('app', app);
  return Promise.resolve()
}
