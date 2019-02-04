exports.up = function(knex, Promise) {
  return knex.schema.createTable('status_comments', function(table) {
    table.increments()
    table
      .integer('author_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
    table
      .integer('status_id')
      .references('id')
      .inTable('statuses')
      .onDelete('cascade')
    table.text('content')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status_comments')
}
