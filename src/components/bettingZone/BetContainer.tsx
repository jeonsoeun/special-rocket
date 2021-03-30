import React, { useState } from 'react';
import BettingZone from './BettingZone';
import UserBalance from './UserBalance';

const BetContainer = () => {
  return (
    <div className={`bet-container`}>
      <UserBalance />
      <BettingZone />
    </div>
  );
};

export default BetContainer;
