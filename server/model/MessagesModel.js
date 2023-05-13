const db = require("../DbConnector");

const deleteAll = async () => {
  await db.queryAsync(`DELETE FROM messages`, []);
};

const addNewMessage = async (customerName, message) => {
  
  
  await db.queryAsync(
    `
        INSERT INTO messages (customer_name, message)
        VALUES (?, '${message}');
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
