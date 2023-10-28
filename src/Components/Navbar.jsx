import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
    function goToLogIn(){
        navigate('/login')
    }
    function goToSignUp(){
        navigate('/signup')
    }
    function goToHomePage(){
        navigate('/')
    }
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center m-4'>
                <img className='h-[35px] m-2' src="/amazon_logo.png" onClick={goToHomePage}/>
                <div className='border_color pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>Philippines</div>
                </div>
            </div>
            <div className='flex grow relative items-center'>
                <div className="w-[100%]">
                    <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
                        <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
                            <option>All Department</option>
                            <option>Arts & Crafts</option>
                            <option>Automotive</option>
                            <option>Beauty & Personal Care</option>
                            <option>Books</option>
                            <option>Boys' Fashion</option>
                            <option>Computers</option>
                            <option>Deals</option>
                            <option>Digital Music</option>
                        </select>
                        <input className="flex grow items-center h-[100%] rounded-l text-black" type="text" />
                        <button>
                            <MagnifyingGlassIcon className="h-[27px] w-[40px] m-auto stroke-slate-900"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex items-center m-4'>
                <div className="dropdown relative inline-block">
                    <div className='border_color px-4'>
                        <div className='text-xs xl:text-sm'>Hello, sign in</div>
                        <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                    </div>
                        {/* dropdown content */}
                        <div className="dropdown_content hidden absolute bg-[#EAEDED] shadow-sm z-10 h-[40vh] w-[330px] rounded">
                            <div className="sign_in text-center p-[15px] mx-[15px] text-black text-[13px]">
                                <button className="w-[250px] bg-amazonclone-yellow rounded text-[13px] text-black active:bg-[#c59456] py-[5px]" onClick={goToLogIn}>Sign In</button>
                                <p>New customer? <a className="text-[#0066c0] cursor-pointer hover:underline hover:text-red-700 font-medium text-[13px]"
                                    onClick={goToSignUp}>Start here.</a></p>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="h-[25vh] mt-[10px] text-[13px] text-black">
                                    <h4 className="font-medium">Your List</h4>
                                    <p><a className="hover:text-[#FF9900]" href="">Create a list</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Find a list or Registry</a></p>
                                </div>

                                <div className="right_content h-[25vh] mt-[10px] text-[13px] text-black pl-[10px]">
                                    <h4 className="font-medium">Your Account</h4>
                                    <p><a className="hover:text-[#FF9900]" href="">Account</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Orders</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Recommendations</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Browsing History</a></p>
                                    <p><a className="hover:text-[#FF9900]" href="">Watchlist</a></p>
                                </div>
                            </div> 
                        </div>
                    
                </div>


                <div className='border_color pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <div className='border_color flex pr-3 pl-3'>
                    <ShoppingCartIcon className="h-[48px]"/>
                    <div className="mt-7 text-xs xl:text-sm font-bold">
                        Cart
                    </div>
                </div>
            </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
            <div>Today's Deals</div>
            <div> Buy Again</div>
            <div> Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar