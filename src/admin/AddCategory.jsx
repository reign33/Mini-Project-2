import React from 'react'
import SideBarPage from './SideBarPage';
import "./addcategory.css"


function AddCategory() {

  function handlesubmit(e){
    e.preventDefault();
  } 

  return (
    
    <div className='flex'>
      <SideBarPage />
<<<<<<< HEAD
        <div className='flex flex-col justify-evenly items-start w-[80vh] h-[35vh] border border-[#DDDDDD] rounded-xl mt-[30px] ml-[30px] pl-[30px] shadow-xl'>
          <p className='text-[25px]'>Add Category</p>
            <input className='sample w-[20rem] h-[4rem] rounded-xl border border-[gray] pl-[5px]' type='text' name="" placeholder=" Category name" id="" />
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45] w-[200px]' type="button"> Add Category </button>
=======
          <div className='flex flex-col justify-evenly items-start w-[80vh] h-[35vh] border border-[#DDDDDD] rounded-xl mt-[30px] ml-[30px] pl-[30px] shadow-xl'>
            <p className='text-[25px]'>Add Category</p>

            <form onSubmit={handlesubmit} className='flex flex-col justify-evenly mt-[30px] ml-[30px] pl-[30px] h-[35vh]'>
            <input className='sample w-[20rem] h-[4rem] rounded-xl border border-[gray] pl-[5px]' type='text' name="" placeholder="Category name" id="" />
            <button className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] 
            font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45] w-[200px]' type="submit"> Add Category </button>
           </form>

          </div>
>>>>>>> dbcb41f289fde3f98938d580cfb8d1ddc785c210
        </div>
    </div>
  )
}

export default AddCategory