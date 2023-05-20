require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const RegisterController = require("./controller/RegisterController.js");
const MessagesController = require("./controller/MessagesController.js");
const ForgotPasswordController = require("./controller/ForgotPasswordController.js");
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
  secureProtocol: 'TLSv1_2_method'
};

app.use(cors());

app.use(express.json());

app.get("/users", RegisterController.getAllUsers);

app.get("/users/:email/:password", RegisterController.checkValidCredentials);

app.post("/register" , RegisterController.register);

app.post("/leave_message", MessagesController.addMessage);

app.get("/get_all_comments", MessagesController.getAll);

app.get('/delete_all_messages', MessagesController.removeAllMessage);

app.post('/forgot_password', ForgotPasswordController.resetPassword);

app.post('/verify-forgot_password', ForgotPasswordController.verifyPasswordChange);

const server = https.createServer(options, app);


server.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
