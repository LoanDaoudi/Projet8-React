import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Cards from './Component/Cards';
import data from './logements.json';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    const selectedData = data.find((item) => item.id === id);
    if (selectedData) {
      // Redirection vers la page IntelHome avec l'ID valide
      navigate(`/intel/${id}`);
    } else {
      // Redirection vers la page ErrorPage pour un ID inexistant
      navigate('/*');
    }
  };
  
  return (
    <div>
      <Header />
      <Banner />
      <div className='cardcontenainer'>
        {data.map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item.id)}>
            <Cards data={item} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
