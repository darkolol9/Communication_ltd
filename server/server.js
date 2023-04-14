const express = require("express");
const app = express();
const RegisterController = require("./controller/RegisterController.js");

app.get("/users", RegisterController.getAllUsers);

app.get("/users/:email/:password", RegisterController.checkValidCredentials);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
