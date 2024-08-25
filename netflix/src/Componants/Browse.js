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
import SearchMovie from './SearchMovie'


const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const toggle = useSelector(store => store.movie.toggle)
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();



  useEffect(() => {
    if (!user) {
      navigate("/")
    }

  })
  return (
    <>
      <Header />
      <div>
        {
          toggle ? <SearchMovie /> : (
            <>
              <MainContainer />
              <MovieContainer />

            </>
          )
        }
      </div>
    </>
  )
}

export default Browse