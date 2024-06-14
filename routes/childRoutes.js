const express = require("express");
const router = express.Router();
const childController = require("../controllers/childController");
// const isAuthenticated = require("../middleware/authMiddleware");

router.post("/input",  childController.createChild);
router.post("/update",  childController.updateChild);
router.post("/delete", childController.deleteChild);
router.get("/", childController.getChildrenByParentId);

module.exports = router;
