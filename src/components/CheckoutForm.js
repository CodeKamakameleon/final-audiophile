export const CheckoutForm = () => {
  return (
    <form className="checkout">
      <header>CHECKOUT</header>

      <div className="checkout-billing">
        <h2 className="checkout-header">BILLING DETAILS</h2>
        <label className="checkout-label">Name</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="Name"
        ></input>

        <label className="checkout-label">Email Address</label>
        <input
          className="checkout-input"
          type="email"
          placeholder="email"
        ></input>

        <label className="checkout-label">Phone Number</label>
        <input
          className="checkout-input"
          type="tel"
          placeholder="Phone Number"
        ></input>
      </div>

      <div className="checkout-shipping">
        <h2 className="checkout-header">SHIPPING INFO</h2>
        <label className="checkout-label">Address</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="Shipping Address"
        ></input>

        <label className="checkout-label">Zip Code</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="Zip Code"
        ></input>

        <label className="checkout-label">City</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="City"
        ></input>
        <label className="checkout-label">Country</label>
        <input
          className="checkout-input"
          type="text"
          placeholder="Country"
        ></input>
      </div>

      <div className="checkout-payment">
        <h2 className="checkout-header">PAYMENT DETAILS</h2>
        <label>Payment Method</label>
        <input className="checkbox checkbox:active" type="checkbox">
          e-Money
        </input>
        <input className="checkbox checkbox:active" type="checkbox">
          Cash on Delivery
        </input>
        <label>e-Money Number</label>
        <input className="checkout-input" type="number"></input>
        <label>e-Money Pin</label>
        <input className="checkout-input" type="number"></input>
      </div>
    </form>
  );
};
