import React from 'react';
import Banner from '../../components/homepage/Banner';
import AllCards from '../../components/homepage/AllCards';

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <AllCards></AllCards>
    </div>
  );
};

export default Homepage;