import React from 'react';
import image1 from './Images/Image1.png';
import image2 from './Images/Image2.png';
import image3 from './Images/Image3.png';
import image4 from './Images/Image4.png';

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
      <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
      <img src={image3} alt="Image 3" />
      <img src={image4} alt="Image 4" />
      </a>
    </div>
  );
};

export default Logo;