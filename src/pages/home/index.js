import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Fernando T. Frantz" />
        <Balance gains="5,645,45" expenses="2,645,12"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
