const db = require('../db')

module.exports.getAll = async (req, res) => {
  try {
    const { rows, rowCount } = await db.query(
      `SELECT
        hotels.hotel_id,
        hotels.name,
        hotels.latitude,
        hotels.longitude,
        AVG(feedback.rate)::numeric(5,2)::float4 AS rate
      FROM hotels
      LEFT JOIN feedback ON hotels.hotel_id = feedback.hotel_id
      GROUP BY hotels.hotel_id
      ORDER BY rate DESC NULLS LAST;`)

    res.status(200).json({ data: rows, total: rowCount })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10) || 0
    if (id === 0) {
      res.status(400).json({ message: '\'id\' must be integer' })
      return
    }

    const { rows } = await db.query(
      `SELECT
        hotels.*,
        AVG(feedback.rate)::numeric(5,2)::float4 AS rate,
        COALESCE(json_agg(
          json_build_object(
            'feedback_id', feedback.feedback_id,
            'message', feedback.comment,
            'rate', feedback.rate,
            'created_at', feedback.created_at
          )
        ) FILTER (WHERE feedback.created_at IS NOT NULL), '[]') AS comments
      FROM hotels
      LEFT JOIN feedback ON hotels.hotel_id = feedback.hotel_id
      GROUP BY hotels.hotel_id
      HAVING hotels.hotel_id = $1
      ORDER BY rate DESC NULLS LAST;`, [id])
    
    if (!rows.length) {
      res.status(404).json({ message: 'Hotel not found' })
      return
    }
    res.status(200).json(rows[0])
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports.createHotel = async (req, res) => {
  try {
    const { name, description, latitude, longitude } = req.body
    const { rows } = await db.query(
      'INSERT INTO hotels (name, description, latitude, longitude) VALUES($1, $2, $3, $4) RETURNING hotel_id',
      [name, description, latitude, longitude]
    )
    res.status(201).json({ hotel_id: rows[0].hotel_id })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
