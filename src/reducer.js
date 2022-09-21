const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOADING_DONE":
      return { ...state, loading: false, cart: action.payload };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "CLEAR_ALL":
      return {
        ...state,
        cart: [],
      };
    case "DECREASE_AMOUNT":
      if (action.payload.amount === 1)
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id !== action.payload.id) return product;
          else {
            return { ...product, amount: product.amount - 1 };
          }
        }),
      };
    case "INCREASE_AMOUNT":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id !== action.payload) return product;
          else {
            return { ...product, amount: product.amount + 1 };
          }
        }),
      };

    case "SUMMARY":
      return {
        ...state,
        totalAmount: state.cart.reduce(
          (acc, product) => acc + product.amount,
          0
        ),
        total: state.cart.reduce(
          (acc, product) => acc + product.price * product.amount,
          0
        ),
      };

    default:
  }
};

export default reducer;
