const express = require('express')
const router = express.Router()
const multer  = require('multer')
// const {uploadFile, upload, getAllFiles, deleteFile, downloadFile } = require('../helper/s3Multer')
const {uploadFile, upload, getAllFiles, deleteFile, downloadFile } = require('../helper/s3Multer')

// const upload = multer({ dest: './public/images/' })

// for single upload upload.single("file")
// for multiple upload upload.array("file")
// router.post('/uploadFile',upload.single("file"), uploadFile)  



router.post('/uploadFile',upload.single("file"), uploadFile)  
router.get('/getAllFiles', getAllFiles)
router.get('/deleteFile/:filename', deleteFile)
router.post('/downloadFile/:filename', downloadFile)

module.exports = router