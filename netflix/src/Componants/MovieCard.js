import React from 'react'
import { TMDB_IMG_PATH } from '../utils/constantData'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-48 pr-2'>
    <img src={`${TMDB_IMG_PATH}/${posterPath}`} alt="top movies" />
    </div>
  )
}

export default MovieCard