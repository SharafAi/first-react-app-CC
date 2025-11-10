import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  if (todoItems.length === 0) {
    return null;
  }

  return (
    <div className={styles.ItemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          TodoDate={item.date}
        />
      ))}
    </div>
  );
};

export default TodoItems;
