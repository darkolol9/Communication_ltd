const db = require("../DbConnector");

const addNewMessage = async (customerName, message) => {
  await db.queryAsync(
    `
        INSERT INTO messages (customer_name, message)
        VALUES (?, ?);
        `,
    [customerName, message]
  );
};

module.exports = {
  addNewMessage,
};
