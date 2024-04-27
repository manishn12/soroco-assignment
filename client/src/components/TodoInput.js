import React, { useState, useContext } from "react";
import axios from "axios";
import TodoContext from "../TodoContext";
import { toast } from "react-toastify";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const getAllTodos = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos`);
      return res.data.results;
    } catch (error) {
      console.error("Error Getting all todos: ", error);
      toast.error("Something went wrong while fetching Todos!");
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create_todo`, { task, done: false });
        toast.success("Successfully Added new Task!");
        //Gettting all todos
        const todos = await getAllTodos();
        addTodo(todos);
      } catch (error) {
        console.error("Error adding todo:", error);
        toast.error("Something went wrong while adding task");
      }
      setTask("");
    }
  };

  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter your task..." value={task} onChange={handleInputChange} onKeyUp={handleKeyPress} />
    </div>
  );
};

export default TodoInput;
