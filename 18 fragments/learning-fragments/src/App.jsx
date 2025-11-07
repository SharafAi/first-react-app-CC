import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodList = ["Milk", "Fish", "Orange", "Meat", "Banana"];
  // let textToShow = "Food item interd by user" //this will be fixed in next topic

  const handleOnChange = (event) => {
    console.log(event.target.value);
    // textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="Item-Heading">Healthy Foods</h1>
        <ErrorMsg items={foodList} />
        <FoodInput handleOnChange ={handleOnChange} />
        <FoodItems items={foodList} />
      </Container>

      {/* <Container>
        <p>
          above is the healthy foods that are good for your health and well
          being
        </p>
      </Container> */}
    </>
  );
}

export default App;
