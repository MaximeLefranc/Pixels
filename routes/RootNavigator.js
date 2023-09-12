import { NavigationContainer } from '@react-navigation/native';
import MainNav from './MainNav';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
