// React Native
import { Platform } from 'react-native';

// React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Drawer Component
import DrawerNav from './DrawerNav';

// Screens
import Home from './../screens/Home';
import Portfolio from './../screens/Portfolio';
import Photo from './../screens/Photo';

// Colors
import Colors from '../styles/Colors';

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();

  const defaultOptions = {
    headerStyle: {
      //? if i want do differents changes depending mobile platform
      // backgroundColor: Platform.OS === 'android' ? Colors.lightBrown : Colors.lightBrown,
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  const homeOptions = {
    headerTitle: 'Accueil',
    // headerStyle: {
    //   backgroundColor: Colors.lightBrown,
    // },
  };

  const portfolioOptions = {
    title: 'Profil',
    // headerStyle: {
    //   backgroundColor: Colors.lightBrown,
    // },
  };

  const photoOptions = {
    title: 'Photo',
    // headerStyle: {
    //   backgroundColor: Colors.lightBrown,
    // },
  };

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={defaultOptions}>
      <Stack.Screen name="drawer" component={DrawerNav} />
      <Stack.Screen name="Home" component={Home} options={homeOptions} />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={portfolioOptions}
      />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
