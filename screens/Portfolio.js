import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles } from '../styles/AppStyles';
import { useEffect } from 'react';

//? if i want displayed a logo in place to title header
// const Logo = () => {
//   return (
//     <Image
//       source={require('../assets/images/logo_camera.png')}
//       style={{ width: 30, height: 30 }}
//     />
//   );
// };

const Portfolio = ({ navigation, route }) => {
  const { name, country, totalImg } = route.params;

  // For change header style fo each component
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <Logo />,
      headerTitle: 'Accueil',
      headerTitleAlign: 'center',
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  );
};

Portfolio.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object,
};

export default Portfolio;
