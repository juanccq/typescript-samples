import {useState} from 'react';

interface AddTaskFormProps {
  onAdd: (task: string) => void;

}

const AddTaskForm = ({onAdd}: AddTaskFormProps) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div className="add-task-form">
      <input type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />

      <button onClick={handleAddTask}>Add Tasks</button>
    </div>
  )
}

export default AddTaskForm;