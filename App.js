import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

//fonts
import InriaRegular from './assets/fonts/InriaSans-Regular.ttf';
import InriaBold from './assets/fonts/InriaSans-Bold.ttf';
import InriaItalic from './assets/fonts/InriaSans-Italic.ttf';

// Navigation
import HomeStackNav from './routes/HomeStackNav';

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <HomeStackNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
