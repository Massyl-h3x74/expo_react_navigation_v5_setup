import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//React Navigation v5
import { NavigationContainer } from '@react-navigation/native';


import RootNavigator from './navigation/RootNavigator';


export default function App() {
  
  const [userToken, setUserToken ] = useState(null);

  
  return (
    <NavigationContainer>
        <RootNavigator userToken={userToken}/>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
