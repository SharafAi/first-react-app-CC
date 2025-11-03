import FoodItems from "./components/FoodItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let foodList = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMsg items={foodList} />
      <FoodItems items={foodList} />
    </>
  );
}

export default App;
