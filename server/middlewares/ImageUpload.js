const multerS3 = require("multer-s3");
const multer = require("multer");
const AWS = require("aws-sdk");
require('dotenv').config()

const BUCKET_NAME = process.env.BUCKET_NAME;
const REGION =process.env.REGION; 
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_KEY =process.env.SECRET_KEY; 

const s3 = new AWS.S3({
  apiVersion: 'latest',
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
})

 /* saving locally 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
}); */



/*//const storage = multerS3({
  s3: s3,
  bucket: BUCKET_NAME,
  acl: 'public-read',
  key: (req,file,cb)=>{
    cb(null,Date.now()+req.body.name);
  }
});

const upload = multer({ storage: storage }); */

const upload = multer({
  storage: multerS3({
    s3,
    bucket: BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      const imageExtension = file.originalname.split('.').pop()
      cb(null, `${Date.now().toString()}.${imageExtension}`);
    },
  }),
});

module.exports = upload;
