import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let FoodItems = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  let EmptyMsg = FoodItems.length === 0 ? <h3>im still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Foods</h1>
      {EmptyMsg}
      <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
