import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Axios from "axios";

const IMG_URL = "https://media.giphy.com/media/loXfQtPqLxGmbLs9h2/giphy.gif";

const LoginPanel = () => {
  const [email, setEmail] = useState("_");
  const [password, setPassword] = useState("_");
  const [loggedIn, setLoggedIn] = useState(false);

  async function checkCredentialsInServer(e) {
    const isValid = await Axios.get(
      `http://localhost:3000/users/${email}/${password}`
    );
    console.log("credentials are : ", isValid.data);
    setLoggedIn(isValid.data);
  }

  return (
    <div className="register-panel">
      {loggedIn ? <h1 className="register-title">USER LOGGED IN</h1> : ""}
      <div className="register-form">
        <h1 className="register-title">Login</h1>

        <form onSubmit={(e) => e.preventDefault()} className="form">
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
              checkCredentialsInServer();
            }}
          />
        </form>
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default LoginPanel;
