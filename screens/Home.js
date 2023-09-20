// Recat Native
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, View, Text } from 'react-native';

// React-Navigation
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// Redux
import { useSelector } from 'react-redux';

// Component
import PressableItems from '../components/PressableItem';
import MenuDropboxComponent from '../components/MenuDropboxComponent';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import Settings from '../components/Settings';

// Material Icons
import { MaterialIcons } from '@expo/vector-icons';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import { globalStyles } from '../styles/AppStyles';

const Home = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );

  const handleSettingsModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title="Réglages"
            iconName="settings"
            onPress={handleSettingsModal}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <View style={globalStyles.container}>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onPressOut={handleSettingsModal}
      >
        <View style={globalStyles.modalBody}>
          <MaterialIcons
            style={globalStyles.modalClose}
            name="close"
            size={24}
            onPress={handleSettingsModal}
          />
          <Settings toggleModal={handleSettingsModal} />
        </View>
      </Modal>
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
