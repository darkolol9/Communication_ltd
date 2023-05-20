import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import VerificationPanel from "./VerificationPanel";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";


const SUCCESS = 'success';
const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";
const API_PREFIX = "https://localhost:3000";



const ForgotPasswordPanel = () => {
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();

  const [codeSent, setCodeSent] = useState(false);
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
    }
  };

  const onSubmit = () => {
    setCodeSent(true);
    Axios.post(API_PREFIX + "/forgot_password", formData).then((r) =>
      console.log(r)
    );
  };

  const onCodeSubmit = () => {
    Axios.post(API_PREFIX + "/verify-forgot_password", formData).then(handleCodeResponse);
  };

  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Reset Password</h1>

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

        {codeSent ? (
          <VerificationPanel
            onChange={(e) =>
              setFormData({ ...formData, secretCode: e.target.value })
            }
            onSubmit={onCodeSubmit}
          />
        ) : null}
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default ForgotPasswordPanel;
