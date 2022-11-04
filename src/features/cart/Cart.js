import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import emptyCart from "../../images/cart/empty-cart.png";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <button className="cart-wrapper">
      <img className="cart-icon" alt="cart-icon" src={emptyCart} />
      {cart.count > 0 && <div className="cart-count">{cart.count}</div>}
    </button>
  );
};
