import { createSlice } from '@reduxjs/toolkit';

interface IBalance {
  fraction: number;
  amount: number;
  symbol: string;
  strAmount: string;
}

const initState: IBalance = {
  fraction: 4,
  amount: 100000000,
  symbol: 'UDT',
  strAmount: '10000.0000',
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: initState,
  reducers: {},
});

export const {} = balanceSlice.actions;

export default balanceSlice.reducer;
