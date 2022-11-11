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

        <label className="checkout-label">Phone Number</label>
        <input
          className="checkout-input"
          type="tel"
          placeholder="Phone Number"
        />
      </div>

      <div className="checkout-shipping">
        <h2 className="checkout-header">SHIPPING INFO</h2>
        <label className="checkout-label">Address</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="Shipping Address"
        />

        <label className="checkout-label">Zip Code</label>
        <input className="checkout-input" type="text" placeholder="Zip Code" />

        <label className="checkout-label">City</label>
        <input className="checkout-input" type="text" placeholder="City" />
        <label className="checkout-label">Country</label>
        <input className="checkout-input" type="text" placeholder="Country" />
      </div>

      <div className="checkout-payment">
        <h2 className="checkout-header">PAYMENT DETAILS</h2>
        <label>Payment Method</label>
        <input type="checkbox" className="checkbox checkbox:active" e-Money />

        <input className="checkbox checkbox:active" type="checkbox" />
        <label>e-Money Number</label>
        <input className="checkout-input" type="number" />
        <label>e-Money Pin</label>
        <input className="checkout-input" type="number" />
      </div>
    </form>
  );
};
