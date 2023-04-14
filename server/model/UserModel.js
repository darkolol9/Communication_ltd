const db = require("../DbConnector");

async function getAll() {
  const rows = await db.queryAsync(
    `
    SELECT * FROM users;
    `
  );

  return { users: rows };
}

async function checkLoginDetails(email, password) {
  const resp = await db.queryAsync(
    `
    SELECT * FROM users
    WHERE email = '${email}'
    AND password = '${password}'
    `
  );

  if (resp && resp.length > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getAll,
  checkLoginDetails
};
