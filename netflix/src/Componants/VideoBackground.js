
import React from 'react'
import useMovieById from '../hooks/useMovieById';
import {useSelector} from "react-redux";

const VideoBackground = ({movieId,bool}) => {
        
    const movieTrailer = useSelector(store=>store.movie.movieTrailer)
    useMovieById(movieId)
    return (
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
                src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground

// import React from 'react';
// import useMovieById from '../hooks/useMovieById';
// import { useSelector } from 'react-redux';


// const VideoBackground = ({movieId}) => {
  
//   const movieTrailar = useSelector(store=>store.movie.movieTrailar)
//   useMovieById(movieId);

//   return (
//     <div className=" w-screen ">
//       <iframe
//         className=" w-screen aspect-video"
//         src={`https://www.youtube.com/embed/${movieTrailar?.key}?autoplay=1&mute=1`}
//         title="YouTube video player"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };




// export default VideoBackground;