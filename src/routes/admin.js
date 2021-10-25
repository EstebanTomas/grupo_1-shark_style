const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

router.get("/update/:id", adminControllers.updateRegister);
router.post("/update/id", adminControllers.update);

module.exports = router;