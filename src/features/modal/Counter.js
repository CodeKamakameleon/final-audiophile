import { useSelector } from "react-redux";
import { useCounter } from "../../components/useCounter";

export const Counter = () => {
  const cart = useSelector((state) => state.cart);

  const initialState = cart.products.map((product) => product.quantity);
  const { up, down, display } = useCounter(initialState);

  return (
    <div className="product-counter">
      <button className="count-btn" onClick={down}>
        -
      </button>
      {display}
      <button className="count-btn" onClick={up}>
        +
      </button>
    </div>
  );
};
