import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import VerificationPanel from "./VerificationPanel";

const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";

const ForgotPasswordPanel = () => {
  const [codeSent, setCodeSent] = useState(false);

  const onSubmit = () => {
    setCodeSent(true);
  };

  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Reset Password</h1>

        <div className="form">
          <InputField hide={false} fieldName="Email" />
          <InputField hide={true} fieldName="Current Password" />
          <InputField hide={true} fieldName="New Password" />
          <InputField hide={true} fieldName="Repeat New Password" />

          <SubmitButton onClick={onSubmit} />
        </div>

        {codeSent ? <VerificationPanel /> : null}
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default ForgotPasswordPanel;
