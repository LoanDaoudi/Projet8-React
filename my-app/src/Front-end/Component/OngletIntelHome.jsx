import React from 'react';
import flechelow from './Images/flechelow.png';
import flechehigh from './Images/flechehigh.png';

const Onglet = ({ title, text }) => {
  const isTextVisible = text !== undefined && text !== null;

  return (
    <div className='ongletIntelHome'>
      <div className='ongleHometitle'>
        <h3>{title}</h3>
        {isTextVisible ? (
          <img src={flechehigh} alt='flechehigh' />
        ) : (
          <img src={flechelow} alt='flechelow' />
        )}
      </div>
      {isTextVisible && (
        <div className='ongletHomecontent'>
          {Array.isArray(text) ? (
            <ul>
              {text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Onglet;