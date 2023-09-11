import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens
import Home from '../screens/Home';
import Faq from '../components/Faq';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Faq" component={Faq} />
    </Drawer.Navigator>
  );
}
