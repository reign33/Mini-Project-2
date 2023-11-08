import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { AiFillHome, AiFillAppstore, AiOutlinePlusSquare, AiOutlineInbox, AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import {FaChartBar} from "react-icons/fa";

function SideBarPage() {
  return (
    <div style={{ display: 'flex', height: '100vh'}}>
  
    <Sidebar className='bg-amazonclone'>
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
          <MenuItem icon={<AiOutlinePlusSquare/>} className='bg-amazonclone text-white bg-amazonclone'> Add Category</MenuItem>
          <MenuItem icon={<AiOutlineInbox/>} className='bg-amazonclone text-white bg-amazonclone' > All Category</MenuItem>
          <MenuItem icon={<FaChartBar/>} className='bg-amazonclone text-whitebg-amazonclone' > Reports</MenuItem>
        </SubMenu>
        <MenuItem active icon={<AiOutlineShop/>} className='my-[10px]bg-amazonclone'>
          Products
        </MenuItem>
        <MenuItem active icon={<AiOutlineShoppingCart/>} className='mt-[10px]bg-amazonclone'>
          Orders
        </MenuItem>
      </Menu>
      <div className='bg-amazonclone h-[40vh]'></div>
    </Sidebar>
    
    
  </div>
  )
}

export default SideBarPage;