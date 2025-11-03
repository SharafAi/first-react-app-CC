import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let FoodItems = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  return (
    <>
      <h1>Healthy Foods</h1>
      {FoodItems.length === 0 && <h3>im still hungry</h3>}
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
