import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens

import HomeStackNav from './HomeStackNav';
import FaqStackNav from './FaqStackNav';

const Drawer = createDrawerNavigator();

const MainNav = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Accueil" component={HomeStackNav} />
      <Drawer.Screen name="Faq" component={FaqStackNav} />
    </Drawer.Navigator>
  );
};

export default MainNav;
