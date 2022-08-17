import React from 'react'
import { FaTimes } from 'react-icons/fa' 

/*

map takes in a function
for each (task) we want => {task.text}*
* changed to task={task bc props}
<h3> is parent of list
we add key to each child of list by doing key={task.id}

taking task in as prop

*/

const Tasks = ({tasks, onDelete}) => {
  return (
    <>
        {tasks.map(
          (aTaskarg, index) => (
             <div className='task' key={index}> 
                <h3>{aTaskarg.text}{' '} 
                <FaTimes 
                  style={{color: 'red'}} 
                  onClick={() => onDelete(aTaskarg.id)} 
                /> 
                </h3>
                <p>{aTaskarg.day}</p>
             </div>
        ))}
    </>
  )
}

export default Tasks