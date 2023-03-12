const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true,
        default: null
    },
    price: {
        type: Number,
        required: true
    },
    // merchantId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Merchant",
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: new Date
    }

});

module.exports =
    mongoose.models.campaigns || mongoose.model("item", ItemSchema);
