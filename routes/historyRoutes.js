const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");
// const isAuthenticated = require("../middleware/authMiddleware");

router.post("/add", historyController.createHistory);
router.get("/",  historyController.getHistoryByChildId);

module.exports = router;
