import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.WelcomeMsg}>Enjoy your day!</p>
    )
  );
};

export default WelcomeMsg;
