const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserControllers");
const auth = require("../MiddleWares/auth");


router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/verify").get(auth,userController.verifyusers);

module.exports = router;