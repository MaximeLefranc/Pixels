// React Native
import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';

const TouchableImage = ({ onSelectPhoto, url, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={globalStyles.photoContainer}
      onPress={onSelectPhoto}
    >
      <ImageBackground style={globalStyles.bgPhoto} source={{ uri: url }}>
        <View style={globalStyles.photoTitle}>
          <Text style={globalStyles.photoTitleText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

TouchableImage.propTypes = {
  onSelectPhoto: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TouchableImage;
