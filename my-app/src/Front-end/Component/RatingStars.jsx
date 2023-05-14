import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = ({ count }) => {
  const maxStars = 5;

  return (
    <div >
      {[...Array(maxStars)].map((_, index) =>
        index < count ? (
          <FontAwesomeIcon key={index} icon={faStar} className='starred' />
        ) : (
          <FontAwesomeIcon key={index} icon={faStar} className='stargrey' />
        )
      )}
    </div>
  );
};


export default Stars;
