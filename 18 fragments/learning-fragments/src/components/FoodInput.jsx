import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {
  

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
