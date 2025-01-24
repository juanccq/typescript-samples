import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTaskForm from "./components/AddTaskForm";
import './App.css'; 

interface Task {
  task: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<string>('');

  const handleAddTask = (task: string) => {
    setTasks([...tasks, {task, completed: false}]);
  };

  const handleEditTask = (index: number) => {
    setEditIndex(index);
    setEditTask(tasks[index].task);
  }

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editIndex].task = editTask;
      setTasks(newTasks);
      setEditIndex(null);
      setEditTask('');
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditTask('');
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setEditIndex(null);
    setEditTask('');
  };

  const handleToggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1 className="mb-4">
        Todo App
      </h1>
      <AddTaskForm onAdd={handleAddTask} />
      <TodoList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
      {editIndex !== null && (
        <div className="edit-task-form">
          <input 
            type="text" 
            className="form-contro"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSaveEdit}>Save</button>
          <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
        </div>  
      )}
    </div>
  )
}

export default App;