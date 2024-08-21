import React, { useEffect } from 'react'
import Header from './Header'

import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcommingMovies from '../hooks/useUpcommingMovies'



const Browse = () => {
  const user = useSelector((store)=>store.user.user);
  
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

 

  useEffect(()=>{
    if(!user){
      navigate("/")
    } 
    
  })
  return (
    <>
     <Header/>
     <div>
      <MainContainer/>
      <MovieContainer/>
     </div>
    </>
  )
}

export default Browse