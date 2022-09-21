import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "./context";

const NavBar = () => {
  const { totalAmount } = useAppContext();

  return (
    <div className="navbar center">
      <div className="navbar-container container">
        <h2 className="navbar-header">shopping cart</h2>
        <div className="navbar-cart">
          <button className="navbar-cart__icon">
            <FaShoppingCart />
          </button>
          <span className="navbar-cart__total-amount">{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
