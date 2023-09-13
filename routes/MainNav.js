import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens

import HomeStackNav from './HomeStackNav';
import FaqStackNav from './FaqStackNav';
import Colors from '../styles/Colors';

const Drawer = createDrawerNavigator();

const MainNav = () => {
  const defaultDrawerOption = {
    headerShown: false,
    drawerHideStatusBarOnOpen: false,
    drawerStyle: {
      backgroundColor: Colors.drawer,
      width: '40%',
    },
    drawerType: 'back',
    drawerLabelStyle: {
      fontSize: 19,
    },
    drawerInactiveTintColor: Colors.white,
    drawerActiveTintColor: Colors.lightBrown,
    drawerActiveBackgroundColor: 'inherit',
  };
  return (
    <Drawer.Navigator screenOptions={defaultDrawerOption}>
      <Drawer.Screen name="Accueil" component={HomeStackNav} />
      <Drawer.Screen
        name="Faq"
        component={FaqStackNav}
        options={{ drawerLabel: 'FAQ' }}
      />
    </Drawer.Navigator>
  );
};

export default MainNav;
