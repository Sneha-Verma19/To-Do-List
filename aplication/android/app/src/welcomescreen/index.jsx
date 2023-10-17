import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Sneha how are you</Text>
      <Button style={styles.buttonnn} title='hello' onPress={() => alert('Hello, Sneha! here shivanshu')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'red'

  },
  buttonnn:{
    backgroundColor:'red',
    borderRadius:30
  }
});

export default Welcome;
