import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial220164Navigator from '../features/Tutorial220164/navigator';
import NotificationList220136Navigator from '../features/NotificationList220136/navigator';
import Settings220135Navigator from '../features/Settings220135/navigator';
import Settings220127Navigator from '../features/Settings220127/navigator';
import UserProfile220125Navigator from '../features/UserProfile220125/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial220164: { screen: Tutorial220164Navigator },
NotificationList220136: { screen: NotificationList220136Navigator },
Settings220135: { screen: Settings220135Navigator },
Settings220127: { screen: Settings220127Navigator },
UserProfile220125: { screen: UserProfile220125Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
