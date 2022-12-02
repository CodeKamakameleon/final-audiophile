import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
import { Summary } from "./Summary";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal2 } from "../features/modal/Modal2";

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
        <Modal2 />
      </div>
      <Footer />
    </div>
  );
};
