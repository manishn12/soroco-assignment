const Todo = require("../models/todoModel");

exports.addTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ success: true, todo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    const totolTodosCount = todos.length;
    const undoneTodosCount = todos.filter((todo) => !todo.done).length;
    res.status(200).json({ success: true, results: todos, undoneTodosCount, totolTodosCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ done: true });
    res.json({ message: "Completed todos deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
