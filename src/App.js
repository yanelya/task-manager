import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import React from 'react'

function App() {
    //array UI is getting data from
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
  //I think this edits the array as we go on and resets when page is refreshed since tasks array is hard coded
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //main UI
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('no tasks')}
    </div>
  );
}

export default App;
