import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { AiFillHome, AiFillAppstore, AiOutlinePlusSquare, AiOutlineInbox, AiOutlineShoppingCart } from "react-icons/ai";
import {FaChartBar} from "react-icons/fa";
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SideBarPage() {
 const navigate = useNavigate();
  function backtomain(){
    navigate('/')
  }
  return (
<div>
    <Sidebar backgroundColor='#131921' className='h-[100vh]' >
      <div className='pl-[60px] pt-[30px] h-[100px] bg-amazonclone'>
        <img onClick={backtomain} src="/amazon_logo.png" alt="amazon logo" className='w-[110px] cursor-pointer'/>
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
        <MenuItem component={<Link to="/admin/dashboard"/>} active icon={<AiFillHome/>} className='menus hover:text-black'>Dashboard</MenuItem>
        <SubMenu label="Category" icon={<AiFillAppstore/>} className='menus my-[10px] hover:text-[red]'>
          <MenuItem component={<Link to="/admin/dashboard/addcategory"/>} icon={<AiOutlinePlusSquare/>} className='bg-amazonclone text-white hover:text-black'> Add Category</MenuItem>
          <MenuItem component={<Link to="/admin/dashboard/allcategory"/>} icon={<AiOutlineInbox/>} className='bg-amazonclone text-white hover:text-black' > All Category</MenuItem>
          <MenuItem component={<Link to="/admin/dashboard/reportcategory"/>} icon={<FaChartBar/>} className='bg-amazonclone text-white hover:text-black' > Reports</MenuItem>
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