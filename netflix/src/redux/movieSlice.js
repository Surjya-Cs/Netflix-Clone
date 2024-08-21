// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice = createSlice({
//     name: "movie",
//     initialState:{
//         nowPlayingMovies: null,
//         popularMovies: null,
//         topRatedMovies: null,
//         upcommingMovies: null,
//     },
//     reducers:{
//         getnowPlayingMovies:(state, action)=>{
//             state.nowPlayingMovies = action.payload;
//         },
//         getPopularMovies:(state, action)=>{
//             state.popularMovies = action.payload;
//         },getTopRatedMovies:(state, action)=>{
//             state.topRatedMovies = action.payload;
//         },
//         getUpcommingMovies:(state, action)=>{
//             state.upcommingMovies = action.payload;
//         }
//     }
// });

// export const {getnowPlayingMovies,getPopularMovies, getTopRatedMovies, getUpcommingMovies} = movieSlice.actions;
// export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies: [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
    },
    reducers:{
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        getTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        }
    }
});

export const {getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
