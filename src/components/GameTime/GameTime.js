import React from 'react';

const GameTime = ({ gameList }) => {
  // let gameTime = 0;
  let totalTime = 0;
  let quantity = 0;
  for (const game of gameList) {
    // gameTime = gameTime + game.time;
    quantity = quantity + game.quantity;
    totalTime = totalTime + game.time * game.quantity;
  }
  return (
    <div>
      <p> {totalTime}</p>
    </div>
  );
};

export default GameTime;

