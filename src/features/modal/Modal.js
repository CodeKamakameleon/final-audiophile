// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleModalClosed, handleModalOpen } from "./modalSlice";
import clsx from "clsx";
import "../../styles/modal.css";
import { Link } from "react-router-dom";
import {
  deleteAll,
  removeFromCart,
  updateQuantity,
  updateTotal,
} from "../cart/cartSlice";

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

  // const totalPrice = () => {
  //   dispatch(updateTotal());
  // };

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
      <div ref={cartRef} className="modal-content">
        <div className="modal-top">
          <header className="modal-header">Cart({cart.count})</header>
          <button className="remove-btn" onClick={handleClear}>
            Remove all
          </button>
        </div>
        {/*  ITEMS */}
        {cart.products.map((product) => (
          <div className="modal-items" key={product.id}>
            <div className="modal-left">
              <img
                className="modal-img"
                src={product.cartImage}
                alt={product.name}
              />
              <div className="modal-block">
                <div className="modal-name">{product.shortName}</div>
                <div>${product.price}</div>
              </div>
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
        {cart.products.map((product) => (
          <div className="total" key={product.id}>
            TOTAL <span> ${cart.total}</span>
          </div>
        ))}
        <Link to="/checkout" className="checkout-btn">
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};
