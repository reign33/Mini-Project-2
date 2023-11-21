import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form';

function SignUpPage() {
  const navigate=useNavigate();
  function handleBackToLogin(){
    navigate('/admin/login')
  }

  function goToHomePage(){
    navigate('/')
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="m-0 p-0 box-border">
    <div className="container w-1/2 m-auto">
        <div className="logo w-32 block m-auto">
            <img className="m-3" src="/amazon-logo-transparent.png" onClick={goToHomePage} alt="amazon logo"/>
        </div>
        {/* <!-- logo end --> */}

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginform w-1/2 m-auto border-[2px] rounded-lg border-gray-200 p-[20px]">
            <h1 className="font-sans text-black font-normal text-3xl mb-2">Create your account</h1>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]"> Your email </p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="text" name="username" id=""
                
                placeholder="Enter primary email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}/>

                <div className='text-[red] text-[10px]'>
                <error>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                "Entered email is in wrong format"}
                </error>
                </div>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]">
              Password </p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="username" id=""
                
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 16,
                  noData: null
                })}/>

                <div className='text-[red] text-[10px]' >
                <error>
                {errors.password?.type == "noData" &&
                "Password is required"}
                {errors.password?.type === "minLength" &&
                "Entered password is less than 5 characters"}
                {errors.password?.type === "maxLength" &&
                "Entered password is more than 16 characters"}
                </error>
                </div>

            <p className="font-semibold text-sm mb-[1px] pt-[20px]"> Confirm password </p>
            <input
                className="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="username" id=""
                placeholder='Confirm Password'/>
            
            <p className="text-xs font-medium text-gray-800 pt-[20px]"><input class='mr-1' type="checkbox"/>
                I accept the 
                <a className="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]" href="/">Terms and Conditions</a></p>
        </div>

        <div className="lower mt-6 w-1/2 m-auto ">
            <button className="mt-[14px] rounded-lg py-[5px] text-sm font-medium w-[100%] 
            bg-[#FF9900] active:bg-[gray] active:text-white" type='submit'>Create an account</button>
        </div>
        </form>

        {/* <!-- lowest container --> */}
        <div className="lowest container my-6 mx-auto border-t-[1px] border-gray-300 rounded-none text-center ">
            <div className="mx-auto w-1/2">
                <p className=" mt-5 mx-auto text-xs font-medium" onClick={handleBackToLogin}>Already have an account?<a
                        className="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]">Login here</a>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUpPage