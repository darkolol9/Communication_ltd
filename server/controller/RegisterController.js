const UserModel = require("../model/UserModel");

async function register(req, res) {
  let formData = req.body;

  let usersWithEmail = await UserModel.getUserByEmail(formData.email);

  if (usersWithEmail.length > 0) {
    res.status(301).send({ status: "user_exists_already" });
  } else {
    await UserModel.insertUser(formData);
    res.status(200).send("data test");
  }
}

async function getAllUsers(req, res) {
  const rows = await UserModel.getAll();

  res.send({ users: rows });
}

async function checkValidCredentials(req, res) {
  const isLoginValid = await UserModel.checkLoginDetails(
    req.params.email,
    req.params.password
  );

  res.send(isLoginValid);
}

module.exports = {
  getAllUsers,
  checkValidCredentials,
  register,
};
