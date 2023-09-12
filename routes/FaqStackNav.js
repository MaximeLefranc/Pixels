// React-Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Faq from './../screens/Faq';

// Utils
import defaultNavStyle from '../utils/defautlNavStyle';

const FaqStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={defaultNavStyle}>
      <Stack.Screen name="FaqScreen" component={Faq} />
    </Stack.Navigator>
  );
};

export default FaqStackNav;
