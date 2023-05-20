const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// sgMail.setApiKey(
//   "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"
// );

// async function sendEmail(msg) {
//   sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent successfully");
//     })
//     .catch((error) => {
//       console.log("Error sending email:", error);
//     });
// }

function generateRandomString() {
  const randomBytes = crypto.randomBytes(16);
  const hash = crypto.createHash("sha1").update(randomBytes).digest("hex");
  return hash;
}

function hashPassword(password) {
  // Generate a random salt
  const salt = crypto.randomBytes(16).toString("hex");

  // Hash the password using HMAC and the salt
  const hashed_password = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  // Combine the hashed password and salt, separated by ':'
  return hashed_password + ":" + salt;
}

function checkPassword(password, salt, hashed_password) {
  const [hash, stored_salt] = hashed_password.split(":");

  // Hash the user-entered password using the stored salt
  const hashed_attempt = crypto
    .createHmac("sha256", stored_salt)
    .update(password)
    .digest("hex");

  // Compare the hashed attempt with the stored hash
  return hashed_attempt === hash;
}

module.exports = {
  hashPassword,
  checkPassword,
  generateRandomString,
};
