import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Carrousel from './Component/Carrousel';
import Onglet from './Component/OngletIntelHome';
import Tag from './Component/Tag';
import Host from './Component/Host';
import Stars from './Component/RatingStars';
import IntelName from './Component/IntelName';
import data from './logements.json';

const IntelHome = () => {
  const { id } = useParams();

  // Recherche des données correspondantes à l'ID
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <div>Aucune donnée trouvée pour cet ID.</div>;
  }

  return (
    <div>
      <Header />
      <Carrousel />
      <div className='undercarrousel'>
          <div className='leftunder'>
            <IntelName data={selectedData} />
              <Tag text={selectedData.tags} />
          </div>
        <div className='rightunder'>
          <Host text={selectedData} />
          <div className='ratingstars'>
          <Stars count={parseInt(selectedData.rating)} />
          </div>
        </div>
      </div>
      <div className='OngletIntelPage'>
        <Onglet title='Description' text={selectedData.description} />
        <Onglet title='Équipements' text={selectedData.equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default IntelHome;
