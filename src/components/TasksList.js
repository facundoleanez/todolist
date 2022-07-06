import React, { useReducer } from 'react'
import { taskReducer } from '../taskReducer'

const initialState = [
  {
    id: new Date().getDate(),
    desc: 'HOla',
    done: false,
  },
]

export const TasksList = () => {
  const [tasks] = useReducer(taskReducer, initialState)
  // const action ={
  //   type:'add',
  //   payload: newTask
  // }
  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <div className='d-flex justify-content-between' key={task.id}>
          <li className='list-group-item'>{task.desc}</li>
          <button className='btn btn-outline-danger'>Delete</button>
        </div>
      ))}
    </ul>
  )
}
