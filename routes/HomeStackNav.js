// React Native
import { Platform } from 'react-native';

// React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Portfolio from './../screens/Portfolio';
import Photo from './../screens/Photo';
import Home from './../screens/Home';

// Colors
import Colors from '../styles/Colors';
import defaultNavStyle from '../utils/defautlNavStyle';

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();

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
    <Stack.Navigator initialRouteName="Home" screenOptions={defaultNavStyle}>
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
