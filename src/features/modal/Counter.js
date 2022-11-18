export const Counter = ({ count, onChange }) => {
  return (
    <div className="product-counter">
      <button className="count-btn" onClick={() => onChange(count - 1)}>
        -
      </button>
      {count}
      <button className="count-btn" onClick={() => onChange(count + 1)}>
        +
      </button>
    </div>
  );
};
