import React from 'react';
import logo from '../../images/Logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="flex items-start justify-start mx-40 my-10">
      <img className="w-12 h-12 mr-20" src={logo} alt="" />
      <h1 className="w-16 md:w-32 lg:w-48 text-orange-700 decoration-20 text-lg font-bold">GAME-MODULE</h1>

    </div >

  );
};

export default Header;