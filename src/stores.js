import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/ReduxTest/countSlice";
import dogReducer from "./components/Thunk/dogsSlice";

export default configureStore({
  reducer: {
    count: counterReducer,
    randomDog: dogReducer,
  },
});
