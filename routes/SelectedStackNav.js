// React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Selected from '../screens/Selected';
import Photo from '../screens/Photo';

// Utils
import defaultNavStyle from '../utils/defautlNavStyle';
import { Platform } from 'react-native';
import Colors from '../styles/Colors';

const SelectedStackNav = () => {
  const Stack = createNativeStackNavigator();
  const isAndroid = Platform.OS === 'android';

  const selectedOptions = {
    headerStyle: {
      backgroundColor: isAndroid ? Colors.darkGrey : Colors.lightBrown,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultNavStyle,
        ...selectedOptions,
      }}
    >
      <Stack.Screen
        name="SelectedScreen"
        component={Selected}
        options={{ headerTitle: 'Favoris' }}
      />
      <Stack.Screen
        name="PhotoScreen"
        component={Photo}
        options={{ headerTitle: 'Photo' }}
      />
    </Stack.Navigator>
  );
};

export default SelectedStackNav;
