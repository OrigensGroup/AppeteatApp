import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={() => (
            <Wrapper>
              <Title>Hello World</Title>
            </Wrapper>
          )}
        />
        <Tab.Screen
          name='Settings'
          component={() => (
            <Wrapper>
              <Title>Hello Settings</Title>
            </Wrapper>
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
