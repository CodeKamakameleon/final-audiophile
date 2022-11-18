// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleModalClosed, handleModalOpen } from "./modalSlice";
import clsx from "clsx";
import "../../styles/modal.css";
import { Link } from "react-router-dom";
import { deleteAll, removeFromCart, updateQuantity } from "../cart/cartSlice";

import { Counter } from "./Counter";
import { useEffect, useRef } from "react";
import { handleModalClosed } from "./modalSlice";
import { useOnClickOutside } from "usehooks-ts";

export const Modal = () => {
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const cartRef = useRef();

  useOnClickOutside(cartRef, () => dispatch(handleModalClosed()));

  const handleCount = (payload) => {
    if (payload.quantity <= 0) {
      return dispatch(removeFromCart(payload.id));
    }

    dispatch(updateQuantity(payload));
  };

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
    <div ref={cartRef} className={clsx(`modal ${isOpen ? "modalIsOpen" : ""}`)}>
      <div className="modal-top">
        <header className="modal-header">Cart({cart.count})</header>
        <button className="remove-btn" onClick={handleClear}>
          Remove all
        </button>
      </div>

      {/*  ITEMS */}
      {cart.products.map((product) => (
        <div className="modal-items" key={product.id}>
          <img
            className="modal-img"
            src={product.cartImage}
            alt={product.name}
          />
          <div className="modal-block">
            <div className="modal-name">{product.shortName}</div>
            <div>${product.price}</div>
          </div>
          <div className="modal-counter">
            <Counter
              onChange={(num) => {
                handleCount({ id: product.id, quantity: num });
              }}
              count={product.quantity}
            />
          </div>
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
