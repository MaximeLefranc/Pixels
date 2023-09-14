// React bottom tabs navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack Navigation
import HomeStackNav from './HomeStackNav';

// Screen
import SelectedStackNav from './SelectedStackNav';

// Colors
import Colors from '../styles/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  const isAndroid = Platform.OS === 'android';

  const bottomTabNavDefaultOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
      } else if (route.name === 'Favoris') {
        iconName = focused ? 'ios-thumbs-up' : 'ios-thumbs-up-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarInactiveTintColor: isAndroid ? Colors.white : Colors.darkGrey,
    tabBarActiveTintColor: isAndroid ? Colors.white : Colors.cliked,
    tabBarLabelStyle: {
      fontSize: 14,
    },
    tabBarStyle: {
      backgroundColor: isAndroid ? Colors.lightBrown : '',
    },
  });

  const favorisBottomTabNavOptions = {
    tabBarLabel: 'Sélection',
    tabBarStyle: {
      backgroundColor: isAndroid ? Colors.darkGrey : '',
    },
  };

  return (
    <Tab.Navigator screenOptions={bottomTabNavDefaultOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{ tabBarLabel: 'Accueil' }}
      />
      <Tab.Screen
        name="Favoris"
        component={SelectedStackNav}
        options={favorisBottomTabNavOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
