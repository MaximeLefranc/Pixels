import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles } from '../styles/AppStyles';

const Portfolio = ({ navigation, route }) => {
  const { name, country, totalImg } = route.params;
  console.log(navigation);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  );
};

Portfolio.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object,
};

export default Portfolio;
