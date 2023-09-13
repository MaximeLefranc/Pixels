// React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Selected from '../screens/Selected';

// Utils
import defaultNavStyle from '../utils/defautlNavStyle';

const SelectedStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={defaultNavStyle}>
      <Stack.Screen
        name="SelectedScreen"
        component={Selected}
        options={{ headerTitle: 'Selected' }}
      />
    </Stack.Navigator>
  );
};

export default SelectedStackNav;
