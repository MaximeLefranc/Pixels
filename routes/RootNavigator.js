import { NavigationContainer } from '@react-navigation/native';
import HomeStackNav from './HomeStackNav';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
