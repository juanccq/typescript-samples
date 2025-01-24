import Task from "./Task";

interface TodoListProps {
  tasks: { task: string, completed: boolean }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onToggleComplete: (index: number ) => void;
}

const TodoList = ({
  tasks,
  onEdit,
  onDelete,
  onToggleComplete
}: TodoListProps) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task.task}
          completed={task.completed}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
          onToggleComplete={() => onToggleComplete(index)}
          />
      ))}
    </div>
  );
};

export default TodoList;