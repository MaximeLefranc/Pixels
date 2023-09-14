import { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import { globalStyles } from '../styles/AppStyles';

// Component
import PressableItems from '../components/PressableItem';
import MenuDropboxComponent from '../components/MenuDropboxComponent';

// Data
import { DATA } from '../data/usersData';

const Home = ({ navigation }) => {
  const handleNavigate = useCallback(
    (item) => {
      navigation.navigate('Portfolio', {
        name: item.name,
        country: item.country,
        totalImg: item.photos.length,
        favColor: item.favColor,
        img: item.img,
        desc: item.desc,
      });
    },
    [DATA]
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Accueil',
      headerLeft: () => (
        <MenuDropboxComponent toggleMenu={() => navigation.toggleDrawer()} />
      ),
    });
  });

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableItems
            item={item}
            handleNavigate={() => handleNavigate(item)}
          />
        )}
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
