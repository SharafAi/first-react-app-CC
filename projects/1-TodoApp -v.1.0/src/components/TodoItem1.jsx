function TodoItem1() {
  let TodoName = ' Buy Milk';
  let TodoDate = '4/10/2025';


 return (
    <div class='container'>
      <div class='row css-row'>
        <div class='col-6'>
         {TodoName}
        </div>
        <div class='col-4'>
          {TodoDate}
        </div>
        <div class='col-2'>
          <button type="button" class="btn btn-danger button">Delete</button>
        </div>
      </div>
    </div>
    );
}

export default TodoItem1;