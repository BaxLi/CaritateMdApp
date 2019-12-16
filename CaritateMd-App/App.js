/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <View style={styles.container}>
       <FontAwesomeIcon icon={ faCoffee } />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
// eslint-disable-next-line comma-dangle
});
