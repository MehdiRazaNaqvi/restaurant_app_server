const express = require('express')
const router = express.Router()
const {
    signup,
    login,
    confirmAccountVerification,
    sendForgotPasswordEmail,
    resetPassword,
    updatePassword,
    logout,
    adminSignup,
    adminLogin,
    merchantSignup,
    merchantLogin,
    refreshToken,
    sendEmailOtp,
    checkUnique,
} = require('../controller/authController')

router.post('/signup', signup)
router.post('/login', login)
// router.post('/merchantLogin', merchantLogin)
// router.post('/merchantSignup', merchantSignup)
// router.post('/adminLogin', adminLogin)
// router.post('/sendForgotPasswordEmail', sendForgotPasswordEmail)
// router.post('/confirmAccountVerification', confirmAccountVerification)
// router.post('/resetPassword', resetPassword)
// router.post('/updatePassword', updatePassword)
// router.post('/logout', logout)
// router.post('/adminSignup', adminSignup)
// router.post('/refreshToken', refreshToken)
// router.post('/sendemailotp', sendEmailOtp)
// router.post('/checkUnique', checkUnique)




module.exports = router