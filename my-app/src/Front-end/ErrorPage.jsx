import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className='errorcontainer'>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <a href="/">Retournez sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;