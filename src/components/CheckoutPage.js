import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
import { Summary } from "./Summary";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal } from "../features/modal/Modal";

export const CheckoutPage = () => {
  let navigate = useNavigate();
  return (
    <div className="checkout-page">
      <Navbar />

      <div className="checkout-body">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="checkout-columns">
          <CheckoutForm className="checkout-page-form" />
          <Summary className="checkout-page-summary" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
