import React from 'react';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Cards from './Component/Cards';
import data from './logements.json';

const HomePage = () => {
  const handleCardClick = (cardId) => {
    // Utilisez l'ID de la card comme vous le souhaitez (par exemple, pour la navigation ou pour la récupération des données de la card)
    console.log("Card clicked. ID:", cardId);
  };
  return (
    <div>
      <Header />
      <Banner />
      <div className='cardcontenainer'>
        {data.map((item) => (
          <Cards key={item.id} data={item} onClick={handleCardClick} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
