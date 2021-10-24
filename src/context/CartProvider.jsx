import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updateAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartIndex = state.items.findIndex(
        (element) => element.id === action.payload.id
      );

      const existingItem = state.items[existingCartIndex];

      let updateItems;

      if (existingItem) {
        const updateItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };

        updateItems = [...state.items];
        updateItems[existingCartIndex] = updateItem;
      } else {
        updateItems = state.items.concat(action.payload);
      }

      return {
        items: updateItems,
        totalAmount: updateAmount,
      };

    default:
      return defaultState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD_TO_CART", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE_FROM_CART", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
