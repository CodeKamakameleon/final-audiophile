import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import checkmark from "../../images/shared/desktop/icon-check-mark.svg";

export const Modal2 = () => {
  const cart = useSelector((state) => state.cart);
  const m2IsOpen = useSelector((state) => state.modal2.isOpen);
  //   console.log(m2IsOpen);
  const tax = cart.total * 0.1;
  const shipping = 50;
  const grandTotal = cart.total + tax + shipping;
  return (
    <div className={clsx(`modal2 ${m2IsOpen ? "modal2IsOpen" : ""}`)}>
      <img className="checkmark" src={checkmark} alt="checkmark" />
      <h3 className="modal2-header">THANK YOU FOR YOUR ORDER</h3>
      <p>You will recieve and email confirmation shortly.</p>

      <div className="modal2-body">
        <div className="modal2-left">
          {cart.products.map((product) => (
            <div className="summary-items" key={product.id}>
              <div className="modal-left">
                <img
                  className="modal-img"
                  src={product.cartImage}
                  alt={product.shortName}
                />
                <div className="modal-block">
                  <div className="modal-name">{product.shortName}</div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
              <div className="summary-quantity">x{product.quantity}</div>
            </div>
          ))}
        </div>

        <div className="modal2-right">
          <h4 className="modal2-gtotal">GRAND TOTAL</h4>
          <div>$ {grandTotal}</div>
        </div>
      </div>

      <Link to="/home" className="orange-home-btn">
        BACK TO HOME
      </Link>
    </div>
  );
};
