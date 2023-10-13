const { getUserContoller, deleteUserContoller, updateUserContoller } = require("../controllers/UserControllers");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.get("/:id", getUserContoller);

router.delete("/:id", deleteUserContoller);

router.put("/:id", updateUserContoller);

module.exports = router


