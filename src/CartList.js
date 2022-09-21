import React from "react";
import Product from "./Product";
import { useAppContext } from "./context";

const CartList = () => {
  const { totalAmount, cart, total, clearAll, loading } = useAppContext();
  if (loading) return <h1 className="no-item">loading . . .</h1>;
  if (!totalAmount) return <h1 className="no-item">no item</h1>;

  return (
    <div className="cart-list center">
      <div className="cart-list-container">
        {cart.map((item) => (
          <Product {...item} key={item.id} />
        ))}

        <div className="summary">
          <h1 className="summary__title">total :</h1>
          <p className="summary__price">$ {total.toFixed(2)}</p>
        </div>

        <button className="clear-all" onClick={() => clearAll()}>
          clear all items
        </button>
      </div>
    </div>
  );
};

export default CartList;
