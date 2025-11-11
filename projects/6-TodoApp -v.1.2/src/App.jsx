import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItemsContextProvider from "./store/Todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="Todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
      </TodoItemsContextProvider>
    
  );
}

export default App;
