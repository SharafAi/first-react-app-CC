import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let FoodItems = ["Milk", "Fish", "Orange", "Meat", "Banana"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
