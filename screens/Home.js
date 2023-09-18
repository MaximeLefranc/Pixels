import { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

// Redux
import { useSelector } from 'react-redux';

// Styles
import { globalStyles } from '../styles/AppStyles';

// Component
import PressableItems from '../components/PressableItem';
import MenuDropboxComponent from '../components/MenuDropboxComponent';
import NoData from '../components/NoData';

const Home = ({ navigation }) => {
  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );
  const handleNavigate = useCallback(
    (item) => {
      navigation.navigate('Portfolio', {
        id: item.id,
        name: item.name,
        country: item.country,
        totalImg: item.photos.length,
        favColor: item.favColor,
        img: item.img,
        desc: item.desc,
        photos: item.photos,
      });
    },
    [selectedCategories]
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Accueil',
      headerLeft: () => (
        <MenuDropboxComponent toggleMenu={() => navigation.toggleDrawer()} />
      ),
    });
  });

  if (selectedCategories.length === 0) {
    return <NoData message="Pas d'utilisateur trouvé avec cette catégorie" />;
  }
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={selectedCategories}
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
