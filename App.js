import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper><Title>Hello World</Title></Wrapper>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.View`
  padding: 4px;
  background: papayawhip;
`;