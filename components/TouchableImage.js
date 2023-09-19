// React Native
import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';
import ProfileImage from './ProfileImage';

const TouchableImage = ({
  onSelectPhoto,
  url,
  title,
  authorImage,
  authorName,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={globalStyles.photoContainer}
      onPress={onSelectPhoto}
    >
      <ImageBackground style={globalStyles.bgPhoto} source={{ uri: url }}>
        {/* {authorImage && <ProfileImage url={authorImage} name={authorName} />} */}
        <View style={globalStyles.photoTitle}>
          <Text style={globalStyles.photoTitleText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

TouchableImage.defaultProps = {
  authorImage: '',
  authorName: '',
};

TouchableImage.propTypes = {
  onSelectPhoto: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
};

export default TouchableImage;
