import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button style={styles.button} title="Login" onPress={() =>navigation.navigate("Login")} />
      <Button style={styles.button} title="Register" onPress={() =>navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal :20,
    paddingHorizontal :20,
  }
});