import React, { useState } from 'react'
import Header from './Header';
import {useForm} from 'react-hook-form'

const Login = () => {
  const {register , handleSubmit ,formState: { errors }} = useForm();
  const [isLogin, setIsLogin] =useState(false);

  const AltLoginSignup=()=>{
    setIsLogin(!isLogin)
  }

  const getInputData=(data)=>{
     console.log(data);
  }

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp')" }}>
      <form onSubmit={handleSubmit(getInputData)} className='flex flex-col p-10 w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85'>
      <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
        { !isLogin && <input placeholder='full name'
          {...register("fullName",{
            required: true,
          })}
         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />}
        <input type="email" placeholder='email' {...register("email",{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
        className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
        {errors.email && errors.email.message}
        <input type="password" placeholder='password'
        {...register("password",{
          required:true,
          minLength:6,
          maxLength:10,
          message:"password length 6 to 10"
        })}
         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
         {errors.password && errors.password.message}

        <button className='text-white bg-red-600 rounded-sm py-2 font-bold mt-2'>{isLogin ? "Login" : "Signup"}</button>
        <p className='text-white'>{isLogin ? "New to Netflix?" : "Alredy Have an Account?"}<span onClick={AltLoginSignup} className='ml-1 text-blue-700 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  </div>

    
  )
}

export default Login