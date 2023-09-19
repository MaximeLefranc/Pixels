// React-Native
import { Image } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';

const ProfileImage = ({ url, name }) => {
  return (
    <Image
      style={globalStyles.imageProfile}
      source={{ uri: url }}
      title={`image de profil: ${name}`}
    />
  );
};

ProfileImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProfileImage;
