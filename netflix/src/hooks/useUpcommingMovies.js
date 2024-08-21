import axios from "axios";
import {getUpcomingMovies } from "../redux/movieSlice";
import { options,Upcomming_Movies } from "../utils/constantData";
import { useDispatch } from "react-redux";


const useUpcommingMovies =async()=>{
    const dispatch = useDispatch();
    try {
       const res =await axios.get(Upcomming_Movies, options)
       console.log(res.data.results);
       dispatch(getUpcomingMovies(res.data.results))
       
    } catch (error) {
      console.log(error);
      
    }
  }

  export default useUpcommingMovies