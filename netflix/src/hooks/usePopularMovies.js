import axios from 'axios'

import { options, Popular_Movies } from '../utils/constantData'
import { useDispatch } from 'react-redux'
import { getPopularMovies } from '../redux/movieSlice'

const usePopularMovies = async() => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movies,options)
     dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
    
  }
}

export default usePopularMovies