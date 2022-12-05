import { useDispatch, useSelector } from "react-redux";

import { toggleModal2 } from "../features/modal/modal2slice";

export const Summary = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  const tax = cart.total * 0.1;

  const shipping = 50;

  const grandTotal = cart.total + tax + shipping;

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(toggleModal2());
  };

  return (
    <>
      <div className="summary">
        <h3 className="summary-header">SUMMARY</h3>

        {/* items */}
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
        <div className="summary-bottom">
          <div className="total">
            TOTAL <span> $ {cart?.total}</span>
          </div>

          <div className="total summary-costs">
            SHIPPING <span> $ {shipping}</span>
          </div>
          <div className="total summary-costs">
            VAT <br /> (INCLUDED) <span> $ {tax}</span>
          </div>

          <div className="total summary-costs">
            GRAND TOTAL <span className="grandTotal"> $ {grandTotal}</span>
          </div>
        </div>
        <button onClick={handleOpen} className="orange-btn-checkout">
          CONTINUE &#38; PAY
        </button>
      </div>
    </>
  );
};
