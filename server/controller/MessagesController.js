const MessagesModel = require("../model/MessagesModel");


async function addMessage(req, res) {
  let formData = req.body;
  await MessagesModel.addNewMessage(formData.customerName, formData.message);
  res.send(200);
}

module.exports = {
  addMessage,
};
