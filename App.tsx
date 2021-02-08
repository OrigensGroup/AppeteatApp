import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Wrapper>
      <Title>Hello World</Title>
    </Wrapper>
  );
}

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.View`
  padding: 4px;
  background: papayawhip;
`;
