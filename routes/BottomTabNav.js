// React bottom tabs navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack Navigation
import HomeStackNav from './HomeStackNav';

// Screen
import SelectedStackNav from './SelectedStackNav';

// Colors
import Colors from '../styles/Colors';
import { Ionicons } from '@expo/vector-icons';

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();

  const bottomTabNavOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
      } else if (route.name === 'Likes') {
        iconName = focused ? 'ios-thumbs-up' : 'ios-thumbs-up-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarInactiveTintColor: Colors.darkGrey,
    tabBarActiveTintColor: Colors.cliked,
    tabBarLabelStyle: {
      fontSize: 14,
    },
  });

  return (
    <Tab.Navigator screenOptions={bottomTabNavOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{ tabBarLabel: 'Accueil' }}
      />
      <Tab.Screen
        name="Likes"
        component={SelectedStackNav}
        options={{ tabBarLabel: "J'aime" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
