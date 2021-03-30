import React from 'react';

const BettingZone = () => {
  return (
    <div className="betting-zone">
      <div className="bet-amount pt-1 pb-1">
        <span>Bet Amount</span>
        <span className="amount-input">
          <input type="text" id="betting-zone-input" />
        </span>
      </div>
      <div className="pt-1 pb-1">
        <button className={`button is-primary is-fullwidth`}>Bet</button>
      </div>
    </div>
  );
};

export default BettingZone;
