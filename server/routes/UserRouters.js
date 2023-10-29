const { authorizationContorller } = require("../controllers/AuthControllers");
const { getUserContoller, deleteUserContoller, updateUserContoller,getUserFollowerController, getUserFollowingController,addUserFollowingController } = require("../controllers/UserControllers");
const User = require("../model/user");
// const bcrypt = require("bcrypt");
const router = require("express").Router();

router.get("/:id", getUserContoller);
router.delete("/:id", authorizationContorller ,deleteUserContoller);
router.put("/:id",authorizationContorller, updateUserContoller);
router.get("/followers/:id", getUserFollowerController);
router.get("/following/:id", getUserFollowingController);
router.post("/addFollow/:id",authorizationContorller,addUserFollowingController);

module.exports = router


