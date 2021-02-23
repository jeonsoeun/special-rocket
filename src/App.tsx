/** @format */

import React, { useEffect } from 'react';
import BetHistory from './components/BetHistory';
import Game from './components/Game';
const App = () => {
  return (
    <div className="app">
      <Game />
      <BetHistory />
    </div>
  );
};

export default App;
