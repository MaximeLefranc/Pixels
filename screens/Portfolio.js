import { View, Text, Image, Button, Platform, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles } from '../styles/AppStyles';
import { useEffect } from 'react';

// React navigation header buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Component
import MaterialIconsHeader from '../components/MaterialIconsHeader';

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
  const { name, country, totalImg, favColor, img, desc } = route.params;

  // For change header style fo each component
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <Logo />,
      headerTitle: `Profil de ${name}`,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: favColor,
      },
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title="info"
            iconName="info-outline"
            onPress={() => alert(`Portfolio de ${name}`)}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...globalStyles.profilInfos }}>
        <Image style={globalStyles.smallProfilImg} source={{ uri: img }} />
        <Text style={globalStyles.profileName}>{name}</Text>
      </View>
    </ScrollView>
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
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Portfolio;
