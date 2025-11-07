import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="enter food item here"
      className={styles.FoodInput}
      onChange={handleOnChange}
    ></input>
  );
};

export default FoodInput;
