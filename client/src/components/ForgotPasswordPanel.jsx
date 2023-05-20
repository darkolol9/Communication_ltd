import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import VerificationPanel from "./VerificationPanel";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

const SUCCESS = "success";
const INVALID_CODE = "invalid_code";
const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";
const API_PREFIX = "https://localhost:3000";

const ForgotPasswordPanel = () => {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();

  const [codeSent, setCodeSent] = useState(false);
  const [codeInvalid, setCodeInvalid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secretCode: "",
  });

  const handleCodeResponse = (res) => {
    if (res.data.status === SUCCESS) {
      userContextData.setLoggedInStatus(true);
      userContextData.setUserEmail(formData.email);
      navigate("/");
    } else if (res.data.status === INVALID_CODE) {
      setCodeInvalid(true);
    }
  };

  const onSubmit = () => {
    setCodeSent(true);
    Axios.post(API_PREFIX + "/forgot_password", formData).then((r) =>
      console.log(r)
    );
  };

  const onCodeSubmit = () => {
    Axios.post(API_PREFIX + "/verify-forgot_password", formData).then(
      handleCodeResponse
    );
  };

  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Reset Password</h1>

        {codeSent ? (
          <>
          <h1 className="code-sent">a secret code has been sent to your email...</h1>
          <VerificationPanel
            onChange={(e) =>
              setFormData({ ...formData, secretCode: e.target.value })
            }
            onSubmit={onCodeSubmit}
            />
            </>
        ) : (
          <div className="form">
            <InputField
              hide={false}
              fieldName="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              hide={true}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              fieldName="New Password"
            />

            <SubmitButton onClick={onSubmit} />
          </div>
        )}

        {codeInvalid ? (
          <h1 className="register-title">CODE IS INVALID</h1>
        ) : null}
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default ForgotPasswordPanel;
