import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "./AddTodo.module.css";


function AddTodo({ onNewItem }) {

  const [name, setTodoName] = useState("")
  const [date, setTodoDate] = useState("")
  
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
    
  }

  const handleAddButtonClicked = () => {
    onNewItem(name, date,)
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="container text-center">
      <div className="row css-row">
        <div className="col-6">
          <input className={styles.WriteTodo} type="text" placeholder="Enter Todo here" value ={name} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input className={styles.DatePicker} type="date" value = {date}  onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success button" onClick={handleAddButtonClicked }>
           <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
