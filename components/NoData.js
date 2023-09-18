import { ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';

const NoData = ({ message }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_1280.jpg',
      }}
      style={globalStyles.emptyMsgWrapper}
    >
      <Text style={globalStyles.emptyMsgText}>{message}</Text>
    </ImageBackground>
  );
};

NoData.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoData;
