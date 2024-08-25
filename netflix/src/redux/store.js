import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchMovieSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
        movieSearch: searchReducer,
    }
});

export default store;
