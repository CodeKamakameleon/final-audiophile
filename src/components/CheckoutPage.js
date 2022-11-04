import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
import { Summary } from "./Summary";

export const CheckoutPage = () => {
  let navigate = useNavigate();
  return (
    <div className="checkout-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <CheckoutForm className="checkout-page-form" />
      <Summary className="checkout-page-summary" />
    </div>
  );
};
