const express = require("express");
const router = express.Router();
const {
  createMerchantByMerchant,
  updateMerchant,
  getMerchantbyId,
  getAllMerchantManagedByAdmin,
  getAllMerchantRequest,
  getAllMerchantsManagedByMerchants,
  createMerchantByAdmin,
  getAllMerchants,
} = require("../controller/merchant");

router.post("/create", createMerchantByMerchant);

router.post("/createMerchantByAdmin", createMerchantByAdmin);
router.post("/update", updateMerchant);
router.get("/", getAllMerchants);
router.get("/byAdmin", getAllMerchantManagedByAdmin);
router.get("/byMerchant", getAllMerchantsManagedByMerchants);
router.get("/request", getAllMerchantRequest);
router.get("/getMerchantById", getMerchantbyId);

module.exports = router;
