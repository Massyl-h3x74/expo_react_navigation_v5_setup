import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CompleteProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>CompleteProfile Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("AddBankAccount")} />
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