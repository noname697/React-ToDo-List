import { useState } from "react";
import TodoContext from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prev) => {
      const todo = {
        id: prev.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prev, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  const removeTodo = (todo) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id != todo.id);
    });
  };
  return (
    <TodoContext value={{ todos, addTodo, toggleTodoCompleted, removeTodo }}>
      {children}
    </TodoContext>
  );
};
