const History = require("../models/historyModel");

exports.createHistory = async (req, res) => {
  try {
    const { id_parent_user, id_child, ch_name, ch_age, ch_latest_height, result_detect } = req.body;
    const historyId = await History.create({
      id_parent_user,
      id_child,
      ch_name,
      ch_age,
      ch_latest_height,
      result_detect,
    });
    res.json({ message: "History data created successfully", historyId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHistoryByChildId = async (req, res) => {
  try {
    const { id_child } = req.query;
    const history = await History.getByChildId(id_child);
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
