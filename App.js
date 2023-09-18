import { StatusBar, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

//fonts
import InriaRegular from './assets/fonts/InriaSans-Regular.ttf';
import InriaBold from './assets/fonts/InriaSans-Bold.ttf';
import InriaItalic from './assets/fonts/InriaSans-Italic.ttf';

// Navigation Component
import HomeStackNav from './routes/HomeStackNav';
import RootNavigator from './routes/RootNavigator';

// Store
import { Provider } from 'react-redux';
import store from './redux/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    InriaRegular,
    InriaBold,
    InriaItalic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    if (error) {
      console.error(error);
      return null; // Error component
    }
    return null; // Error component
  }

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
