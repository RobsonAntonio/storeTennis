import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/router';
import AppLoading from 'expo-app-loading'
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';



export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes />

    </>
  );
}
