"use client";

import React from 'react'
import { removeTodo } from '../api/api';
import {useRouter} from 'next/navigation';



const DeleteBtn = (props: {id:string}) => {
  const router = useRouter();

  const handleDeleteTask = async (id: string) => {
    await removeTodo(id);
    router.refresh();
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => {handleDeleteTask(props.id)}}>Delete</button>
    </>
  )
}

export default DeleteBtn
