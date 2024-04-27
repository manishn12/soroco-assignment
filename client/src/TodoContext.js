import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/todos");
        setTodos(response.data.results);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos(newTodo);
  };

  return <TodoContext.Provider value={{ todos, addTodo }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
