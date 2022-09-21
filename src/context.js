import { createContext, useContext, useEffect, useReducer } from "react";
// import data from "./data";
import reducer from "./reducer";

const AppContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  // cart: [...data],
  // totalAmount: data.length,
  // total: data.reduce((acc, product) => acc + product.price, 0),
  loading: false,
  cart: [],
  totalAmount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteProduct = (id) =>
    dispatch({ type: "DELETE_PRODUCT", payload: id });

  const decreaseAmount = (id, amount) =>
    dispatch({ type: "DECREASE_AMOUNT", payload: { id, amount } });

  const increaseAmount = (id, amount) =>
    dispatch({ type: "INCREASE_AMOUNT", payload: id });

  const clearAll = () => dispatch({ type: "CLEAR_ALL" });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({ type: "LOADING_DONE", payload: data });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "SUMMARY" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteProduct,
        decreaseAmount,
        increaseAmount,
        clearAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
