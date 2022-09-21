import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppContext } from "./context";

const Product = ({ id, title, price, img, amount }) => {
  const { deleteProduct, increaseAmount, decreaseAmount } = useAppContext();
  return (
    <div className="product">
      <img src={img} alt={title} className="product-img" />
      <div className="product-about">
        <h3 className="product-name">{title}</h3>
        <p className="product-price">$ {price}</p>
        <div className="product-option">
          <button
            className="product-option__decrease"
            onClick={() => decreaseAmount(id, amount)}
          >
            <FaMinus />
          </button>
          <p className="product-option__quantity">{amount}</p>
          <button
            className="product-option__increase"
            onClick={() => increaseAmount(id)}
          >
            <FaPlus />
          </button>
          <button
            className="product-option__delete"
            onClick={() => deleteProduct(id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
