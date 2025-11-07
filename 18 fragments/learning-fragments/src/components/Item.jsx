import styles from "./Item.module.css";

const Item = ({ foodList, handleBuyButton }) => {

  return (
    <li className={`${styles["Bg-Item"]}`}>
      <span className={styles["Item-span"]}>{foodList}</span>
      <button className={styles.buyButton} onClick={handleBuyButton}>
        buy
      </button>
    </li>
  );
};

export default Item;
