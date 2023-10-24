import React from 'react'

export default function LoginPage() {
  return (
    <div class="m-0 p-0 box-border">
    <div class="container w-1/2 m-auto">
        <div class="logo w-32 block m-auto">
            <img class="m-3" src="/images.png" alt="" srcset="" />
        </div>
        {/* <!-- logo end --> */}
        <div class="loginform w-1/2 m-auto border-[1.5px] rounded-lg border-gray-200 p-[20px]">
            <h1 class="font-sans text-black font-normal text-3xl mb-2">Sign In</h1>
            <p class="font-semibold text-sm mb-[1px]">
                Email or mobile phone number
            </p>
            <input
                class="focus:border-[3px] outline-none focus:border-blue-200
                border-[1px] rounded-[3px] border-[#a6a6a6] w-[100%] px-[1px] py-[1px]"
                type="text" name="username" id="" placeholder="" />
            <button class="mt-[12px] border rounded-lg py-[5px] text-sm w-[100%] bg-[#f8db02] hover:bg-[#ebd004]" type="submit">
                Continue
            </button>
            <p class="text-xs font-medium mt-3 mb-2 text-gray-800 p-1">
                By continuing, you agree to Amazon's
                <a class="cursor-pointer hover:text-red-700 hover:underline text-[#0066c0]" href="/">Contitions of
                    Use</a>
                and
                <a class="cursor-pointer hover:text-red-700 hover:underline text-[#0066c0]" href="/">Privacy Notice</a>.
            </p>
            <span class="text-[8px] p-1">►</span>
            <a class="text-[#0066c0] cursor-pointer hover:underline hover:text-red-700 font-normal text-sm"
                href="/">Need Help?</a>
        </div>
        <div class="lower mt-6 w-1/2 m-auto ">
            <p class="m-auto max-w-fit text-gray-500 text-xs ">
                New to Amazon
            </p>
            <button
                class="mt-[14px] border-gray-300 border rounded-lg py-[5px] text-sm w-[100%] hover:bg-gray-50 ">Create
                your Amazon account</button>
        </div>

        {/* <!-- lowest container --> */}
        <div class="lowest container my-6 mx-auto border-t-[1px] border-gray-300 rounded-none ">
            <div class="mx-auto w-1/2">
                <p class=" mt-5 mx-auto text-xs font-medium"> <a
                        class="cursor-pointer m-4 hover:text-red-700 hover:underline text-[#0066c0]" href="/">Contidions
                        of Use</a> <a class="cursor-pointer m-4 hover:text-red-700 hover:underline text-[#0066c0]"
                        href="/">Privacy Notice</a><a
                        class="cursor-pointer  m-4  hover:text-red-700 hover:underline text-[#0066c0]" href="/">Help</a>
                </p>
            </div>
            <div class="mx-auto w-1/2">
                <p class=" my-3 mx-auto max-w-fit text-gray-500 text-xs ">&copf; 1996-2023, Amazon.com, Inc. or its
                    affiliates</p>
            </div>

        </div>
    </div>
    </div>
  )
}
