import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";

function App() {
  let foodList = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  return (
    <>
      <h1 className="Item-Heading">Healthy Foods</h1>
      <ErrorMsg items={foodList} />
      <FoodItems items={foodList} />
    </>
  );
}

export default App;
