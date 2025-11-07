import Item from "./Item";

const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodList={item} handleBuyButton={()=> console.log(`${item} bought`)}/>
      ))}
    </ul>
  );
};

export default FoodItems;
