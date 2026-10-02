const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/ContactControllers");

router.route("/contactinfo").post(contactController.contact);

module.exports = router;