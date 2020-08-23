import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AddBankAccountScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>AddBankAccount Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("SecurityCode")} />
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