import Colors from '../styles/Colors';

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
};

export default defaultNavStyle;
