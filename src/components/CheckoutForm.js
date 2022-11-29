import { InputGroup } from "./InputGroup";

export const CheckoutForm = () => {
  return (
    // <div className="checkout">
    <form className="checkout">
      <header className="checkout-title">CHECKOUT</header>

      <h2 className="checkout-header">BILLING DETAILS</h2>
      <div className="cart-section">
        <InputGroup name="name" label="Name" />
        <InputGroup name="email" label="Email Address" type="email" />
        <InputGroup name="phone" label="Phone Number" />
      </div>

      <h2 className="checkout-header">SHIPPING INFO</h2>

      <div className="cart-section">
        <InputGroup name="address" label="Address" cols={1} />
        <InputGroup name="zip" label="Zip Code" />
        <InputGroup name="city" label="City" />
        <InputGroup name="country" label="Country" />
      </div>

      <h2 className="checkout-header">PAYMENT DETAILS</h2>

      <div className="cart-section">
        <label className="payment-label">Payment Method</label>

        <div className="cols-2 radio radio-border radio-border:checked">
          <input type="radio" value="e-money" className="radio " />
          <label className="input-label-r">e-Money</label>
        </div>

        <div className="cols-2 radio radio-border radio-border:checked">
          <input type="radio" value="Cash on delivery" className="radio" />
          <label className="input-label-r">Cash on delivery</label>
        </div>
        <InputGroup name="emoney-number" label="e-Money Number" />
        <InputGroup name="emoney-pin" label="e-Money Pin" />
      </div>
    </form>
    // </div>
  );
};
