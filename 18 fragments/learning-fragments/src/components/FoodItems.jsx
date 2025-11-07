import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => { 
    let newItems = [...activeItems, item]
    setActiveItems(newItems);
  };
  
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodList={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
