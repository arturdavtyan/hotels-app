const { Router } = require('express')
const router = Router()

const { createFeedback } = require('../../controllers/feedback')

// POST /api/v1/feedback - create feedback
router.post('/', createFeedback)

module.exports = router