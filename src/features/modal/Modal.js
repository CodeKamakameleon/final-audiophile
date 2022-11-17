// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleModalClosed, handleModalOpen } from "./modalSlice";
import clsx from "clsx";
import "../../styles/modal.css";
import { Link } from "react-router-dom";
import { deleteAll } from "../cart/cartSlice";

import { Counter } from "./Counter";

export const Modal = () => {
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  // const handleCancel = () => {
  //   dispatch(handleModalClosed());
  // };

  // const modalIsOpen = () => {
  //   dispatch(handleModalOpen());
  // };

  const handleClear = () => {
    dispatch(deleteAll());
  };

  console.log(cart);

  return (
    <div className={clsx(`modal ${isOpen ? "modalIsOpen" : ""}`)}>
      <div className="modal-top">
        <header className="modal-header">Cart({cart.count})</header>
        <button className="remove-btn" onClick={handleClear}>
          Remove all
        </button>
      </div>

      {/*  ITEMS */}
      {cart.products.map((product) => (
        <div className="modal-items" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="">{product.name}</div>
          <div>${product.price}</div>
          <Counter />
        </div>
      ))}

      <div className="total">
        TOTAL <span> $</span>
      </div>
      <Link to="/checkout" className="checkout-btn">
        CHECKOUT
      </Link>
    </div>
  );
};
