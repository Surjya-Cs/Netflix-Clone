import React, { useState } from 'react';
import Header from './Header';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_END_POINT } from '../utils/constantData.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice.js';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLogin, setIsLogin] = useState(false);
  const isLoading = useSelector((store) => store.user.isLoading); // Corrected the state selector
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AltLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (data) => {
    dispatch(setLoading(true));
    const url = isLogin ? `${API_END_POINT}/login` : `${API_END_POINT}/register`;

    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      if (res.data && res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }

    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp')" }}>
        <div className="bg-black bg-opacity-75 w-full max-w-md rounded-lg overflow-hidden shadow-lg">
          <form onSubmit={handleSubmit(getInputData)} className="flex flex-col items-center justify-center p-4">
            <h1 className="text-white text-3xl mb-5 font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
            {!isLogin && (
              <input
                {...register('fullName', { required: true })}
                type="text"
                placeholder="Full Name"
                className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              />
            )}
            <input
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              placeholder="Email"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 10,
                message: 'Password length should be between 6 to 10 characters',
              })}
              type="password"
              placeholder="Password"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button type='submit' className="mt-4 p-3 my-2 text-white bg-red-700 rounded-sm" style={{ width: "50%", marginTop: "1rem" }}>
              {isLoading ? "Loading..." : (isLogin ? 'Login' : 'Sign Up')}
            </button>
            <p className="text-white mt-4 text-center">
              {isLogin ? 'New to Netflix?' : 'Already have an account?'}
              <span onClick={AltLoginSignup} className="text-blue-600 cursor-pointer font-medium ml-1">
                {isLogin ? 'Sign up' : 'Login'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;






// import React, { useState } from 'react';
// import Header from './Header';
// import { useForm } from 'react-hook-form';
// import axios from 'axios'
// import { API_END_POINT } from '../utils/constantData.js';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/userSlice.js';

// const Login = () => {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [isLogin, setIsLogin] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const AltLoginSignup = () => {
//     setIsLogin(!isLogin);
//   };

//   const getInputData = async (data) => {

//     if (isLogin) {
//       try {
//         const res = await axios.post(`${API_END_POINT}/login`, data, {
//           headers: {
//             "Content-Type": "application/json"
//           },
//           withCredentials: true
//         });
//         // console.log(res);
//         if (res.data.success) {
//           toast.success(res.data.message)
//         }
//         dispatch(setUser(res.data.user))
//         navigate("/browse")
//       } catch (error) {
//         toast.error(error.response.data.message)
//         // console.log(error);
//       }
//     } else {
//       try {
//         const res = await axios.post(`${API_END_POINT}/register`, data, {
//           headers: {
//             "Content-Type": "application/json"
//           },
//           withCredentials: true
//         });
//         // console.log(res);
//         if (res.data.success) {
//           toast.success(res.data.message)
//         }
//         setIsLogin(true);
//       } catch (error) {
//         toast.error(error.response.data.message)
//         // console.log(error);
//       }
//     }
//     reset();
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-1 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp')" }}>
//         <div className="bg-black bg-opacity-75 w-full max-w-md rounded-lg overflow-hidden shadow-lg">
//           <form onSubmit={handleSubmit(getInputData)} className=" flex flex-col items-center justify-center p-4 ">
//             <h1 className="text-white text-3xl mb-5 font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
//             {!isLogin && (
//               <input
//                 {...register('fullName', { required: true })}
//                 type="text"
//                 placeholder="Full Name"
//                 className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//               />
//             )}
//             <input
//               {...register('email', {
//                 required: true,
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: 'Invalid email address',
//                 },
//               })}
//               type="email"
//               placeholder="Email"
//               className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"

//             />
//             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//             <input
//               {...register('password', {
//                 required: true,
//                 minLength: 6,
//                 maxLength: 10,
//                 message: 'Password length should be between 6 to 10 characters',
//               })}
//               type="password"
//               placeholder="Password"
//               className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//             />
//             {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//             <button className="mt-4 p-3 my-2 text-white bg-red-700 rounded-sm"
//               style={{ width: "50%", marginTop: "1rem" }}>{isLogin ? 'Login' : 'Sign Up'}</button>
//             <p className="text-white mt-4 text-center">
//               {isLogin ? 'New to Netflix?' : 'Already have an account?'}
//               <span onClick={AltLoginSignup} className="text-blue-600 cursor-pointer font-medium ml-1">
//                 {isLogin ? 'Sign up' : 'Login'}
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
