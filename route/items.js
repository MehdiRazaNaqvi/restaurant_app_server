const express = require('express')
const router = express.Router()
const {
    getItems,
    createItem


} = require('../controller/item')



router.get('/', getItems)
router.post('/create', createItem)






module.exports = router