import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";

function App() {
  let foodList = ["Milk", "Fish", "Orange", "Meat", "Banana"];

  return (
    <>
      <Container>
        <h1 className="Item-Heading">Healthy Foods</h1>
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
