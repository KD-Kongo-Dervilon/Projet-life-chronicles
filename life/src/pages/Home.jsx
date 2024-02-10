import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Life Chronicles</h1>
      <p>
        Capturez et partagez les moments les plus Important de ta vie,
        avec tes amies et ta famille
      </p>
      <div className="buttons-container">
        <Link to="/login" className="btn">Se connecter</Link>
        <Link to="/register" className="btn">S'inscrire</Link>
      </div>
    </div>
  );
};

export default Home;

