import { React, useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import './Activity.css'
import Game from '../Game/Game';
import MyInfo from '../MyInfo/MyInfo';
import GameTime from '../GameTime/GameTime';


const Activity = () => {
  const [games, setGames] = useState([]);
  const [gameList, setGameList] = useState([])
  const [breakTime, setBreakTime] = useState([]);
  useEffect(() => {
    fetch('game.json')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  const addBreaks = [10, 20, 30, 40, 50];

  const handleBreakTime = (addBreak) => {
    setBreakTime(addBreak);
    localStorage.setItem("Break-time", addBreak);
  };
  const handleActivityComplete = () => {
    toast.success("Congratulations- You are done with your activity!");
    //console.log("Congratulations- You are done with your activity!");
  };

  const handleAddToCart = (selectedGame) => {
    console.log(selectedGame);
    let newGameList = [];
    const exists = gameList.find(game => game.key === selectedGame.key);
    if (!exists) {
      selectedGame.quantity = 1;
      newGameList = [...gameList, selectedGame];
    }
    else {
      const rest = gameList.filter(game => game.key !== selectedGame.key);
      exists.quantity = exists.quantity + 1;
      newGameList = [...rest, exists];
    }

    setGameList(newGameList);
    //addToDb(selectedProduct.id);
  }
  return (

    <div className="activity-container">
      <div className="game-selection-container">
        {
          games.map(game => <Game game={game} key={game.key} handleAddToCart={handleAddToCart} ></Game>)
        }
      </div>
      <div className="bg-white p-8">
        <div className='personal-info'>
          <MyInfo></MyInfo>
        </div>

        <div className="mt-4 mb-4 mr-4">
          <h3>Add a Break</h3>
          <div className="bg-gray-100 rounded-lg space-x-2 flex justify-between align-center p-4 mt-4 ">
            {addBreaks.map((addBreak, index) => (
              <button
                className="bg-slate-300 hover:bg-blue-700 text-black font-bold py-2 px-4  rounded-full"
                key={index}
                onClick={() => handleBreakTime(addBreak)}
              >
                {addBreak}m
              </button>
            ))}
          </div>
          <div>
            <p className="text-black-500 font-bold"> Game Details</p>
            <div className="bg-gray-100 rounded-lg space-x-2 flex justify-between align-center p-4 mt-4">
              <h3>Game Time</h3>
              <GameTime gameList={gameList}></GameTime>
            </div>
            <div className="bg-gray-100 rounded-lg space-x-2 flex justify-between align-center p-4 mt-4">
              <h3>Break Time</h3>
              <p>{breakTime} minutes</p>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 mr-4 grid justify-items-center ">
          <button
            onClick={handleActivityComplete}
            className="bg-slate-300 hover:bg-blue-700 text-black font-bold py-2 px-4  rounded-full"
          >
            Activity Completed
            </button>
          <ToastContainer />
        </div>
      </div>

    </div>
  );
};

export default Activity;