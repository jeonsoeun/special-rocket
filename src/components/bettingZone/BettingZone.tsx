import React from 'react';

const BettingZone = () => {
  return (
    <div className="betting-zone">
      <div className="p-1">
        <input type="text" className="input" id="betting-zone-input" />
      </div>
      <div className="p-1">
        <button className={`button is-primary btn-bet`}>Bet</button>
      </div>
    </div>
  );
};

export default BettingZone;
