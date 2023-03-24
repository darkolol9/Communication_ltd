import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";

const ForgotPasswordPanel = () => {
  return (
      <div className="register-panel">
        <div className="register-form">
          <h1 className="register-title">Reset Password</h1>

          <div className="form">
            <InputField fieldName="Current Password" />
            <InputField fieldName="New Password" />
            <InputField fieldName="Repeat New Password" />

            <SubmitButton />
          </div>
        </div>
        <div>
          <img className="register-pic" src={IMG_URL} alt="" />
        </div>
      </div>
  );
};

export default ForgotPasswordPanel;
