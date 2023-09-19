// React-Native
import { Image } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

const ProfileImage = ({ url, authorName }) => {
  return <Image source={{ uri: url }} title={`image de profil: ${name}`} />;
};

ProfileImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProfileImage;
