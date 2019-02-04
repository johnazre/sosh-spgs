exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments()
    table
      .integer('fromUser')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
    table
      .integer('toUser')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
    table.string('subject')
    table.text('body')
    table.datetime('created_at')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
}
