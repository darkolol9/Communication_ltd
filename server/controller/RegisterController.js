const db = require("../DbConnector");

async function getAllUsers(req, res) {
  const rows = await db.queryAsync(
    `
        SELECT * FROM users;
    `
  );

  res.send({ users: rows });
}

async function checkValidCredentials(req, res) {
  const resp = await db.queryAsync(
    `
        SELECT * FROM users
        WHERE email = '${req.params.email}'
        AND password = '${req.params.password}'
    `
  );

  if (resp && resp.length > 0) {
    res.send("success");
  } else {
    res.send("incorrect login details");
  }
}

module.exports = {
  getAllUsers,
  checkValidCredentials,
};
