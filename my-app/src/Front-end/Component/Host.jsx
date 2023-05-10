import React from 'react';

const Host = ({ text }) => {
  return (
    <div className='hostIntel'>
      <p>{text.host.name}</p>
      <div className='Profilepicture'>
        <img src={text.host.picture} alt={text.host.name} />
      </div>
    </div>
  );
};

export default Host;
