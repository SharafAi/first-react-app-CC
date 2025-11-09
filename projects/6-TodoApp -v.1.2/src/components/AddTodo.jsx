import { /*useState,*/ useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  //useState not needed after using useRef in this case
  // const [name, setTodoName] = useState(""); 
  // const [date, setTodoDate] = useState(""); 
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`no of updates are : ${noOfUpdates.current}`);
  // };

const handleAddButtonClicked = (event) => {
  const name = todoNameElement.current.value;
  const date = todoDateElement.current.value;
  todoNameElement.current.value = "";
  todoDateElement.current.value = "";
    // console.log(`${name} due on: ${date}`);
    event.preventDefault();
    onNewItem(name, date);
    // setTodoName("");
    // setTodoDate("");
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
            // value={name}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.DatePicker}
            type="date"
            ref={todoDateElement}
            // value={date}
            // onChange={handleDateChange}
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
