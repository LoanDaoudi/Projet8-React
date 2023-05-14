import React, { useState } from 'react';
import flechedroite from './Images/flechedroite.png';
import flechegauche from './Images/flechegauche.png';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentNumber = currentIndex + 1;
  const totalNumber = images.length;

  const shouldHideControls = images.length <= 1;

  return (
    <div className='carrouselcontainer'>
      {!shouldHideControls && (
        <>
          <img
            src={flechegauche}
            className='arrowgauche'
            alt='Image précédente'
            onClick={goToPrevious}
          />
          <img src={images[currentIndex]} className='backimg' alt={`Image ${currentIndex + 1}`} />
          <img
            src={flechedroite}
            className='arrowdroite'
            alt='Image suivante'
            onClick={goToNext}
          />
          <div className='photo-number'>
            <p>{`${currentNumber}/${totalNumber}`}</p>
          </div>
        </>
      )}
      {shouldHideControls && <img src={images[currentIndex]} className='backimg' alt={`Image ${currentIndex + 1}`} />}
    </div>
  );
};

export default Carrousel;
