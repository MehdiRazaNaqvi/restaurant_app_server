const express = require("express");
const Fcm = require("../model/fcm");
const { errorHandler } = require("../helper");
const { message } = require("../helper");
const { dbError, notFound } = message
const packageType = require("../model/packageType");
const campaign = require("../model/campaign");
const Merchant = require("../model/merchant");



const router = express.Router();

router.post("/getFcm", async (req, res) => {

    try {


        const fcm = await Fcm.create(req.body);
        

        if (!fcm) {
            console.log("WRONG")
            res.status(404).json({ success: false });
        } else {
            // console.log("campaign", campaign);

            console.log("Right")

            res.status(200).json({ success: true, data: fcm });



        }
    } catch (error) {
        res.json(error)


    }

});




module.exports = router;