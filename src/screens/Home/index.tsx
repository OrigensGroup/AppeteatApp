import React from 'react';
import Promotion from '../../components/Homepage/Promotion';
import Card from '../../components/Homepage/Card';
import { HomepageContainer } from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <Card title='Mojito' description='Description' />
      <Promotion
        endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()}
      />
    </HomepageContainer>
  );
};

export default Home;
