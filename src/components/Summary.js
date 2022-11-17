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
          <div className="modal-items" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="">{product.name}</div>
            <div>${product.price}</div>
            <div>X{product.quantity}</div>
          </div>
        ))}

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

        <button className="orange-btn">CONTINUE &#38; PAY</button>
      </div>
    </>
  );
};
