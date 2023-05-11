import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'ID est inexistant dans le tableau de données
    const selectedData = data.find((item) => item.id === id);
    if (!selectedData) {
      // Rediriger vers la page ErrorPage si l'ID est inexistant
      navigate('/error');
    }
  }, [id, navigate]);

  // Rechercher les données correspondantes à l'ID (optionnel)
  const selectedData = data.find((item) => item.id === id);

  return (
    <div>
      <Header />
      {selectedData ? (
        <>
          <Carrousel images={selectedData.pictures} />
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
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default IntelHome;
