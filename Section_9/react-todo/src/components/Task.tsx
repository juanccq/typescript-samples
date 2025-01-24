interface TaskProps {
  task: string;
  completed: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

const Task = ({
  task,
  completed,
  onEdit,
  onDelete,
  onToggleComplete,
}: TaskProps) => {
  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <span>{task}</span>
      <div className="task-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      <input type="checkbox" checked={completed} onChange={onToggleComplete} />
    </div>
  );
};

export default Task;