const express = require("express");
const router = express.Router();
const babyController = require("../controllers/babyController");


router.get("/baby", babyController.index);
router.post("/baby", babyController.new);

module.exports = router;