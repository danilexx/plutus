import React from 'react';
import { registerRootComponent } from 'expo';
import Main from './pages/main';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return <Main />;
}

registerRootComponent(App);
