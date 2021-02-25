import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IDataSet {
  time: number;
  multiple: number;
}

export interface IGraph {
  graphData: IDataSet[];
}

const initState: IGraph = {
  graphData: [],
};

export const graphSlice = createSlice({
  name: 'graph',
  initialState: initState,
  reducers: {
    setGraphData: (state, action: PayloadAction<IDataSet[]>) => {
      state.graphData = action.payload;
    },
    addGraphData: (state, action: PayloadAction<IDataSet>) => {
      state.graphData = [...state.graphData, action.payload];
    },
  },
});

export const { setGraphData, addGraphData } = graphSlice.actions;

export default graphSlice.reducer;
