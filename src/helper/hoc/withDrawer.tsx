import React from 'react'
import SideMenu from 'react-native-side-menu'
import stores from "../../store";
import DrawerPanel from "../../containers/drawer/DrawerPanel";

export default function addDrawer(WrappedComponent: any) {
  return class AddDrawerHOC extends React.Component {
    render() {
      const {
        drawer: {
          showDrawer,
          onMenuStateChange, disableGestures
        } } = stores
      const menu = <DrawerPanel/>
      return (
        <SideMenu
          disableGestures={disableGestures}
          menu={menu}
          isOpen={showDrawer}
          onChange={onMenuStateChange}
          bounceBackOnOverdraw={false}
        >
          <WrappedComponent/>
        </SideMenu>
      )
    }
  }
}
