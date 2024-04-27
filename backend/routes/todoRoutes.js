const express = require("express");
const router = express.Router();
const { addTodo, getTodos, updateTodo, deleteCompletedTodos, deleteTodo } = require("../controllers/todoController");
const cors = require("cors");

router.use(cors()); // Enable CORS

router.post("/create_todo", addTodo);
router.get("/todos", getTodos);
router.put("/todo/:id", updateTodo); // Update a todo by ID
router.delete("/todo/:id", deleteTodo); // Delete a todo by ID
router.delete("/todos/completed", deleteCompletedTodos); // Delete all completed todos

module.exports = router;
