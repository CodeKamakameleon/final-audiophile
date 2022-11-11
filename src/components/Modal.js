// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModalClosed,
  handleModalOpen,
} from "../features/modal/modalSlice";
import clsx from "clsx";
import "../styles/modal.css";

export const Modal = () => {
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(handleModalClosed());
  };

  const modalIsOpen = () => {
    dispatch(handleModalOpen());
  };

  return (
    <div className={clsx(`modal ${isOpen ? "modalIsOpen" : ""}`)}>
      <header>Cart({cart.count})</header>
      <button>Remove all</button>

      {/*  ITEMS */}

      <div>TOTAL</div>

      <button className="checkout-btn">CHECKOUT</button>
    </div>
  );
};
