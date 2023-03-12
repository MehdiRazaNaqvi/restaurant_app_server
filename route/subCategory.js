const express = require('express')
const router = express.Router()
const { createPackage, updatePackage,getPackageByPackageTypeId,  getPackages, deletePackage, getPackagebyId } = require('../controller/package')


router.post('/create', createPackage)
router.post('/update', updatePackage)
router.get('/', getPackages)
router.post('/deletePackage', deletePackage)
router.post('/packageById', getPackagebyId)
router.get('/packageByPackageTypeId',getPackageByPackageTypeId)
module.exports = router