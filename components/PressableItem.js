import { Image, Pressable, Text, View } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import PropTypes from 'prop-types';
import Colors from '../styles/Colors';

const PressableItem = ({ item, handleNavigate }) => {
  const { name, img, country, photos } = item;
  return (
    <Pressable
      // onPress={()=> navigation.navigate('Portfolio', item)};
      onPress={handleNavigate}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.cliked : Colors.white },
        globalStyles.profileItem,
      ]}
    >
      <Text style={globalStyles.titleText}>{name}</Text>
      <Image style={globalStyles.profileImg} source={{ uri: img }} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.infos}>{country}</Text>
        <Text style={globalStyles.infos}>{photos.length}</Text>
      </View>
    </Pressable>
  );
};

PressableItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    favColor: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photoDesc: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

export default PressableItem;
