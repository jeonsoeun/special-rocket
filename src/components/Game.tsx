/** @format */

import React from 'react';
import BetBox from './bettingZone/BettingZone';
import Graph from './Graph';
import RoundHistory from './RoundHistory';

const Game = () => {
  return (
    <div className="game">
      <div className="play-section">
        <BetBox />
        <Graph />
      </div>
      <RoundHistory />
    </div>
  );
};

export default Game;
