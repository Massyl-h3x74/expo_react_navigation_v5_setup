import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PhoneRegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>PhoneRegister Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("EmailPasswordRegister")} />
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