const { Router } = require('express')
const router = Router()

const { getAll, createHotel, getById } = require('../../controllers/hotels')

// GET /api/v1/hotels - get all hotels
router.get('/', getAll)

// GET /api/v1/hotels/:id - get hotel by id
router.get('/:id', getById)

// POST /api/v1/hotels - create hotel
router.post('/', createHotel)

module.exports = router