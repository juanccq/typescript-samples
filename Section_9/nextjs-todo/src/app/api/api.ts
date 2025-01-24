"use server";

import { ITask } from "../components/task";

export async function addTask(input: ITask): Promise<ITask> {
  const response = await fetch("http://localhost:5000/task", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
    })

  const result = await response.json();
  return result;
}

export async function getAllTodos(): Promise<ITask[]> {
  const todos = await fetch("http://localhost:5000/task", {
    cache: "no-store",    
  });

  return todos.json();
}

export async function removeTodo(id: string): Promise<void> {
  await fetch(`http://localhost:5000/task/${id}`, {
    method: "DELETE"
  })
}

export async function editTodo(todo: ITask): Promise<ITask> {
  const res = await fetch(`http://localhost:5000/task/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })

  const updatedTodo = await res.json();

  return updatedTodo;
}