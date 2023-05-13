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

const getAll = async () => {
  let results = await db.queryAsync(
    `
      SELECT * FROM messages LIMIT 100;
    `, []
  )
  return results;
}

module.exports = {
  addNewMessage,
  getAll
};
