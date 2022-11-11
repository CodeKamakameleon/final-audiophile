import { useDispatch, useSelector } from "react-redux";

import emptyCart from "../../images/cart/empty-cart.png";
import { toggleModal } from "../modal/modalSlice";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(toggleModal());
  };
  return (
    <button onClick={handleOpen} className="cart-wrapper">
      <img className="cart-icon" alt="cart-icon" src={emptyCart} />
      {cart.count > 0 && <div className="cart-count">{cart.count}</div>}
    </button>
  );
};
