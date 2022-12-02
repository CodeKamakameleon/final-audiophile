import checkmark from "../../images/shared/desktop/icon-check-mark.svg";

export const Modal2 = () => {
  return (
    <div className="modal2">
      <img className="checkmark" src={checkmark} alt="checkmark" />
      <h3 className="modal2-header">THANK YOU FOR YOUR ORDER</h3>
      <p>You will recieve and email confirmation shortly.</p>

      <button className="orange-btn-checkout">BACK TO HOME</button>
    </div>
  );
};
