const InputField = ({ fieldName, hide = false }) => {
  return (
    <div className="input-container">
      <h3 className="label">{fieldName}</h3>
      <input type={hide ? "password" : "text"} className="input-field" />
    </div>
  );
};

export default InputField;
