const Joi = require('@hapi/joi')

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    // phone: Joi.string().min(10).max(13),
    // last_name: Joi.string().min(3).max(15),
    // first_name: Joi.string().min(3).max(14),
})


const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().min(10).max(18).required(),

    name: Joi.string().min(3).max(14),
    image: Joi.string(),
    phoneVerified : Joi.boolean()


})

const uniqueMerchantSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().min(10).max(18).required(),
    businessName : Joi.string().required(),

})



const emailVerificationSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    code: Joi.string().min(6).max(6),
    type: Joi.string()
})

const resetPasswordVerifcationSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    code: Joi.string().min(6).max(6),
    password: Joi.string().min(8).required(),
    type: Joi.string()
})

const emailOtpSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    // userType: Joi.string().valid('user', 'agent', 'admin').required()
})

const updatePasswordVerificationSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    currentPassword: Joi.string().min(8).required(),
    newPassword: Joi.string().min(8).required(),
    type: Joi.string()
})

module.exports = {
    authSchema,
    emailVerificationSchema,
    resetPasswordVerifcationSchema,
    updatePasswordVerificationSchema,
    registerSchema,
    emailOtpSchema,
    uniqueMerchantSchema

}