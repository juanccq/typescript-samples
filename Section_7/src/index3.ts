import axios, {AxiosError} from 'axios';

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getAllTasks(): Promise<Task[] | null> {
    try {
      const response = await axios.get<Task[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      if( error instanceof AxiosError ){
        this.handleApiError(error);
        throw error;
      }
    }
    return null;
  }

  async addTask(task: Omit<Task, 'id'>): Promise<Task | null> {
    try {
      const response = await axios.post<Task>(this.apiUrl, task);
      return response.data;
    } catch (error) {
      if(error instanceof AxiosError) {
        this.handleApiError(error);
        throw error;
      }
    }

    return null;
  }

  async updateTask(updatedTask: Task): Promise<Task | null> {
    try {
      const response = await axios.put<Task>(`${this.apiUrl}/${updatedTask.id}`, updatedTask)
      return response.data;
    } catch (error) {
      if(error instanceof AxiosError) {
        this.handleApiError(error);
        throw error;
      }
    }

    return null;
  }

  async deleteTask(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      if(error instanceof AxiosError) {
        this.handleApiError(error);
        throw error;
      }
    }
  }

  private handleApiError(error: AxiosError) {
    if(error.response) {
      console.error('Error in the response');
    } else if(error.request) {
      console.error('Error sending request');
    } else {
      console.error('Error setting up the request');
    }
  }
}

const taskService1 = new TaskService();

async function runExample() {
  try {
    const newTask: Omit<Task, 'id'> = {
      userId: 1,
      title: 'NewTask',
      completed: false
    }

    const addedTask = await taskService1.addTask(newTask);
    console.log(`Added task:`, addedTask);
    

    const tasks = await taskService1.getAllTasks();

    if( tasks == null) {
      return ;
    }

    const taskToUpdate = tasks[0];
    taskToUpdate.completed = true;
    const updatedTask = await taskService1.updateTask(taskToUpdate);
    console.log(`Updated task: `, updatedTask);

    const taskIdToDelete = tasks[0].id;
    await taskService1.deleteTask(taskIdToDelete);

    const tasksAfterDelete = await taskService1.getAllTasks();
    console.log(`Deleted task: `, tasksAfterDelete);
  } catch (error) {
    if( error instanceof AxiosError) {
      console.error(`${error.message}`);
    }
  } finally {
    console.log('finally block called');
    
  }
}

runExample();