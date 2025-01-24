"use client";

import React from 'react'
import {useState} from 'react';
import { addTask } from '../api/api';
import { useRouter } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';

const AddTask = () => {
  const [task, setTask] = useState<string>('');
  const router = useRouter();

  const handleAddTask = async () => {
    await addTask({
      id: uuidv4(),
      text: task,
    })

    setTask('');
    router.refresh();
  }

  return (
    <form className="mt-3">
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <input 
          type="text" 
          className="form-control"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="button" className="btn btn-primary" onClick={handleAddTask}>Add</button>
      </div>
    </form>
  )
}

export default AddTask
