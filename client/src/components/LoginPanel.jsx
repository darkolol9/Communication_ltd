import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const IMG_URL = "https://media.giphy.com/media/loXfQtPqLxGmbLs9h2/giphy.gif";

const LoginPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Login</h1>

        <div className="form">
          <InputField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fieldName="Email"
          />

          <InputField
            hide={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fieldName="Password"
          />

          <SubmitButton
            onClick={() => {
              console.log("SENDING TO SERVER", { email, password });
            }}
          />
        </div>
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default LoginPanel;
