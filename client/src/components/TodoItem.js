import axios from "axios";
import React, { useState, useContext } from "react";
import TodoContext from "../TodoContext";
import { FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.done);
  const { todos, addTodo } = useContext(TodoContext);

  const handleCheckboxChange = async (todo) => {
    const updatedTodo = { ...todo, done: !isChecked };

    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/todo/${todo._id}`, updatedTodo);
      setIsChecked((prev) => !prev);

      const updatedTodos = todos.map((t) => (t._id === todo._id ? updatedTodo : t));
      addTodo(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteClick = async (todo) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/todo/${todo._id}`);
      const remainTodos = todos.filter((eachTodo) => eachTodo._id !== todo._id);
      addTodo(remainTodos);
      toast.success("Task Successfully deleted");
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className={`todo-item`}>
      <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(todo)} />
      <p style={{ fontSize: "20px", padding: "8px" }} className={`${todo.done ? "strike" : ""}`}>
        {todo.task}
      </p>
      <button onClick={() => handleDeleteClick(todo)}>
        <div style={{ fontSize: "30px" }}>
          <FiDelete />
        </div>
      </button>
    </div>
  );
};

export default TodoItem;
