import React from 'react';

const Tag = ({ text }) => {
  return (
    <div className='tag'>
      {text.map((tag, index) => (
        <div className='tagcontainer' key={index}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tag;
