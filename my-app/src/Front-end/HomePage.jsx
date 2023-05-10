import React from 'react';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Cards from './Component/Cards';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='cardcontenainer'>
      <Cards /><Cards /><Cards /><Cards /><Cards /><Cards />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;