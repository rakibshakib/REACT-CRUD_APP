export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((item) => {
          return item.id !== action.payload;
        }),
      };
      
    case "UPDATE_PRODUCT":
      const newProduct = action.payload;
      console.log("payload in reducer", newProduct); 

      const updateProduct = state.products.map((item) => {
        if (item.id === newProduct.id) {
          return newProduct;
        }
        return item;
      });
      // console.log("update product", updateProduct);
      return {
        ...state,
        products: updateProduct,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
