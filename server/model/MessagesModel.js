const db = require("../DbConnector");

const deleteAll = async () => {
  await db.queryAsync(`DELETE FROM messages`, []);
};

const addNewMessage = async (customerName, message) => {
  //prone to sql injection, use ? params instead of formatted strings
  //safe
  await db.queryAsync(
    `
        INSERT INTO messages (customer_name, message)
        VALUES (?, ?);
        `,
    [customerName]
  );
};

const getAll = async () => {
  let results = await db.queryAsync(
    `
      SELECT * FROM messages LIMIT 100;
    `,
    []
  );
  return results;
};

module.exports = {
  addNewMessage,
  deleteAll,
  getAll,
};
