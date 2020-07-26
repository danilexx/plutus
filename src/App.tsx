import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplash from './components/AnimatedSplash';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './pages/Routes';

const App = () => {
  const [isReady, toggle] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);
  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter.ttf'),
  });
  const _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
    // const images = [
    //   require('../assets/icon.png'),
    //   require('../assets/favicon.png'),
    // ];

    // const cacheImages = images.map((image) => {
    //   return Asset.fromModule(image).downloadAsync();
    // });
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    toggle(true);
  };

  if (!isReady) {
    return <AnimatedSplash onLoad={_cacheResourcesAsync} />;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

// export default function App() {

//   if (!loaded) {
//     return null;
//   }
//   return <Main />;
// }

registerRootComponent(App);
