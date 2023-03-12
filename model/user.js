

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const { errorHandler } = require('../helper');
const { dbError } = require('../helper/message');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: null
    },
    phoneVerified: {
        type: Boolean,
        default: false
    },

    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});



UserSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()

    } catch (error) {
        dbError.message = error.message
        dbError.reason = error.reason
        next(dbError)
    }
})


// this middleware will called after saving data in mongoose
// adding here just for testing 

// UserSchema.post('save', async function (next){
//     console.log("called after saving a user")
// })

//defining custom method for userschema to validate password for login
UserSchema.methods.isValidPassword = async function (password, next) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log(error)
        next()
    }
}


UserSchema.methods.encryptPassword = async function (password, res) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        return hashPassword

    } catch (error) {
        dbError.message = error.message
        dbError.reason = error.reason
        errorHandler(dbError, res)

    }
}


module.exports =
    mongoose.models.campaigns || mongoose.model("user", UserSchema);
