export const CheckoutForm = () => {
  return (
    <form>
      <header>CHECKOUT</header>

      <div className="checkout-billing">
        <h2>BILLING DETAILS</h2>
        <label>Name</label>
        <input type="text" placeholder="Name"></input>

        <label>Email Address</label>
        <input type="email" placeholder="email"></input>

        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number"></input>
      </div>

      <div className="checkout-shipping">
        <h2>SHIPPING INFO</h2>
        <label>Address</label>
        <input type="text" placeholder="Shipping Address"></input>

        <label>Zip Code</label>
        <input type="text" placeholder="Zip Code"></input>

        <label>City</label>
        <input type="text" placeholder="City"></input>
        <label>Country</label>
        <input type="text" placeholder="Country"></input>
      </div>

      <div className="checkout-payment">
        <h2>PAYMENT DETAILS</h2>
        <label>Payment Method</label>
        <input type="checkbox">e-Money</input>
        <input type="checkbox">Cash on Delivery</input>
        <label>e-Money Number</label>
        <input type="number"></input>
        <label>e-Money Pin</label>
        <input type="number"></input>
      </div>
    </form>
  );
};
