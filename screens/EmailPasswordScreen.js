import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function EmailPasswordScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>EmailPassword Screen</Text>
      <Button title="Continue" onPress={() =>navigation.navigate("CompleteProfile")} />
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