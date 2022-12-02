import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
import { Summary } from "./Summary";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal2 } from "../features/modal/Modal2";
// import { useSelector } from "react-redux";
// import clsx from "clsx";

export const CheckoutPage = () => {
  let navigate = useNavigate();
  // const modal2IsOpen = useSelector((state) => state.modal2.modal2IsOpen);
  return (
    <div
      className="checkout-page"
      // {clsx(`checkout-page ${modal2IsOpen ? "modalIsOpen" : ""}`)}
    >
      <Navbar />
      <Modal2 />
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
