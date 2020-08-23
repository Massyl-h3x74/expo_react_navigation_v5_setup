import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, AsyncStorage } from 'react-native';

export default AuthLoadingScreen = ({ navigation }) => {

  const {userToken, setUserToken } = useState(null);

  useEffect(() => {
    _bootstrapAsync();
  },[]);

  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');
    
  
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  return(
    <View style={styles.container}>
        <Text>AuthLoading Screen</Text>
        <ActivityIndicator />
        <Text>Loading ...</Text>
      </View>
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
