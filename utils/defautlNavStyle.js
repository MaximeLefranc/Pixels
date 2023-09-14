import Colors from '../styles/Colors';
import { CardStyleInterpolators } from '@react-navigation/stack';

const defaultNavStyle = {
  headerStyle: {
    //? if i want do differents changes depending mobile platform
    // backgroundColor: Platform.OS === 'android' ? Colors.lightBrown : Colors.lightBrown,
    backgroundColor: Colors.lightBrown,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default defaultNavStyle;
