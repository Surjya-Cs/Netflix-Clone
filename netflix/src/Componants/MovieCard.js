import React from 'react'
import { TMDB_IMG_PATH } from '../utils/constantData'
import { useDispatch } from 'react-redux';
import { getId, getOpen } from '../redux/movieSlice';

const MovieCard = ({posterPath, movieId}) => {
 const dispatch = useDispatch();
  if(posterPath == null) return null;
  const handleOpen =()=>{
    dispatch(getId(movieId))
    dispatch(getOpen(true))
  }
  return (
    <div className=' w-48 pr-2' onClick={handleOpen}>
    <img src={`${TMDB_IMG_PATH}/${posterPath}`} alt="top movies" />
    </div>
  )
}

export default MovieCard