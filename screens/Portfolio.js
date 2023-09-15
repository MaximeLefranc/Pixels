import { View, Text, Image, Button, Platform, ScrollView } from 'react-native';
import { useCallback, useEffect } from 'react';

// React navigation header buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Component
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import TouchableImage from '../components/TouchableImage';

// PropType
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';

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
  const { name, country, totalImg, favColor, img, desc, photos } = route.params;

  const selectPhoto = useCallback(
    (photo) => {
      navigation.navigate('Photo', {
        url: photo.url,
        title: photo.title,
        desc: photo.photoDesc,
      });
    },
    [photos]
  );

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
      <View style={globalStyles.profilDescription}>
        <Text style={globalStyles.titleBioText}>Bio :</Text>
        <Text style={globalStyles.textBio}>{desc}</Text>
      </View>
      <View>
        {photos.map((photo) => (
          <TouchableImage
            key={photo.id}
            url={photo.url}
            title={photo.title}
            onSelectPhoto={() => selectPhoto(photo)}
          />
        ))}
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
      photos: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          photoDesc: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }),
  }).isRequired,
};

export default Portfolio;
