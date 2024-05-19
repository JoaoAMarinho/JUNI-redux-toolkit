import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../../../pages/counter/counterAPI";

const initialState = {
  value: 0,
};

const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async amount => {
    const response = await fetchCount(Number(amount) || 0);
    return response.data;
  },
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += Number(action.payload) || 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectValue: state => state.value,
  },
});

// Action creators are generated for each case reducer function.
export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export const { selectValue } = counterSlice.selectors;

export { incrementAsync };

// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = amount => (dispatch, getState) => {
  const currentValue = getState().counter.value;

  if (currentValue % 2 === 1 || currentValue % 2 === -1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
