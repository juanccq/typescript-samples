import React from 'react'
import { ITask } from './task'

import DeleteBtn from './DeleteBtn'
import EditBtn from './EditBtn'

interface TodoListProps {
  tasks: ITask[];
}

const TodoList = ({tasks}: TodoListProps) => {
  return (
    <div className="mt-3">
      {tasks.map((item) => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
          {item.text || 'No Text'}
          <div>
            <DeleteBtn id={item.id} />
            <EditBtn id={item.id} />
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
