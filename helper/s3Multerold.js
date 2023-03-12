const aws = require("aws-sdk");
const { application } = require("express");
const res = require("express/lib/response");
const multer = require("multer");
const multerS3 = require("multer-s3");
const config = require("../config");
const path = require("path");
const fs = require("fs");

aws.config.update({
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  accessKeyId: config.AWS_PUBLIC_ACCESS_KEY,
  region: config.S3_REGION,
});

const BUCKET = config.S3_BUCKET;
const s3 = new aws.S3();

// const upload = multer({
//     storage: multerS3({
//         bucket: BUCKET,
//         s3: s3,
//         acl: "public-read", //permission
//         key: (req, file, cb) => {
//             cb(null, Date.now()+file.originalname)
//         }
//     })
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("run",req, file, cb)
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "video/mp4" 
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const uploadFile = (req, res) => {
  console.log("UPLOAD FILE ", req.file);
  res.json({
    message: "successfully uploaded",
    //data: req.file.key,
    data: req.file.filename,
  });
};

const getAllFiles = async (req, res) => {
  //   let response = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
  //   let result = response.Contents.map((item) => item.Key);
  //   res.send(result);
  const directoryPath = path.join(__dirname, "../images");
  console.log(directoryPath);
   await fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    let result = files.forEach(function (file) {
      console.log("my fileeeeee", file);
    });
    res.send(result);
  });
};

const downloadFile = async (req, res) => {
  const directoryPath = path.join(__dirname, "../images");
  const filename = directoryPath + "/" + req.params.filename;
  console.log("fileee", filename);

  let result = fs.readFile(filename, "utf8", function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
  });
  //   let result = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
  console.log("res....",result)
  res.send(result);
};

const deleteFile = (req, res) => {
  const directoryPath = path.join(__dirname, "../images");
  const filename = directoryPath + "/" + req.params.filename;
  console.log(filename);
  fs.unlinkSync(filename);
  res.send("File deleted successfully");
  //   s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
};

module.exports = {
  upload,
  storage,
  uploadFile,
  getAllFiles,
  downloadFile,
  deleteFile,
};
