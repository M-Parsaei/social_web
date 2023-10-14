const { getUserContoller, deleteUserContoller, updateUserContoller,getUserFollowerController, getUserFollowingController,addUserFollowingController } = require("../controllers/UserControllers");
const User = require("../model/user");
// const bcrypt = require("bcrypt");
const router = require("express").Router();

router.get("/:id", getUserContoller);
router.delete("/:id", deleteUserContoller);
router.put("/:id", updateUserContoller);
router.get("/followers/:id", getUserFollowerController);
router.post("/following/:id", getUserFollowingController);
router.post("/addFollow/:id",addUserFollowingController);

module.exports = router


