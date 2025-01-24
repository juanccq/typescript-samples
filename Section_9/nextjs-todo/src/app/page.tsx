import {getAllTodos} from "./api/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = async () => {
  const tasks = await getAllTodos();

  return (
    <div className="container mt-4">
      <h1 className="text-center">To Do App</h1>
      <AddTask />
      <ul className="list-group">
        <TodoList tasks={tasks} />
      </ul>
    </div>
  )
}

export default Home