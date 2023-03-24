import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const RegisterPanel = () => {
  return (
    <div>
      <div className="register-panel">
        <div className="register-form">
          <InputField fieldName="Email" />
          <InputField fieldName="Username" />
          <InputField fieldName="Password" />
          <InputField fieldName="Repeat password" />

          <SubmitButton />
        </div>
        <div className="register-pic">PICTURE</div>
      </div>
    </div>
  );
};

export default RegisterPanel;
