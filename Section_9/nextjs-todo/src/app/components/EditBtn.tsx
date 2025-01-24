"use client";

import React from 'react'
import { editTodo } from '../api/api';
import {useRouter} from 'next/navigation';

const EditBtn = (props: {id: string}) => {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleOnclick = async () => {
    await editTodo({
      id: props.id,
      text: inputValue,
    });

    router.refresh();
    setEditing(false);
    setInputValue('');
  }

  return (
    <>  
      {editing ? (
        <div>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button type="button" className="btn btn-primary" onClick={handleOnclick}>OK</button>
        </div>
      ): (
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>Edit</button>
      )}
    </>
  )
}

export default EditBtn
