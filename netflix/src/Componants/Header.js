import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import { API_END_POINT } from '../utils/constantData';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggle = useSelector(store=>store.movie.toggle);
    const user = useSelector((store) => store.user.user);
    console.log(user ,"from header");

    const toggleHandler = ()=>{
        dispatch(setToggle())
    }

    const logoutHandler = async ()=>{
         try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            dispatch(setUser(null));
            navigate("/");
            if(res.data.success){
                toast.success(res.data.message)
            }
         } catch (error) {
            console.log(error);
         }
         
    }

    return (

        <div className=' absolute z-10 flex w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
            <img className='w-50 h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="logo" />

            

            {user &&
                <div className='flex items-center'>
                    <IoIosArrowDropdown size="24px" color='white' />
                    <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
                    <div className='ml-4'>
                        <button onClick={logoutHandler} className='text-white px-4 py-2 rounded bg-red-800'>logout</button>
                        <button onClick={toggleHandler}
                        className='text-white px-4 py-2 rounded bg-red-800 ml-2'>{toggle ? "Home" : "Search Movie"}</button>
                    </div>
                </div>
            }

        </div>

    )
}

export default Header