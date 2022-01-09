import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { products } from "./productsData";

const initialState = {
  products: products,
};

export const StateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // website action
  // delete product
  const deletProduct = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };
  const updateProduct = (product) => {
    console.log("this is in state", product);
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: product,
    });
  };
  const addProducts = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  return (
    <StateContext.Provider
      value={{
        products: state.products,
        updateProduct,
        deletProduct,
        addProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
