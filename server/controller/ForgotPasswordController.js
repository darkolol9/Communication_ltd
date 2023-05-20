const { hashPassword, sendEmail, generateRandomString } = require("../helpers");
const UserModel = require("../model/UserModel");

const resetPassword = async (req, res) => {
  let formData = req.body;

  let user = await UserModel.getUserByEmail(formData.email);

  if (!user) {
    res.send({ status: "user_doesnt_exist" });
  } else {
    //generate random code, send to user,
    let secretCode = generateRandomString(); //generateCode()
    //write code in db
    await UserModel.updateSecretCode(formData.email, secretCode);

    //send the code to user
    await sendEmail({
      to: formData.email,
      from: "commsltd777@gmail.com",
      subject: "Verification code to change password",
      text: `The verification code ${secretCode}`,
    });

    res.send({ status: "success" });
  }
};

const verifyPasswordChange = async (req, res) => {
  let formData = req.body;
  let user = await UserModel.getUserByEmail(formData.email);

  if (!user[0]) {
    res.send({ status: "user_doesnt_exist" });
  }
  if (formData.secretCode !== user[0].secret_code) {
    res.send({ status: "invalid_code" });
  } else {
    formData.password = hashPassword(formData.password);
    await UserModel.updatePassword(formData.email, formData.password);
    res.send({ status: "success" });
  }
};

module.exports = {
  resetPassword,
  verifyPasswordChange,
};
