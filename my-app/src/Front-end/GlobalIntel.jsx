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
        <OngletGlobal title="Fiabilité" text="Les annonces postées sur Kasa garantissent une
        fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
        sont régulièrement vérifiées par nos équipes."/>
        <OngletGlobal title="Respect" text="La bienveillance fait partie des valeurs fondatrices
        de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion 
        de notre plateforme."/>
        <OngletGlobal title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <OngletGlobal title="Sécurité"text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
        pour les voyageurs, chaque logement correspond aux critères de sècurité établis par nos
        services. En laissant une note auusi bien à l'hôte qu'au locataire, cela permet
        à nos équipes de vérifier que les standars sont bien respectés. Nous organisons
        également des ateliers sur la sécutité domestique pour nos hôtes."/>
      </div>
      <Footer />
    </div>
  );
};

export default GlobalIntel;