/** @format */

import React from 'react';
import BetContainer from './bettingZone/BetContainer';
import Graph from './Graph';
import RoundHistory from './RoundHistory';

const Game = () => {
  return (
    <div className="game">
      <div className="play-section">
        <RoundHistory />
        <Graph />
        <BetContainer />
      </div>
    </div>
  );
};

export default Game;
