import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        user: userSlice  // Assuming userReducer manages the user slice of state
    }
});

export default store;
