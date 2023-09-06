import { StyleSheet, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const Photo = ({ navigation }) => {
  const handleReturnFirstScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <View>
        <Button title="Vers Home" onPress={handleReturnFirstScreen} />
      </View>
    </View>
  );
};

Photo.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'InriaBold',
  },
});

export default Photo;
