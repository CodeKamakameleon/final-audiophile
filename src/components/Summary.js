export const Summary = () => {
  return (
    <>
      <div className="summary">
        <h3 className="summary-header">SUMMARY</h3>

        {/* items */}

        <div className="summary-costs">TOTAL</div>
        <div className="summary-costs">SHIPPING</div>
        <div className="summary-costs">VAT(INCLUDED)</div>
        <div className="summary-costs">GRAND TOTAL</div>

        <button className="orange-btn">CONTINUE &#38; PAY</button>
      </div>
    </>
  );
};
