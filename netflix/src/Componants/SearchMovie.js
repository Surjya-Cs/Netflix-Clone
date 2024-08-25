import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL } from '../utils/constantData';
import { useDispatch, useSelector } from 'react-redux';
import {getSearchMovieDetails} from '../redux/searchMovieSlice'
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList'

const SearchMovie = () => {
  const dispatch =useDispatch();
  const isLoading = useSelector(store=>store.user.isLoading);
  const {movieName,searchedMovie} = useSelector(store=>store.movieSearch);
  console.log(movieName,searchedMovie);
  
  
  
  const [searchMovie, setSearchMovie] = useState("");
  const submitHandler = async(e)=>{
    e.preventDefault();
    try {
      dispatch(setLoading(true))
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options)
      console.log("fff",res.data);
      const movies = res?.data?.results;
      dispatch(getSearchMovieDetails({searchMovie,movies}))
    } catch (error) {
      console.log(error);
      
    }finally{
      dispatch(setLoading(false))
    }
    setSearchMovie("")
  }
  return (
    <>
    <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className=' flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input  className=' w-full outline-none rounded-md text-lg'
          type="text"
          value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}}
           placeholder='search movie...' />
          <button className=' bg-red-700 text-white rounded-md px-4 py-2'>{isLoading ? " Loading..." : "Search"}</button>
          </div>
        </form>
    </div>
    <MovieList title={movieName} movies={searchedMovie} search={true} />
    </>
  )
}

export default SearchMovie