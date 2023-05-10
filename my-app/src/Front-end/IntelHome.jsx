import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Carrousel from './Component/Carrousel';
import Onglet from './Component/OngletIntelHome';
import Tag from './Component/Tag';
import Host from './Component/Host';
import Stars from './Component/RatingStars';
const IntelHome = () => {
  return (
    <div>
      <Header />
      <Carrousel />
      <div className='undercarrousel'>
        <div className='leftunder'>
            <div className='HomeIntelContent'>
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <p>Paris, Île-de-France</p>
            </div>
            <div className='tag'>
              <Tag text="Cozy"/>
              <Tag text="Canal"/>
              <Tag text="Paris 10"/>
            </div>
        </div>
        <div className='rightunder'>
              <Host text="Alexandre Dumas"/>
              <div className='ratingstars'>
              <Stars count={3}/>
            </div>
        </div>
      </div>
      <div className='OngletIntelPage'>
        <Onglet  title="Description" text="Vous serez à 50cm
        du canal Saint-martin où vous pourrez pique-niquer l'été et à coté de nombreux
        bars et restaurants.Au coeur de PAris avec 5 lignes de métro et de nom
        nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
        Vous êtes à 1 station de la gare de l'est 
        (7 minutes à pied)." /> 
        <Onglet title="Equipements"/>
      </div>

      <Footer />
      
    </div>
  );
};

export default IntelHome;