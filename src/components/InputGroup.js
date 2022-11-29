export const InputGroup = ({ name, label, cols, type = "text" }) => (
  <label className={`input-group cols-${cols}`}>
    <span className="input-label">{label}</span>
    <input className="input-field" name={name} type={type} />
  </label>
);
