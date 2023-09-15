// React Native
import { ScrollView, View, Image, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';
import { useEffect } from 'react';

const Photo = ({ navigation, route }) => {
  const { url, title, desc } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title.toUpperCase(),
    });
  }, [title]);

  return (
    <ScrollView style={globalStyles.container}>
      <Image style={globalStyles.selectedImage} source={{ uri: url }} />
      <View style={globalStyles.photoDescription}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.textDescription}>{desc}</Text>
        <Text style={globalStyles.textDescription}>{desc}</Text>
      </View>
    </ScrollView>
  );
};

Photo.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.exact({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Photo;
