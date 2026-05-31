import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export const TodoProvider = ({ children }) => {
  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

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
