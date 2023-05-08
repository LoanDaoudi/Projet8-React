import React from 'react';

import Logo1 from './Images/Logo1.png';
import Logo2 from './Images/Logo2.png';
import Logo3 from './Images/Logo3.png';
import Logo4 from './Images/Logo4.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={Logo1} alt="Logo 1" />
      <img src={Logo2} alt="Logo 2" />
      <img src={Logo3} alt="Logo 3" />
      <img src={Logo4} alt="Logo 4" />
    </div>
  );
};

export default Logo;
