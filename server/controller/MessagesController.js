const MessagesModel = require("../model/MessagesModel");


async function addMessage(req, res) {
  let formData = req.body;
  await MessagesModel.addNewMessage(formData.customerName, formData.message);
  res.send(200);
}
async function getAll(req, res) {
  let results = await MessagesModel.getAll();
  res.send(results);
}

module.exports = {
  addMessage,
  getAll
};
