import React from 'react'

function SideBarPage() {
  return (
<<<<<<< HEAD
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-1 bg-amazonclone">01</div>
      <div class="col-span-2 ...">02</div>
      <div class="row-span-2 col-span-2 ...">03</div>
    </div>
=======
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
>>>>>>> cde03f41529b70fe5a9a104120e686c49ea62685
  )
}

export default SideBarPage