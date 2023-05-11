import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Cards from './Component/Cards';
import data from './logements.json';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='cardcontenainer'>
        {data.map((item) => (
          <Link key={item.id} to={`/intel/${item.id}`}>
            <Cards data={item} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
