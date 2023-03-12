
const User = require("../model/user")
// const Agent = require("../model/agent")
// const Admin = require("../model/admin")
// const config = require("../config")
const { otp, errorHandler, message, jwt_helper, validationSchema, sendEmail } = require("../helper")
const { signAccessToken, signRefreshToken, verifyRefreshToken } = jwt_helper
const { resetPasswordVerifcationSchema, updatePasswordVerificationSchema, authSchema, registerSchema, emailVerificationSchema, emailOtpSchema } = require("../helper/validation_schema")
const { verificationCodeTemplate } = require("../emailTemplates/verificationCode")
const { dataAlreadyExist, authValiationError, unauthorizedError, successData, dbError, badRequest, internalServerError, invalidCode, accountNotVerified, notFound } = message



// const signup = async (req, res, next) => {
//     try {
//         //validating the field with auth validation Schema using @hapi/joi

//         if (req.body.isFacebookLogin || req.body.isGoogleLogin) {

//             if (req.body.isFacebookLogin && req.body.isGoogleLogin) {
//                 res.json({ error: "Invalid social login key" })
//             } else {

//                 let validData = req.body

//                 if (!validData.userType) {
//                     errorHandler(badRequest, res)
//                 } else {
//                     let Model = validData.userType === "user" ? User :
//                         validData.userType === "agent" ? Agent : null


//                     Model.find({ uid: validData.uid })
//                         .exec(async (error, doc) => {
//                             if (error) {
//                                 dbError.reason = error
//                                 errorHandler(dbError, res)
//                             }
//                             else if (doc && doc[0]) {

//                                 dataAlreadyExist.message = "User already exist"
//                                 errorHandler(dataAlreadyExist, res)
//                             } else {

//                                 const user = new Model(req.body)

//                                 validData.userType === "user" && (user.userStatus = "active");
//                                 validData.userType === "agent" && (user.agentStatus = "pending");
//                                 user.isFacebookLogin = req.body.isFacebookLogin;
//                                 user.isGoogleLogin = req.body.isGoogleLogin;

//                                 const savedUser = await user.save()
//                                 console.log(savedUser)

//                                 if (savedUser.uid) {
//                                     if (validData.userType === "user" || validData.userType === "agent") {
//                                         res.json({ message: "Account created successfully" })
//                                     }

//                                 }
//                             }
//                         })

//                 }

//             }





//         }
//         else {

//             let validData = await registerSchema.validateAsync(req.body)
//             let Model = validData.userType === "user" ? User :
//                 validData.userType === "agent" ? Agent : Admin

//             Model.find({ email: validData.email })
//                 .exec(async (error, doc) => {
//                     if (error) {
//                         dbError.reason = error
//                         errorHandler(dbError, res)
//                     }
//                     else if (doc && doc[0]) {
//                         res.json({ error: "User Already Exist" })
//                     } else {
//                         const user = new Model(req.body)
//                         user.emailToken = otp
//                         if (validData.userType === "subadmin") {
//                             user.isSubAdmin = true;
//                             user.isEmailVerified = true;
//                         };
//                         validData.userType === "admin" && (user.isSuperAdmin = true);
//                         validData.userType === "user" && (user.userStatus = "active");
//                         validData.userType === "agent" && (user.agentStatus = "pending");


//                         const savedUser = await user.save()
//                         if (savedUser.id) {
//                             if (validData.userType === "subadmin" || validData.userType === "user" || validData.userType === "agent") {
//                                 res.json({ message: "Account created successfully" })
//                             }


//                         }
//                     }
//                 })
//         }


//     } catch (err) {
//         console.log(err)
//         res.json({ error: err.message })
//     }
// }







const signup = async (req, res, next) => {




    try {


        const validData = await registerSchema.validateAsync(req.body)


        console.log(validData)



        User.find({ email: validData.email })
            .exec(async (error, doc) => {
                if (error) {
                    dbError.reason = error
                    errorHandler(dbError, res)
                }
                else if (doc && doc[0]) {
                    res.json({ error: "User Already Exist" })
                } else {
                    const user = new User(req.body)

                    const savedUser = await user.save()



                    if (savedUser.id) { res.json({ message: "Account created successfully" }) }
                }
            })

    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }






}







// const sendEmailOtp = async (req, res, next) => {
//     try {


//         const validData = await emailOtpSchema.validateAsync(req.body)

//         if (validData.email) {
//             const msg = {
//                 from: config.senderEmail,
//                 to: validData.email,
//                 subject: "Chat2Fly- Account Verification Email",
//                 text: "Welcome to Chat2Fly. To start exploring your fitness journey. Please enter the verification code.\n Verification code: " + otp,
//                 html: verificationCodeTemplate({
//                     mainHeading: 'Welcome to Chat2Fly',
//                     title: 'Account Verification Email',
//                     message: "Congrats! You are almost there to complete registration, to start exploring your journey.<br/>Please enter the verification code mentioned below. <br/>",
//                     code: otp
//                 })
//             }
//             try {
//                 const emailResponse = await sendEmail(msg)
//                 if (emailResponse.statusCode) throw internalServerError

//                 res.json({
//                     message: `A verification email has been sent to your email`,
//                     code: otp + 50
//                 })

//             } catch (error) {
//                 internalServerError.reason = error
//                 errorHandler(internalServerError, res)
//             }



//         }


//     } catch (err) {
//         console.log(err)
//         res.json({ error: err.message })
//     }
// }






// const confirmAccountVerification = async (req, res, next) => {
//     try {

//         const validData = await emailVerificationSchema.validateAsync(req.body)
//         const Model = validData.userType === "user" ? User :
//             validData.userType === "agent" ? Agent : Admin
//         Model.find({ email: validData.email })
//             .exec(async (error, doc) => {
//                 if (error) {
//                     dbError.reason = error
//                     errorHandler(dbError, res)
//                 }
//                 else if (doc && doc[0]) {
//                     const user = doc[0]
//                     if (user.emailToken === validData.code) {
//                         Model.findByIdAndUpdate({ _id: user._id }, {
//                             isEmailVerified: true,
//                             emailToken: null
//                         }).exec((err, result) => {
//                             if (err) {
//                                 dbError.reason = err
//                                 errorHandler(dbError, res)
//                             } else {

//                                 res.json({
//                                     message: "Account verified successfully"
//                                 })
//                             }
//                         })

//                     } else {
//                         errorHandler(invalidCode, res)
//                     }
//                 } else {
//                     errorHandler(notFound, res)
//                 }
//             })
//     } catch (err) {
//         errorHandler(
//             err.isJoi ?
//                 { error: err.message } :
//                 { ...internalServerError, reason: err }, res)
//     }

// }






const login = async (req, res, next) => {


    const validData = await authSchema.validateAsync(req.body)

    const Model = User


    Model.find({ email: validData.email })
        .exec(async (error, doc) => {
            if (error) {
                dbError.reason = error
                errorHandler(dbError, res)
            }
            else if (doc && doc[0]) {
                let user = doc[0]
                const isMatch = await user.isValidPassword(req.body.password)
                if (!isMatch) {
                    errorHandler(unauthorizedError, res)
                } else {
                    const accessToken = await signAccessToken(user._id.toString())
                    const refreshToken = await signRefreshToken(user._id.toString())
                    delete user.password
                    delete user.emailToken
                    delete user.resetPasswordToken
                    res.json({ ...user, accessToken, refreshToken })

                }

            } else {
                notFound.reason = notFound.message
                notFound.message = 'User Not Found',
                    errorHandler(notFound, res)
            }
        })

}





// const sendForgotPasswordEmail = async (req, res, next) => {
//     try {


//         const validData = await emailOtpSchema.validateAsync(req.body)

//         const { email } = req.body
//         if (!email) {
//             badRequest.message = "Email field is required"
//             errorHandler(badRequest, res)
//         }
//         const Model = validData.userType === "user" ? User :
//             validData.userType === "agent" ? Agent : Admin

//         let code = otp

//         Model.findOneAndUpdate({ email: validData.email },
//             { resetPasswordToken: code.toString() })
//             .exec(async (error, doc) => {
//                 if (error) {
//                     dbError.reason = error
//                     errorHandler(dbError, res)
//                 }
//                 else if (doc) {
//                     let user = doc
//                     // console.log(user)


//                     //sending  email 
//                     const msg = {
//                         from: config.senderEmail,
//                         to: email,
//                         subject: "Chat2Fly- Reset Password Email",
//                         text: "We received a request to reset the password for your account\n Don't worry, Please enter the verification code to reset your password " + code,
//                         html: verificationCodeTemplate({
//                             mainHeading: 'Reset Password Email',
//                             title: 'Forgot your password?',
//                             message: "We received a request to reset the password for your account <br/> Don't worry </br>Please enter the verification code to reset your password <br/>",
//                             code: code
//                         })
//                     }

//                     const emailResponse = await sendEmail(msg)
//                     if (emailResponse.statusCode) throw internalServerError
//                     let json = {
//                         status: 'success',
//                         message: "A verification code has been sent to your email",
//                         code: code - 86
//                     }
//                     if (req.body.device && req.body.device === 'mobile') {
//                         json.data = code
//                     }
//                     res.status(200).json(json)

//                 } else {
//                     errorHandler(notFound, res)
//                 }
//             })
//     } catch (err) {
//         console.log(err)
//         errorHandler(err, res)
//     }
// }






// const resetPassword = async (req, res, next) => {
//     try {
//         const validData = await resetPasswordVerifcationSchema.validateAsync(req.body)

//         const Model = validData.userType === "user" ? User :
//             validData.userType === "agent" ? Agent : Admin

//         let user = await Model.find({ email: validData.email })
//         user = user[0]



//         if (!user) throw notFound

//         if (user.resetPasswordToken && user.resetPasswordToken === validData.code) {

//             let data = {
//                 resetPasswordToken: null,
//                 password: await user.encryptPassword(validData.password, res)
//             }
//             if (data.password) {

//                 Model.findOneAndUpdate({ email: validData.email }, data)
//                     .exec(
//                         (err, data) => {

//                             if (err) {
//                                 dbError.reason = err
//                                 throw dbError
//                             }
//                             else if (data) {
//                                 res.json({
//                                     message: "Your pasword has updated successfully"
//                                 })
//                             }
//                         })

//             }

//         }
//         else { errorHandler(invalidCode, res) }



//     } catch (err) {
//         console.log(err)
//         errorHandler(
//             err.isJoi ?
//                 { error: err.message } :
//                 { ...internalServerError, reason: err }, res)

//     }
// }







// const updatePassword = async (req, res, next) => {


//     if (req.body.isFacebookLogin || req.body.isGoogleLogin) {
//         res.json({ message: "action not allowed" })
//     }


//     else {
//         try {
//             const validData = await updatePasswordVerificationSchema.validateAsync(req.body)

//             const Model = validData.userType === "user" ? User :
//                 validData.userType === "agent" ? Agent : Admin

//             let user = await Model.find({ email: validData.email })

//             user = user[0] // extract user object from array

//             if (!user) throw badRequest
//             const isMatch = await user.isValidPassword(validData.currentPassword)

//             if (!isMatch) return errorHandler(unauthorizedError, res)
//             let data = {
//                 password: await user.encryptPassword(validData.newPassword, res)
//             }

//             Model.findByIdAndUpdate({ _id: user._id }, data)
//                 .exec((err, doc) => {
//                     if (err) {
//                         dbError.reason = err;
//                         errorHandler(dbError, res)
//                     } else if (doc) {
//                         res.json({ message: "Your pasword has updated successfully" })
//                     }
//                 })


//         } catch (err) {

//             err.isJoi ? errorHandler(badRequest, res) : errorHandler(err, res)

//         }
//     }

// }









module.exports = {
    signup,
    login,
    // confirmAccountVerification,  sendForgotPasswordEmail, resetPassword, updatePassword, sendEmailOtp 

}