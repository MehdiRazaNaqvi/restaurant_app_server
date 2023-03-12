const express = require("express");
const Fcm = require("../model/fcm");
const { errorHandler } = require("../helper");
const { message } = require("../helper");
const { dbError, notFound } = message
const packageType = require("../model/packageType");
const campaign = require("../model/campaign");
const Merchant = require("../model/merchant");
const { Configuration, OpenAIApi } = require("openai");

require ("dotenv").config()

const router = express.Router();


const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);


router.post("/getans", async (req, res) => {

    try {


        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${req.body.text}\n| skills |`,
            temperature: 0.5,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            stop: ["\"\"\""],
        });

        res.send({ msg: response.data.choices[0].text })
        console.log("Runned")


    } catch (error) {
        res.json(error)
    }

});




module.exports = router;