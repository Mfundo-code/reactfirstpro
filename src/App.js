import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const App = () => {
  return(
    <View style={StyleSheet.container}>
      <Text style={style.text}>Hi How are you there</Text> 
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:  '#f2f2f2',
    height: '100vh',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default App;