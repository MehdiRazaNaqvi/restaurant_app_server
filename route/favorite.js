const express = require("express");
const {
    
    likeCampaigns,
    unlikeCampaigns,
    getAllRecentViewedCampaigns,
    deleteAllRecentlyViewedCampaigns,
    deleteAllFavoriteCampaigns,
    RecentViewedCampaigns,
    removeRecentlyViewedCampaignById,
    getAllFavoriteCampaigns
  } = require("../controller/favorite");
  const router = express.Router();

  router.post("/likeCampaigns/:id", likeCampaigns);
  router.post("/unlikeCampaigns/:id", unlikeCampaigns);
  router.post("/removeRecentlyViewedCampaignById/:id", removeRecentlyViewedCampaignById);
  router.get("/getAllRecentViewedCampaigns/:id([0-9a-fA-F]{24})", getAllRecentViewedCampaigns);
  router.post("/deleteAllRecentlyViewedCampaigns/:id", deleteAllRecentlyViewedCampaigns);
  router.post("/deleteAllFavoriteCampaigns/:id", deleteAllFavoriteCampaigns);
  router.post("/RecentViewedCampaigns/:id", RecentViewedCampaigns);
  router.get("/getAllFavoriteCampaigns/:id([0-9a-fA-F]{24})", getAllFavoriteCampaigns);

  module.exports = router;