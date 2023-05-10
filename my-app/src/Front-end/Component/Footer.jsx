import React from 'react';
import image1 from './Images/Vector1.png';
import image2 from './Images/Vector2.png';
import image3 from './Images/Vector3.png';
import image4 from './Images/Vector4.png';

const Footer = () => {
    return (
      <div className="Footer">
        <div className="footerimg">
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
            <img src={image4} alt="Image 4" />
            </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  };
  
  export default Footer;