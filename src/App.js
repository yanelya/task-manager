import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import React from 'react'

/* 

the code inside the return contains JSX code
You can only return a single JSX element, so everything must be inside the <div> tag
JSx expressions must have only have 1 parent element
 
"/" is root directory
"./" is current directory
"../" is the parent of current directory
"../../" parent of parent directory and so on

Curly braces { } are special syntax in JSX used to evaluate a JavaScript expression during compilation.
Parenthesis are used in an arrow function to return an object.

States get passed down, actions get passed up

() => ({ name: 'Amanda' })
 
is the same as:

() => {
   return { name : 'Amanda' }
}

It is not necessary to add a semicolon in JavaScript. JavaScript engine automatically inserts a semicolon at the first possible opportunity on a line after a return statement.

tasks={tasks} taking tasks and passing task as prop into component

WHen returning, we must only return a single element, is why we wrap our html in a div, to return that element

*/


function App() {
    /*

    1st element is state and 2nd is function to update state
    inside Tasks -> now is part of component compared to if it were outside the Tasks function
    mkaing it local instead of global
    its not standard to have tasks in Task componnent bc we migth want to acess this in other components
    WE can you like an API where you cnan pull pieces of state from

    */
    const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text: 'Doctor Appt',
              day: 'Feb 5',
              reminder: true,
          },
          {
              id: 2,
              text: 'Dentist Appt',
              day: 'May 7',
              reminder: true,
          },
          {
              id: 3,
              text: 'Opera',
              day: 'Jun 9',
              reminder: false,
          }
      
      ] 
  )

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (<Tasks tasksprop={tasks} onDelete={deleteTask} />) : ('no tasks')}
    </div>
  );
}

export default App;
