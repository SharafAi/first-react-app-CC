import { createContext, useReducer } from "react";

// Context creation
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// Reducer function
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }

  return newTodoItems;
};

// Context Provider
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // Add new item
  const addNewItem = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { name, date },
    };
    dispatchTodoItems(newItemAction);
  };

  // Delete item
  const deleteItem = (name) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { name },
    };
    dispatchTodoItems(deleteItemAction);
  };

  // Provide values to children
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;