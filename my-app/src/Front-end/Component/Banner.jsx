import React from 'react';
import paysage from './Images/paysage.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={paysage} alt="Image" />
      <h1>Chez vous partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
