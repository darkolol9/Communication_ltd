import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";

const RegisterPanel = () => {
  return (
    <div>
      <div className="register-panel">
        <div className="register-form">
          <h1 className="register-title">Register</h1>

          <div className="form">
            <InputField fieldName="Email" />
            <InputField fieldName="Username" />
            <InputField fieldName="Password" />
            <InputField fieldName="Repeat password" />

            <SubmitButton />
          </div>
        </div>
        <div className="register-pic">
          <img className="register-pic" src={IMG_URL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;
