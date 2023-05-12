import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import * as Config from "../config.json";
import { useState } from "react";
import { validateByConfig } from "../helpers";

const IMG_URL = "https://media.giphy.com/media/DHeDr3SAM08koK2GFT/giphy.gif";


const onRegister = async (formData) => {

  let isPasswordValid = validateByConfig(formData);

  if (!isPasswordValid) {
    console.log("YOU SUCK, THE DETAILS ARE NOT GOOD");
  }
};

const RegisterPanel = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });


  return (
    <div className="register-panel">
      <div className="register-form">
        <h1 className="register-title">Register</h1>

        <div className="form">
          <InputField fieldName="Email" onChange={(e) => setFormData({...formData, email : e.target.value})} />
          <InputField fieldName="Username" onChange={(e) => setFormData({...formData, username : e.target.value})}/>
          <InputField fieldName="Password" onChange={(e) => setFormData({...formData, password : e.target.value})}/>
          <InputField fieldName="Repeat password" onChange={(e) => setFormData({...formData, repeatPassword : e.target.value})} />

          <SubmitButton onClick={() => onRegister(formData)} />
        </div>
      </div>
      <div>
        <img className="register-pic" src={IMG_URL} alt="" />
      </div>
    </div>
  );
};

export default RegisterPanel;
