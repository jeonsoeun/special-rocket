import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const UserBalance = () => {
  const { strAmount, symbol } = useSelector(
    (state: RootState) => state.balance
  );
  return (
    <div className="user-balance p-1">
      <span className="mr-1 has-text-weight-semibold">Balance </span>
      <span className="balance-amount">
        <span className="amount pr-1 is-size-5">{strAmount}</span>
        <span className="symbol is-size-5">{symbol}</span>
      </span>
    </div>
  );
};

export default UserBalance;
