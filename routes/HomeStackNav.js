// Screens
import Home from './../screens/Home';
import Portfolio from './../screens/Portfolio';
import Photo from './../screens/Photo';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Colors
import Colors from '../styles/Colors';

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();

  const defaultOptions = {
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  const homeOptions = {
    title: 'Accueil',
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={defaultOptions}>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={portfolioOptions}
        />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNav;
