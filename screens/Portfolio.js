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
  const { name, country, totalImg, favColor } = route.params;

  // For change header style fo each component
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <Logo />,
      headerTitle: `Profil de ${name}`,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: favColor,
      },
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
      <Text style={globalStyles.text}>{favColor}</Text>
    </View>
  );
};

Portfolio.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      totalImg: PropTypes.number.isRequired,
      favColor: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Portfolio;
