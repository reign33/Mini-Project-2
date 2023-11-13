import React from 'react'
import SideBarPage from './SideBarPage';
import "./addcategory.css"


function AddCategory() {
  return (
    
    <div className='flex'>
      <SideBarPage />
          <div className='flex flex-col justify-evenly items-start w-[80vh] h-[35vh] border border-[#DDDDDD] rounded-xl mt-[30px] ml-[30px] pl-[30px] shadow-xl'>
            <p className='text-[25px]'>Add Category</p>
            <input className='sample w-[20rem] h-[4rem] rounded-xl border border-[gray] pl-[5px]' type='text' name="" placeholder=" Category name" id="" />
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
            font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45] w-[200px]' type="button"> Add Category </button>
          </div>
        </div>
  )
}

export default AddCategory