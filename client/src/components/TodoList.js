// TodoList.js
import React, { useContext, useMemo } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../TodoContext";
import axios from "axios";
import { toast } from "react-toastify";

const TodoList = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const completeTodosCount = todos.filter((todo) => todo.done).length;

  const numberOfRemainTask = useMemo(() => {
    return todos.filter((todo) => !todo.done).length;
  }, [todos]);

  const deleteAllCompletedTask = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/todos/completed`);
      const remainTodos = todos.filter((todo) => !todo.done);
      console.log("All Completed tasks deleted", res);
      addTodo(remainTodos);
      toast.success("Deleted All Todos Successfully");
    } catch (error) {
      console.log("Error while deleting all completed tasks: ", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
      {todos.length === 0 ? (
        <div>Please add some task to do.</div>
      ) : (
        <div className="todo-record">
          <span>{numberOfRemainTask} tasks left</span>
          <span onClick={deleteAllCompletedTask}>Clear {completeTodosCount} completed task</span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
