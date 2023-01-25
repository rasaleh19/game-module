import React from 'react';
import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Game = ({ game, handleAddToCart }) => {
  const { key, picture, time, subjectName } = game;


  return (
    <div className="game bg-white border-2 p-7 rounded-lg grid justify-items-center ">
      <img src={picture} alt="" />
      <h3 className="text-red-900">{subjectName}</h3>
      <p>Game Duration: {time}m</p>
      <button onClick={() =>
        handleAddToCart(game)} className="bg-slate-300 hover:bg-blue-700 text-black font-bold py-2 px-4  rounded-full ">
        Add to List
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Game;