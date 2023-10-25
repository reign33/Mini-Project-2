import React from 'react'

function SignUpPage() {

  return (
    <div class="m-0 p-0 box-border">
    <div class="container w-1/2 m-auto">
        <div class="logo w-32 block m-auto">
            <img class="m-3" src="/amazon-logo-transparent.png" alt="amazon logo"/>
        </div>
        {/* <!-- logo end --> */}
        <div class="loginform w-1/2 m-auto border-[2px] rounded-lg border-gray-200 p-[20px]">
            <h1 class="font-sans text-black font-normal text-3xl mb-2">Create your account</h1>

            <p class="font-semibold text-sm mb-[1px] pt-[20px]">
              Your email </p>
            <input
                class="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="text" name="username" id="" placeholder="" />

            <p class="font-semibold text-sm mb-[1px] pt-[20px]">
              Password </p>
            <input
                class="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="username" id="" placeholder="" />

            <p class="font-semibold text-sm mb-[1px] pt-[20px]">
              Confirm password </p>
            <input
                class="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="password" name="username" id="" placeholder="" />
            
            <p class="text-xs font-medium text-gray-800 pt-[20px]"><input class='mr-1' type="checkbox"/>
                I accept the 
                <a class="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]" href="/">Terms and Conditions</a></p>
        </div>

        <div class="lower mt-6 w-1/2 m-auto ">
            <button
                class="mt-[14px] rounded-lg py-[5px] text-sm font-medium w-[100%] bg-[#FF9900] active:bg-[gray] active:text-white ">Create an account</button>
        </div>

        {/* <!-- lowest container --> */}
        <div class="lowest container my-6 mx-auto border-t-[1px] border-gray-300 rounded-none text-center ">
            <div class="mx-auto w-1/2">
                <p class=" mt-5 mx-auto text-xs font-medium">Already have an account? <a
                        class="cursor-pointer m-1 hover:text-red-700 hover:underline text-[#0066c0]" href="/">Login here</a>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUpPage