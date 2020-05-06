import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile39226Navigator from '../features/UserProfile39226/navigator';
import Tutorial39225Navigator from '../features/Tutorial39225/navigator';
import NotificationList39197Navigator from '../features/NotificationList39197/navigator';
import Settings39196Navigator from '../features/Settings39196/navigator';
import Settings39188Navigator from '../features/Settings39188/navigator';
import UserProfile39186Navigator from '../features/UserProfile39186/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile39226: { screen: UserProfile39226Navigator },
Tutorial39225: { screen: Tutorial39225Navigator },
NotificationList39197: { screen: NotificationList39197Navigator },
Settings39196: { screen: Settings39196Navigator },
Settings39188: { screen: Settings39188Navigator },
UserProfile39186: { screen: UserProfile39186Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
