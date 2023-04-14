const UserModel = require("../model/UserModel");

async function getAllUsers(req, res) {
  const rows = await UserModel.getAll();

  res.send({ users: rows });
}

async function checkValidCredentials(req, res) {
  const isLoginValid = await UserModel.checkLoginDetails(
    req.params.email,
    req.params.password
  );

  return isLoginValid;
}

module.exports = {
  getAllUsers,
  checkValidCredentials,
};
