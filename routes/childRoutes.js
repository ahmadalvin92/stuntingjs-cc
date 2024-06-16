const express = require("express");
const router = express.Router();
const childController = require("../controllers/childController");
const isAuthenticated = require("../middleware/authMiddleware");

router.post("/input", isAuthenticated, childController.createChild);
router.post("/update", isAuthenticated, childController.updateChild);
router.post("/delete", isAuthenticated, childController.deleteChild);
router.get("/", isAuthenticated, childController.getChildrenByParentId);

module.exports = router;
