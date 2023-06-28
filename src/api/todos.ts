import { Todo } from "../types/TodoItem";
import { client } from "./index";

export const getTodos = () => {
  return client.get<Todo[]>("/todos");
};

export const addTodo = (todo: Todo) => {
  return client.post<Todo>("/todos", todo);
};

export const deleteTodos = (todosIds: number[]) => {
  const deleteRequests = todosIds.map((todoId) =>
    client.delete(`/todos/${todoId}`)
  );

  return Promise.all(deleteRequests);
};

export const updateTodos = (todosIds: number[], value: Partial<Todo>) => {
  const updateRequests = todosIds.map((todoId) =>
    client.patch<Todo>(`/todos/${todoId}`, value)
  );

  return Promise.all(updateRequests);
};
