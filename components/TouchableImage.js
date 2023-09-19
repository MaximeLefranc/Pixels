// React Native
import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Component
import ProfileImage from './ProfileImage';

// Style
import { globalStyles } from '../styles/AppStyles';

const TouchableImage = ({
  onSelectPhoto,
  url,
  title,
  authorImage,
  authorName,
  showAuthor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={globalStyles.photoContainer}
      onPress={onSelectPhoto}
    >
      <ImageBackground style={globalStyles.bgPhoto} source={{ uri: url }}>
        <View style={globalStyles.photoTitle}>
          {showAuthor && <ProfileImage url={authorImage} name={authorName} />}
          <Text style={globalStyles.photoTitleText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

TouchableImage.defaultProps = {
  showAuthor: false,
  authorImage: '',
  authorName: '',
};

TouchableImage.propTypes = {
  onSelectPhoto: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  showAuthor: PropTypes.bool,
};

export default TouchableImage;
