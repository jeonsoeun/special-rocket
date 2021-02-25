import React, { useEffect } from 'react';
import BetHistory from './components/BetHistory';
import Game from './components/Game';
const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Game />
        <BetHistory />
      </div>
    </div>
  );
};

export default App;
