import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodList, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodList, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="Item-Heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg items={foodList} />
        <FoodItems items={foodList} />
      </Container>

      <Container>
        <p>
          above is the healthy foods that are good for your health and well
          being
        </p>
      </Container>
    </>
  );
}

export default App;
