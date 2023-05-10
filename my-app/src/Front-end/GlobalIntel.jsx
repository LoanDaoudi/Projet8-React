import React from 'react';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import OngletGlobal from './Component/OngletGlobalIntel';
const GlobalIntel = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='ongletcontainer'>
        <OngletGlobal title="Fiabilité" />
        <OngletGlobal title="Respect" text="La bienveillance fait partie des valeurs fondatrices
        de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion 
        de notre plateforme."/>
        <OngletGlobal title="Service" />
        <OngletGlobal title="Sécurité"/>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalIntel;