const express = require('express')
const router = express.Router()
const {getTrainer, getTrainerbyId, createTrainer, updateTrainer, } = require('../controller/trainer')


router.post('/create', createTrainer)
router.post('/update', updateTrainer)
router.get('/', getTrainer)
router.post('/TrainerById', getTrainerbyId)

module.exports = router



