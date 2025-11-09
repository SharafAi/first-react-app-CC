import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (name, date) => {
    const newTodoItems = [...todoItems, { name: name, date: date }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted:${todoItemName}`);
  };

  return (
    <center className="Todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 ? (
        <WelcomeMsg />
      ) : (
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      )}
    </center>
  );
}

export default App;
