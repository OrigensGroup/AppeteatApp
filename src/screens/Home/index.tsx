import React from 'react';
import { Text } from 'react-native';

import { HomepageContainer } from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <Text>Example</Text>
    </HomepageContainer>
  );
};

export default Home;
