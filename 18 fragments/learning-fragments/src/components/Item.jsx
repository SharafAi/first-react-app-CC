import styles from "./Item.module.css";

const Item = ({ foodList }) => {
  const buyButtonClicked = (event) => {
    console.log(event);
    console.log(`you bought ${foodList} succesfully`);
  };
  return (
    <li className={`${styles["Bg-Item"]}`}>
      <span className={styles["Item-span"]}>{foodList}</span>
      <button className={styles.buyButton} onClick={(event) => buyButtonClicked(event)}>
        buy
      </button>
    </li>
  );
};

export default Item;
