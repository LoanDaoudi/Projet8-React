import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/intel/${data.id}`);
  };

  return (
    <div className='card'>
      <Link to={`/intel/${data.id}`} onClick={handleCardClick}>
        <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
      </Link>
    </div>
  );
};

export default Cards;
