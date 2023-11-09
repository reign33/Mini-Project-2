import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { AiFillHome, AiFillAppstore, AiOutlinePlusSquare, AiOutlineInbox, AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import {FaChartBar} from "react-icons/fa";

function SideBarPage() {
  return (
    <div style={{ display: 'flex', height: '100vh'}}>
  
    <Sidebar backgroundColor='#131921'>
      <div className='pl-[60px] pt-[30px] h-[100px] bg-amazonclone'>
        <img src="/amazon_logo.png" alt="amazon logo" className='w-[110px]'/>
      </div>
      <Menu
        rootStyles={{
          [`.${menuClasses.icon}`]: {
            backgroundColor: '#131921',
            color: 'white',
          },
          backgroundColor:"#131921",
          color: "white",
          borderTop: "0.5px solid white"
          
        }}
      >
        <MenuItem active icon={<AiFillHome/>} className='hover:text-black'>Dashboard</MenuItem>
        <SubMenu label="Category" icon={<AiFillAppstore/>} className='my-[10px] hover:text-[red]'>
          <MenuItem icon={<AiOutlinePlusSquare/>} className='bg-amazonclone text-white hover:text-black'> Add Category</MenuItem>
          <MenuItem icon={<AiOutlineInbox/>} className='bg-amazonclone text-white hover:text-black' > All Category</MenuItem>
          <MenuItem icon={<FaChartBar/>} className='bg-amazonclone text-white hover:text-black' > Reports</MenuItem>
        </SubMenu>
        <SubMenu label="Products" icon={<AiFillAppstore/>} className='my-[10px] hover:text-[red]'>
          <MenuItem icon={<AiOutlinePlusSquare/>} className='bg-amazonclone text-white hover:text-black'> Add Product</MenuItem>
          <MenuItem icon={<AiOutlineInbox/>} className='bg-amazonclone text-white hover:text-black' > All Products</MenuItem>
          <MenuItem icon={<FaChartBar/>} className='bg-amazonclone text-white hover:text-black' > Reports</MenuItem>
        </SubMenu>
        <MenuItem active icon={<AiOutlineShoppingCart/>} className='mt-[10px] hover:text-black'>
          Orders
        </MenuItem>
      </Menu>
    </Sidebar>
    
  </div>
  )
}

export default SideBarPage;