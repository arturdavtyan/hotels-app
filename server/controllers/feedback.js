const db = require('../db')

module.exports.createFeedback = async (req, res) => {
  try {
    const hotel_id = parseInt(req.body.hotel_id, 10) || 0
    const rate = parseFloat(req.body.rate, 10) || 0
    const comment = req.body.comment

    const isValidRate = rate >= 1 && rate <= 5 && Number.isInteger(rate)
    const isValidComment = typeof comment === 'string' && comment.trim().length > 3

    if (hotel_id === 0) {
      res.status(400).json({ message: 'Invalid \'hotel_id\'' })
      return
    }
    if (!isValidComment) {
      res.status(400).json({ message: '\'comment\' is required field' })
      return
    }
    if (rate !== 0 && !isValidRate) {
      res.status(400).json({ message: 'Invalid \'rate\'' })
      return
    }

    const { rowCount } = await db.query('SELECT hotel_id FROM hotels WHERE hotel_id = $1', [hotel_id])
    if (rowCount === 0) {
      res.status(404).json({ message: 'Hotel not found' })
      return
    }

    const fields = [
      { field: 'hotel_id', value: hotel_id, required: true },
      { field: 'comment', value: comment, required: true },
      { field: 'rate', value: rate, required: rate !== 0 }
    ]
    const queryFields = fields.filter(field => field.required)

    const { rows } = await db.query(
      `INSERT INTO feedback
        (${queryFields.map(field => field.field).join(',')})
        VALUES(${queryFields.map((f,i) => `$${i+1}`).join(',')}) RETURNING feedback_id, created_at`,
      queryFields.map(field => field.value)
    )
    res.status(201).json({ feedback_id: rows[0].feedback_id, created_at: rows[0].created_at })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}