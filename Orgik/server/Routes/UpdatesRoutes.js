const express = require("express");
const router = express.Router();
const letterController = require("../Controllers/LetterController");

router.route("/subscribe").post(letterController.subscribe);

module.exports = router;