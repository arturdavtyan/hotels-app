exports.up = pgm => {
  pgm.createTable('hotels', {
    hotel_id: 'id',
    name: { type: 'varchar(70)', unique: true, notNull: true },
    description: { type: 'text', notNull: true },
    latitude: { type: 'float8', notNull: true },
    longitude: { type: 'float8', notNull: true }
  }, {
    ifNotExists: true
  })
  pgm.createTable('feedback', {
    feedback_id: 'id',
    rate: { type: 'integer', default: null },
    comment: { type: 'string', notNull: true },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    hotel_id: {
      type: 'integer',
      notNull: true,
      references: 'hotels',
      onDelete: 'cascade'
    }
  }, {
    ifNotExists: true
  })
}