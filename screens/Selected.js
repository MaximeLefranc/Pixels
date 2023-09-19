// React Native
import { Text, View, FlatList } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import NoData from '../components/NoData';
import TouchableImage from '../components/TouchableImage';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';
import { useCallback } from 'react';

const Selected = ({ navigation }) => {
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  const ListItem = ({ item }) => {
    const { photos, image, name } = item;

    const selectPhoto = useCallback(
      (photo) => {
        navigation.navigate('PhotoScreen', {
          url: photo.url,
          title: photo.title,
          desc: photo.photoDesc,
        });
      },
      [photos, navigation]
    );

    return (
      <View>
        {photos.map((photo) => (
          <View key={photo.id}>
            <TouchableImage
              url={photo.url}
              title={photo.title}
              onSelectPhoto={() => selectPhoto(photo)}
              authorImage={image}
              authorName={name}
            />
          </View>
        ))}
      </View>
    );
  };

  if (!selectedUsers.length) {
    return <NoData message="Vous n'avez pas encore sélectionné de profil." />;
  }
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={selectedUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

Selected.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Selected;
