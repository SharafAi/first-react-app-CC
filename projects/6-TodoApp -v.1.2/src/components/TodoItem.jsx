import { MdDelete } from "react-icons/md";
function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row css-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger button" onClick={()=> onDeleteClick(TodoName)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
