const db = require("../config/db");

const Child = {
  create: async (child) => {
    const { id_parent_user, ch_name, ch_date_birth, ch_gender, ch_birth_height } = child;
    const [result] = await db.query(
      "INSERT INTO children (id_parent_user, ch_name, ch_date_birth, ch_gender, ch_birth_height) VALUES (?, ?, ?, ?, ?)",
      [id_parent_user, ch_name, ch_date_birth, ch_gender, ch_birth_height]
    );
    return result.insertId;
  },
  update: async (childId, updatedData) => {
    const { ch_name, ch_date_birth, ch_gender, ch_birth_height } = updatedData;
    await db.query(
      "UPDATE children SET ch_name = ?, ch_date_birth = ?, ch_gender = ?, ch_birth_height = ? WHERE id_child = ?",
      [ch_name, ch_date_birth, ch_gender, ch_birth_height, childId]
    );
  },
  delete: async (childId) => {
    await db.query("DELETE FROM children WHERE id_child = ?", [childId]);
  },
  getByParentId: async (parentId) => {
    const [rows] = await db.query("SELECT * FROM children WHERE id_parent_user = ?", [parentId]);
    return rows;
  },
};

module.exports = Child;
