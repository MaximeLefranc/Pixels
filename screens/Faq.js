import { DrawerActions } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIconsHeader from '../components/MaterialIconsHeader';

const Faq = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'FAQ',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </HeaderButtons>
      ),
    });
  });
  return <Text>Je suis sur la page Faq</Text>;
};

export default Faq;
