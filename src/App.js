import React from 'react'
import { TasksList } from './components/TasksList'

import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='bg-light p-2 mt-5 rounded shadow'>
        <h1 className='text-primary text-center my-2'>My Todo-s</h1>
        <hr />
        <TasksList />
      </div>
    </div>
  )
}

export default App
