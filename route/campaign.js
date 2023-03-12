const express = require("express");
const {
  createCampaign,
  getAllCampaigns,
  updateCampaigns,
  deleteCampaigns,
  likeCampaigns,
  getCampaignsByCategory,
  getCampaignsBySubCategory,
  getCampaignById,
  getCampaignByMerchantId,
  getCampaignsByPrice,
  getCampaignsByLocation,
  unlikeCampaigns,
} = require("../controller/campaign");
const router = express.Router();

router.post("/create", createCampaign);
router.get("/getAllCampaigns", getAllCampaigns);
router.post("/updateCampaigns", updateCampaigns);
router.delete("/deleteCampaigns", deleteCampaigns);
// router.put("/like/:id", likeCampaigns);
router.get("/getCampaignsByCategory/:cat", getCampaignsByCategory);
router.get("/getCampaignsBySubCategory/:cat", getCampaignsBySubCategory);
router.get("/getCampaignById/:id", getCampaignById);
router.get("/getCampaignsByMerchantId/:id", getCampaignByMerchantId);
router.get("/getCampaignsByPrice/:min&:max", getCampaignsByPrice);
router.get("/getCampaignsByLocation/:loc", getCampaignsByLocation);
// router.put("/unlikeCampaigns", unlikeCampaigns);

module.exports = router;
