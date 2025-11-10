import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddTodo.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    const name = todoNameElement.current.value;
    const date = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    event.preventDefault();
    addNewItem(name, date);
  };

  return (
    <div className="container text-center">
      <form className="row css-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.WriteTodo}
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input
            className={styles.DatePicker}
            type="date"
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
