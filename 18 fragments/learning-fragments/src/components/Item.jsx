import styles from "./Item.module.css";

const Item = ({ foodList }) => {
  console.log(styles) 
  return <li className={`${styles['Bg-Item']}`}><span className={styles["Item-span"]}>{foodList}</span></li>;
};

export default Item;
