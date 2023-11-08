import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { AiFillHome, AiFillAppstore, AiOutlinePlusSquare, AiOutlineInbox, AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import {FaChartBar} from "react-icons/fa";
import { Link } from 'react-router-dom';


function SideBarPage() {
  return (
    <div>
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-1 bg-amazonclone">01</div>
      <div class="col-span-2 ...">02</div>
      <div class="row-span-2 col-span-2 ...">03</div>
    </div>

    <div style={{ display: 'flex', height: '100vh'}}>
  
    <Sidebar backgroundColor="black">
      <div className='pl-[60px] pt-[30px] h-[100px] bg-amazonclone'>
        <img src="/amazon_logo.png" alt="amazon logo" className='w-[110px]'/>
      </div>
      <Menu
        rootStyles={{
          [`.${menuClasses.icon}`]: {
            backgroundColor: 'bg-amazonclone',
            color: 'white',
          },
          backgroundColor:"black",
          color: "white",
          borderTop: "0.5px solid white"
          
        }}
      >
        <MenuItem active icon={<AiFillHome/>} className='bg-amazonclone'>Dashboard</MenuItem>
        <SubMenu label="Category" icon={<AiFillAppstore/>} className='my-[10px] hover:text-[red]'>
          <MenuItem component={<Link to="addcategory"/>} icon={<AiOutlinePlusSquare/>} className='bg-black text-white hover:text-black'> Add Category</MenuItem>
          <MenuItem icon={<AiOutlineInbox/>} className='bg-black text-white hover:text-black' > All Category</MenuItem>
          <MenuItem icon={<FaChartBar/>} className='bg-black text-white hover:text-black' > Reports</MenuItem>
        </SubMenu>
        <SubMenu label="Reports" icon={<AiOutlineShop/>} className='my-[10px] hover:text-[red]'>
          <MenuItem icon={<AiOutlinePlusSquare/>} className='bg-black text-white hover:text-black'> Add Product</MenuItem>
          <MenuItem icon={<AiOutlineInbox/>} className='bg-black text-white hover:text-black' > All Product</MenuItem>
          <MenuItem icon={<FaChartBar/>} className='bg-black text-white hover:text-black' > Reports</MenuItem>
        </SubMenu>
        <MenuItem active icon={<AiOutlineShoppingCart/>} className='mt-[10px] hover:text-black'>
          Orders
        </MenuItem>
      </Menu>
    </Sidebar>
  </div>
  </div>
  )
}

export default SideBarPage