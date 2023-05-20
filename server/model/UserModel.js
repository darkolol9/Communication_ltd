const db = require("../DbConnector");


async function getUserByEmail(email) {
  let results = await db.queryAsync(
    `
    SELECT * FROM users WHERE email = ? LIMIT 1;
    `, [email]
  )

  return results
}

async function updateSecretCode(email, code) {
  await db.queryAsync(
    `
      UPDATE users SET secret_code = ? WHERE email = ?;
    `, [code, email]
  )
}

async function updatePassword(email, password) {
  await db.queryAsync(
    `
      UPDATE users SET password = ? WHERE email = ?;
    `, [password, email]
  )
}


//safe
async function insertUser(formData) {
  let result = await db.queryAsync(
    `
      INSERT INTO users (email, password)
      VALUES (? , ?)
    `, [formData.email, formData.password]
  )

  return result;
}


//this example is prone to SQL injection

async function insertUser(formData) {
  let result = await db.queryAsync(
    `
      INSERT INTO users (email, password)
      VALUES (${formData.email} , ${formData.password})
    `, []
  )

  return result;
}

async function getAll() {
  const rows = await db.queryAsync(
    `
    SELECT * FROM users;
    `, []
  );

  return { users: rows };
}


//SQL injection -- safe
async function checkLoginDetails(email, password) {
  const resp = await db.queryAsync(
    `
    SELECT * FROM users
    WHERE email = ?
    AND password = ?
    `,[email, password]
  );

  if (resp && resp.length > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getAll,
  checkLoginDetails,
  insertUser,
  getUserByEmail,
  updatePassword,
  updateSecretCode
};
