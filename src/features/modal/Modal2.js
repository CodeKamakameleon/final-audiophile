import clsx from "clsx";
import { useSelector } from "react-redux";
import checkmark from "../../images/shared/desktop/icon-check-mark.svg";

export const Modal2 = () => {
  const m2isOpen = useSelector((state) => state.modal2.isOpen);
  console.log(m2isOpen);
  return (
    <div className={clsx(`modal2 ${m2isOpen ? "modal2IsOpen" : ""}`)}>
      <div>
        <img className="checkmark" src={checkmark} alt="checkmark" />
        <h3 className="modal2-header">THANK YOU FOR YOUR ORDER</h3>
        <p>You will recieve and email confirmation shortly.</p>

        <button className="orange-btn-checkout">BACK TO HOME</button>
      </div>
    </div>
  );
};
