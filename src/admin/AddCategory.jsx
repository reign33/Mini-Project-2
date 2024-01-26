import React from 'react'
<<<<<<< HEAD
=======
import SideBarPage from './SideBarPage';
import "./addcategory.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  // const [inputData, setInputData] = useState({
  //   name: ''
  // })
  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:8000/category', inputData )
  //   .then(res => {
  //     alert("Data Posted Successfully")
  //     navigate('/admin/allcategory')
  //   })
  // }
>>>>>>> 889a7e912e85cc2329f1413d6c435327c9583677

export default function AddCategory() {
  return (
<<<<<<< HEAD
    <div>AddCategory</div>
=======
    

    // <div className='flex'>
    //   <SideBarPage />
      <form onSubmit={handleSubmit} action="">
        <div className='flex flex-col justify-evenly items-start w-[80vh] h-[35vh] border border-[#DDDDDD] rounded-xl mt-[30px] ml-[30px] pl-[30px] shadow-xl'>
          <p className='text-[25px]'>Add Category</p>
            <input className='sample w-[20rem] h-[4rem] rounded-xl border border-[gray] pl-[5px]' type='text' name="" placeholder=" Category name" id="" />
            <button
              className='border border-[#EC6E45] bg-[#FF9900] text-white text-[14px] font-medium rounded-lg px-[10px] py-[3px] active:bg-[#EC6E45] w-[200px]'
              type="submit"
            >
              Add Category
            </button>
        </div>
      </form>
    // </div>
>>>>>>> 889a7e912e85cc2329f1413d6c435327c9583677
  )
}
