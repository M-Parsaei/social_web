const { uploadImageContorller } = require("../controllers/UploadContorllers");
const upload = require("../middlewares/ImageUpload");
const router = require("express").Router();

router.post("/postImage",upload.single("image"),uploadImageContorller);

module.exports = router


