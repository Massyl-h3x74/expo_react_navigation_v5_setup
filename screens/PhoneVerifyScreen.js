import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PhoneVerifyScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>PhoneVerify Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("PhoneVerify")} />
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