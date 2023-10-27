import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            <div className='flex items-center m-4'>
                <img className='h-[35px] m-2' src="/amazon_logo.png"/>
                <div className='pr-4 pl-4'>
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
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <div className='flex pr-3 pl-3'>
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