import "./App.css";
import Header from "./components/Headers";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app-container">
      <TodoProvider>
        <Header />
        <TodoInput />
        <TodoList />
      </TodoProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
