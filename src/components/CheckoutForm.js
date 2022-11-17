export const CheckoutForm = () => {
  return (
    <form className="checkout">
      <header className="checkout-title">CHECKOUT</header>

      <div className="checkout-billing">
        <h2 className="checkout-header">BILLING DETAILS</h2>

        <label className="checkout-label">Name</label>
        <label className="checkout-label">Email Address</label>

        <input className="checkout-input" type="text" placeholder="Name" />
        <input className="checkout-input" type="email" placeholder="E-mail" />

        <label className="checkout-label2">Phone Number</label>

        <input
          className="checkout-input"
          type="tel"
          placeholder="Phone Number"
        />
      </div>

      <div className="checkout-shipping">
        <h2 className="checkout-header">SHIPPING INFO</h2>

        <label className="shipping-label2">Address</label>
        <input
          className="shipping-input"
          type="text"
          placeholder="Shipping Address"
        />

        <label className="checkout-label">Zip Code</label>
        <label className="checkout-label">City</label>

        <input className="checkout-input" type="text" placeholder="Zip Code" />
        <input className="checkout-input" type="text" placeholder="City" />

        <label className="shipping-label2">Country</label>
        <input className="checkout-input" type="text" placeholder="Country" />
      </div>

      <div className="checkout-payment">
        <h2 className="checkout-header">PAYMENT DETAILS</h2>
        <label className="payment-label">Payment Method</label>

        <div className="radio-border radio:checked">
          <input
            type="radio"
            value="e-money"
            id="e-money"
            className="radio "
            name="payment"
          />
        </div>

        <div className="radio-border radio:checked">
          <input
            type="radio"
            value="Cash on delivery"
            id="Cash on delivery"
            className="radio "
            name="payment"
          />
        </div>

        <label className="checkout-label">e-Money Number</label>
        <input className="checkout-input" type="number" />
        <label className="checkout-label">e-Money Pin</label>
        <input className="checkout-input" type="number" />
      </div>
    </form>
  );
};
