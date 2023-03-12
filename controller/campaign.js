// const Campaign = require("../model/campaign");
// const { errorHandler } = require("../helper");
// const { message } = require("../helper");
// const { dbError, notFound } = message
// const packageType = require("../model/packageType");
// const campaign = require("../model/campaign");
// const Merchant = require("../model/merchant");




// const createCampaign = async (req, res) => {

//   try {
//     const campaign = await Campaign.create(req.body);

//     if (!campaign) {
//       res.status(404).json({ success: false });
//     } else {
//       // console.log("campaign", campaign);

//       // console.log("nakjdnkanklas")
//       res.status(200).json({ success: true, data: campaign });



//     }
//   } catch (error) {
//     res.json(error)


//   }
// };






// const getAllCampaigns = async (req, res) => {


//   const getCampaigns = await Campaign.find({}).sort({ _id: -1 });
//   console.log(getCampaigns)
//   if (!getCampaigns) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: getCampaigns });

//   }


// };



// const getCampaignsByCategory = async (req, res) => {
//   const cat = req.params.cat;
//   console.log("cat", cat);
//   const getCampaignsByCat = await Campaign.find({
//     "category._id": cat,
//   }).sort({ _id: -1 });
//   if (!getCampaignsByCat) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: getCampaignsByCat });
//   }
//   console.log(getCampaignsByCat);
// };



// const getCampaignById = async (req, res) => {

//   const ObjectId = require("mongodb").ObjectId;

//   let campaign = await Campaign.findById({ _id: new ObjectId(req.params.id) });
//   console.log("campaign3366", campaign);
//   if (!campaign) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: campaign });
//   }
// };



// const getCampaignByMerchantId = (req, res) => {
//   try {
//     Campaign.find({ merchantId: req.params.id })
//       .exec((err, doc) => {
//         if (err) {
//           errorHandler(err, res)
//         }
//         else if (doc) {
//           res.json({ data: doc })
//         } else {
//           errorHandler(err, res)
//         }
//       })

//   } catch (err) {
//     errorHandler(err, res)
//   }
// }


// const getCampaignsBySubCategory = async (req, res) => {
//   const cat = req.params.cat;
//   console.log("cat", cat);
//   const getCampaignsBySubCat = await Campaign.find({
//     "subCategory._id": cat,
//   }).sort({ _id: -1 });



//   if (!getCampaignsBySubCat) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: getCampaignsBySubCat });
//   }
//   console.log(getCampaignsBySubCat);

// };



// const getCampaignsByLocation = async (req, res) => {
//   const loc = req.params.loc;
//   console.log(loc)

//   const getCampaignsByLocation = await Campaign.find({
//     "city": loc,
//   }).sort({ _id: -1 });

//   if (!getCampaignsByLocation) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: getCampaignsByLocation });
//   }
//   console.log(getCampaignsByLocation);
// };



// // const updateCampaigns = (req, res) => {
// //   let itemId = req.query.id;
// //   let item = req.body;

// //   console.log("campaign itemId===============", itemId);
// //   console.log("campaign item===============", item);

// //   Campaign.findById({ _id: itemId }, (err, data) => {

// //     if (err) {
// //       dbError.reason = err;
// //       return errorHandler(dbError, res);
// //     }

// //     if (data) {
// //       console.log(req.body.description);
// //       campaign.findOneAndUpdate(
// //         { _id: itemId },
// //         req.body,

// //         //   $set: {
// //         //     'title': req.body.campaign_title,
// //         //     description: req.body.description,
// //         //     category: req.body.category,
// //         //     subCategory: req.body.subCategory,
// //         //     image: req.body.image,
// //         //     video: req.body.video,
// //         //     offer: req.body.offer,
// //         //     campaignStatus: req.body.campaignStatus,
// //         //     city:req.body.city
// //         //   },
// //         // },
// //         { returnNewDocument: true },
// //         (err, data) => {

// //           if (err) {
// //             return errorHandler(dbError, res);
// //           }
// //           if (data) {
// //             console.log("data", data);
// //             return res.status(200).json({
// //               message: "Campaign updated successfully",
// //               // data
// //             });
// //           }
// //         }
// //       );
// //     }
// //   });

// //   // await Campaign.findByIdAndUpdate({
// //   //   _id: req.params.id,
// //   // })
// //   //   .then((campaign) => {
// //   //     campaign.title = req.body.title;
// //   //     campaign.description = req.body.description;
// //   //     campaign.category = req.body.category;
// //   //     campaign.subCategory = req.body.subCategory;
// //   //     campaign.image = req.body.image;
// //   //     campaign.video = req.body.video;
// //   //     campaign.campaignStatus = req.body.campaignStatus;
// //   //     campaign
// //   //       .save()
// //   //       .then(() =>
// //   //         res.status(200).json({ status: "Campaign Updated", data: campaign })
// //   //       )
// //   //       .catch((err) =>
// //   //         res.status(400).json({ status: "Something Went Wrong", error: err })
// //   //       );
// //   //   })
// //   //   .catch((err) => res.status(400).json({ status: "Not Found", error: err }));
// // };

// const updateCampaigns = (req, res) => {
//   try {
//     let itemId = req.query.id;
//     let item = req.body;

//     Campaign.findByIdAndUpdate({ _id: itemId }, req.body)
//       .exec((err, doc) => {
//         console.log(err, doc)
//         if (err) {
//           errorHandler(err, res)
//         }
//         else if (doc) {
//           res.json({ message: "campaign updated succcessfully" })
//         } else {
//           errorHandler(notFound, res)
//         }

//       })

//   } catch (err) {
//     errorHandler(err, res)
//   }
// }








// const deleteCampaigns = async (req, res) => {
//   const deleteCampaigns = await Campaign.findByIdAndDelete({
//     _id: req.query.id,
//   });
//   if (!deleteCampaigns) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, message: "Campaign Deleted" });
//   }
// };







// const getCampaignsByPrice = async (req, res) => {

//   console.log("min:", req.params.min, "max:", req.params.max);
//   // const min ={'$set': {'req.params.min': {'$toDouble': '$req.params.min'}}} ;

//   // const min = { $convert: { input: req.params.min, to: "int" } }
//   const min = parseFloat(req.params.min);
//   const max = parseFloat(req.params.max);



//   // const getCampaignsByPrice = await Campaign.find({
//   //  "offer":
//   // { $elemMatch: {
//   //   "offer_price": {$gte: min},
//   //   "offer_price":{$lte: max}
//   // }
//   // }

//   // const getCampaignsByPrice = await Campaign.aggregate([
//   //   {
//   //     $match: {
//   //       "offer.offer_price": {
//   //         cond: {
//   //                     $and: [
//   //                       {
//   //                          $gte: [
//   //                         "$$offer.offer_price",min 
//   //                          ],
//   //                        },
//   //                        {
//   //                         $lte: [
//   //                           "$$offer.offer_price",max 
//   //                            ]
//   //                        }
//   //                        ,
//   //                       ],
//   //        }
//   //     },
//   //   },
//   // {
//   //   $project: {
//   //     offer: {
//   //       $filter: {
//   //         input: "$offer",
//   //         as: "offer",
//   //         cond: {
//   //           $and: [
//   //             {
//   //               $gte: [
//   //                 { $toDouble: "$$offer.offer_price" },
//   //                 { $toDouble: min },
//   //               ],
//   //             },
//   //             {
//   //               $lte: [
//   //                 { $toDouble: "$$offer.offer_price" },
//   //                 { $toDouble: max },
//   //               ],
//   //             },
//   //           ],
//   //         },
//   //       },
//   //     },
//   //   },
//   //    },
//   // ]);


//   //   const getCampaignsByPrice = await Campaign.aggregate([
//   //     { 
//   //         "$match": { 
//   //             // "name": "Hello",
//   //             "offer.offer_price": { "$gt": min, "$lt": max }
//   //         } 
//   //     },
//   //     {
//   //         "$project": {
//   //             "name": 1,
//   //             "offer": {
//   //                 "$filter": {
//   //                     "input": "$offer",
//   //                     "as": "offer",
//   //                     "cond": { 
//   //                         "$and": [
//   //                             { "$gt": [ "$$offer.offer_price", min] },
//   //                             { "$lt": [ "$$offer.offer_price", max ] }
//   //                         ]
//   //                     }
//   //                 }
//   //             }
//   //         }
//   //     }

//   // ])




//   const getCampaignsByPrice = await Campaign.find({ "offer.offer_price": { $gt: min, $lt: max } })
//   console.log(typeof (max))




//   if (!getCampaignsByPrice) {
//     res.status(404).json({ success: false });
//   } else {
//     res.status(200).json({ success: true, data: getCampaignsByPrice });
//   }
//   console.log(getCampaignsByPrice.length);
// };





// module.exports = {
//   createCampaign,
//   getAllCampaigns,
//   updateCampaigns,
//   deleteCampaigns,
//   getCampaignsByCategory,
//   getCampaignsBySubCategory,
//   getCampaignById,
//   getCampaignByMerchantId,
//   getCampaignsByPrice,
//   getCampaignsByLocation
// };
