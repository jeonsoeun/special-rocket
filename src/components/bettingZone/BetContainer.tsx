import React, { useState } from 'react';
import BettingZone from './BettingZone';
import PreBettingZone from './PreBettingZone';
import UserBalance from './UserBalance';

const BETTING_ZONE = 'betting-zone';
const PRE_BETTING_ZONE = 'preBetting-zone';
type TBettingZone = 'betting-zone' | 'preBetting-zone';

const BetContainer = () => {
  const [selectedTab, setSelectedTap] = useState<TBettingZone>(BETTING_ZONE);
  function onClickTab(newSelected: TBettingZone) {
    setSelectedTap(newSelected);
  }
  return (
    <div className={`bet-container`}>
      <UserBalance />
      <div className="selected-bet-type">
        {selectedTab === BETTING_ZONE && <BettingZone />}
        {selectedTab === PRE_BETTING_ZONE && <PreBettingZone />}
      </div>
    </div>
  );
};

export default BetContainer;
