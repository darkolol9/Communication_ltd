import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const IMG_URL = "https://media.giphy.com/media/loXfQtPqLxGmbLs9h2/giphy.gif";

const LoginPanel = () => {
  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Login</h1>

        <div className="form">
          <InputField fieldName="Email" />
          <InputField fieldName="Password" />

          <SubmitButton />
        </div>
      </div>
      <div className="register-pic">
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default LoginPanel;
