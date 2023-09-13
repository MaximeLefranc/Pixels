import { useEffect } from 'react';
import { Text } from 'react-native';
import MenuDropboxComponent from '../components/MenuDropboxComponent';

const Faq = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'FAQ',
      headerLeft: () => (
        <MenuDropboxComponent toggleMenu={() => navigation.toggleDrawer()} />
      ),
    });
  });
  return <Text>Je suis sur la page Faq</Text>;
};

export default Faq;
