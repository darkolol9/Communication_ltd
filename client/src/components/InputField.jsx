
const InputField = ({fieldName}) => {
  return (
    <div className="input-container">
        <h3 className="label">{fieldName}</h3>
        <input type="text" className="input-field" />
    </div>
  )
}

export default InputField
