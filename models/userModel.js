const db = require("../config/db");

const User = {
  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },
  create: async (user) => {
    const [result] = await db.query("INSERT INTO users SET ?", user);
    return result.insertId;
  },
  update: async (email, user) => {
    await db.query("UPDATE users SET ? WHERE email = ?", [user, email]);
  },
};

module.exports = User;
