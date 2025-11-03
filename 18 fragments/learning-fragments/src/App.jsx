import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let FoodItems = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  if (FoodItems.length === 0){
    return <h3>im still hungry</h3>
  }
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
