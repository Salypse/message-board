const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function postNewMessage(user, message, added) {
  await pool.query(
    "INSERT INTO messages(text,username,added) VALUES ($1, $2, $3)",
    [message, user, added],
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  postNewMessage,
};
