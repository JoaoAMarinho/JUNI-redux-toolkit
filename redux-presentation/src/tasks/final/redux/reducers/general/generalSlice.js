import { createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";
import { incrementByAmount } from "../counter/counterSlice";

const initialState = {
  loading: false,
  error: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(incrementByAmount.type, (state, action) => {
      console.log(`I know it incremented by ${action.payload}`);
    });

    // Always after builder.addCase calls
    builder.addMatcher(isPending, state => {
      state.loading = true;
    });
    builder.addMatcher(isFulfilled, state => {
      state.loading = false;
    });
  },
});

export default generalSlice.reducer;
