import Task from './Task'
import React from 'react'

/*

map takes in a function
for each (task) we want => {task.text}*
* changed to task={task bc props}
<h3> is parent of list
we add key to each child of list by doing key={task.id}

taking task in as prop

*/

const Tasks = ({tasksprop, onDelete}) => {
  return (
    <>
        {tasksprop.map(
          (aTaskarg) => (
            <Task key={aTaskarg.id} task={aTaskarg}
            onDelete={onDelete} />
        ))}
    </>
  )
}

export default Tasks