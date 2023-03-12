const Item = require("../model/Item")



const getItems = async (req, res) => {

    const getCampaigns = await Item.find({})
    res.status(200).json({ success: true, data: getCampaigns });




}




const createItem = async (req, res) => {

    try {
        const campaign = await Item.create(req.body);

        if (!campaign) {
            res.status(404).json({ success: false });
        } else {


            res.status(200).json({ success: true, data: campaign });



        }
    } catch (error) {
        res.json(error)


    }
};






module.exports = { getItems, createItem }