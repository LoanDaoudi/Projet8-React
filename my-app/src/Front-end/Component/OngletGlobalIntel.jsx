import React, { useState } from 'react';
import flechelow from './Images/flechelow.png';
import flechehigh from './Images/flechehigh.png';

const Onglet = ({ title, text }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const isTextVisible = text !== undefined && text !== null;

  return (
    <div className='onglet'>
      <div className='ongletitle' onClick={toggleContentVisibility}>
        <h3>{title}</h3>
        {isContentVisible ? (
          <img src={flechehigh} alt='flechehigh' />
        ) : (
          <img src={flechelow} alt='flechelow' />
        )}
      </div>
      {isContentVisible && isTextVisible && (
        <div className='ongletcontent'>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Onglet;
