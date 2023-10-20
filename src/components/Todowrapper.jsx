import React from 'react'
import { useState } from 'react';

function Todowrapper() {
    const [text, setText] =useState('');
    const [addtask, setAddtask] =useState([]);
  
    function handletext(e){
      setText(e.target.value);
    }
  
    function handleaddtask(addtask){
      e.preventDefault
      setAddtask(prev => {
        const newAddtask = {task: addtask, completed: false}
        return [...prev, newAddtask]
      })
  
  
   //sample footerdesign changes   
    }


  return (
    <div> 
        <form onSubmit={handleaddtask}>
            <input type="text" placeholder="Type your idea" onChange={handletext}/>
            <button type="submit">Add Task</button>
        </form> 
  </div>
  )
}

export default Todowrapper