import styles from "./Item.module.css";

const Item = ({ foodList, bought , handleBuyButton }) => {

  return (
    <li className={`${styles["Bg-Item"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["Item-span"]}>{foodList}</span>
      <button className={styles.buyButton} onClick={handleBuyButton}>
        buy
      </button>
    </li>
  );
};

export default Item;
