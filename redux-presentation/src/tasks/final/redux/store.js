import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/general/generalSlice";
import counterReducer from "./reducers/counter/counterSlice";
import logger from "./middleware/logger";

const store = configureStore({
  reducer: {
    general: generalReducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
