// React Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import FaqStackNav from './FaqStackNav';
import Colors from '../styles/Colors';
import BottomTabNav from './BottomTabNav';

// Component
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const MainNav = () => {
  const defaultDrawerOptions = ({ route }) => ({
    drawerIcon: ({ focused, color, size }) => {
      let iconName;
      size = 20;
      if (route.name === 'Accueil') {
        iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
      } else if (route.name === 'Faq') {
        size = 24;
        iconName = focused ? 'help-circle' : 'help-circle-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    drawerHideStatusBarOnOpen: false,
    drawerStyle: {
      backgroundColor: Colors.darkGrey,
      width: '48%',
    },
    drawerType: 'back',
    drawerLabelStyle: {
      fontSize: 19,
    },
    drawerInactiveTintColor: Colors.white,
    drawerActiveTintColor: Colors.cliked,
    drawerActiveBackgroundColor: 'inherit',
  });
  return (
    <Drawer.Navigator screenOptions={defaultDrawerOptions}>
      <Drawer.Screen name="Accueil" component={BottomTabNav} />
      <Drawer.Screen
        name="Faq"
        component={FaqStackNav}
        options={{ drawerLabel: 'FAQ' }}
      />
    </Drawer.Navigator>
  );
};

export default MainNav;
