const express = require('express')
const router= express.Router()
const { updateUser,getUserbyId, getUsers , updateUserStatus}= require('../controller/user')



router.post('/update', updateUser)
router.post('/updatestatus', updateUserStatus)
router.get('/', getUsers)
// router.post('/userById', getUserbyId)
router.get('/getUserById/:id([0-9a-fA-F]{24})', getUserbyId)
// router.post('user/deletePackageType/:id', deletePackageType)
// router.post('user/getPackageType/:id', getPackageTypebyId)

module.exports = router