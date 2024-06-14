const db = require("../config/db");

const History = {
  create: async (history) => {
    const { id_parent_user, id_child, ch_name, ch_age, ch_latest_height, result_detect } = history;
    const [result] = await db.query(
      "INSERT INTO history_detect (id_parent_user, id_child, ch_name, ch_age, ch_latest_height, result_detect) VALUES (?, ?, ?, ?, ?, ?)",
      [id_parent_user, id_child, ch_name, ch_age, ch_latest_height, result_detect]
    );
    return result.insertId;
  },
  getByChildId: async (childId) => {
    const [rows] = await db.query("SELECT * FROM history_detect WHERE id_child = ?", [childId]);
    return rows;
  },
};

module.exports = History;
