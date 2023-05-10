import React from 'react';

const Cards = ({ data, onClick }) => {
  return (
    <div className='card'>
    <a href="/intel" onClick={() => onClick(data.id)}>
    <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
      </a>
    </div>
  );
};

export default Cards;
