import { useSelector } from "react-redux";

export const Summary = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

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
                <div>${product.price}</div>
              </div>
            </div>
            <div className="summary-quantity">x{product.quantity}</div>
          </div>
        ))}
        <div className="summary-bottom">
          <div className="summary-costs">
            TOTAL <span> $</span>
          </div>
          <div className="summary-costs">
            SHIPPING <span> $50</span>
          </div>
          <div className="summary-costs">
            VAT(INCLUDED) <span> $</span>
          </div>
          <div className="summary-costs">
            GRAND TOTAL <span> $</span>
          </div>
        </div>
        <button className="orange-btn">CONTINUE &#38; PAY</button>
      </div>
    </>
  );
};
