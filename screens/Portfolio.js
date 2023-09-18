import { View, Text, Image, Button, Platform, ScrollView } from 'react-native';
import { useCallback, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// React navigation header buttons
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Component
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import TouchableImage from '../components/TouchableImage';

// PropType
import PropTypes from 'prop-types';

// Actions type and creator
import {
  actionUserSelection,
  actionUserUnselection,
} from '../redux/actions/usersActions';

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
  const { name, country, totalImg, favColor, img, desc, photos, id } =
    route.params;

  const dispatch = useDispatch();

  const isOneUserSelected = useSelector((state) => {
    const selectedUsers = state.users.selectedUsers;
    const isSelected = selectedUsers.find((user) => user.id === id);
    if (isSelected) {
      return true;
    }
    return false;
  });

  const toggleSelectUser = useCallback(() => {
    if (isOneUserSelected) {
      dispatch(actionUserUnselection(parseInt(id)));
    } else {
      dispatch(actionUserSelection(parseInt(id)));
    }
  }, [isOneUserSelected]);

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
          <Item
            title="Sélectionner"
            iconName={isOneUserSelected ? 'thumb-up-alt' : 'thumb-up-off-alt'}
            onPress={toggleSelectUser}
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
      id: PropTypes.string.isRequired,
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
