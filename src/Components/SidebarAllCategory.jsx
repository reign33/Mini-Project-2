import React from 'react'
import SideBarPage from './SideBarPage'
import {FaSistrix, FaTrashAlt} from "react-icons/fa"
import {BiSolidEdit} from "react-icons/bi";

function SidebarAllCategory() {
  return (
    <div className='flex'>
      <SideBarPage />

      <div className='flex flex-col items-center border w-[180vh]'>
        <div className='flex justify-between items-center w-[160vh] h-[15vh]'>
          <div>
            <div className='flex'>
              <FaSistrix className='text-[20px] bg-[#F0F0F0] h-[2rem] pl-[5px] rounded-l-lg'/>
              <input className='w-[25rem] h-[2rem] rounded-r-lg bg-[#F0F0F0]' type="search" name="" placeholder=' Search by name' id="" />
            </div>
            <p className='text-[14px] text-[gray] font-bold py-[10px]'>Total 7 Categories</p>
          </div>
          <div>
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45]' type="button"> Add New Category + </button>
            <p className='text-[14px] text-[gray] font-bold py-[10px] text-right'>Rows per page 5</p>
          </div>
        </div>

        <div className='rounded-xl bg-white w-[160vh] h-[50vh] border border-[#DDDDDD]'>
          <div className='flex justify-between text-left text-[12px] font-medium p-[5px] bg-[#F0F0F0] m-[1rem] rounded-lg'>
            <input type="checkbox" name="" id="" />
            <p className='text-left w-[200px]'>ID</p>
            <p className='text-left w-[150px]'>NAME</p>
            <p className='text-left w-[150px]'>PRODUCTS</p>
            <p className='text-left w-[150px]'>ACTIONS</p>
          </div>

          {/* dynamic content */}
          <div className='flex justify-between text-[12px] text-[gray] font-medium p-[5px] m-[1rem] rounded-lg'>
            <input type="checkbox" name="" id="" />
            <p className='text-left w-[200px]'>cln80dkfjgnth40guhktm698gk5</p>
            <p className='text-left w-[150px]'>Mobile Phones</p>
            <p className='text-left w-[150px]'>5</p>
            <div className='flex justify-start w-[150px] text-[18px]'><BiSolidEdit className='text-[blue] mr-[10px] hover:text-[#FF9900]'/>
            <FaTrashAlt className='text-[red] hover:text-[#FF9900]' /></div>
          </div>
        </div>

        <div className='flex justify-between item-center w-[160vh] mt-[20px] text-[14px] text-[gray] font-medium'>
          <p>0 of 7 Selected</p>
          <div>Carousel page by number</div>
          <div className='text-black'>
            <button className='w-[100px] bg-[#F0F0F0] mr-[20px] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">previous</button>
            <button className='w-[100px] bg-[#F0F0F0] rounded-lg p-[5px] active:bg-[gray] active:text-[white]' type="button">Next</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SidebarAllCategory