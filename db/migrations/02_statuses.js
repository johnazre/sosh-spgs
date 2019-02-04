exports.up = function(knex, Promise) {
  return knex.schema.createTable("statuses", function(table) {
    table.increments();
    table
      .integer("author_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table.text("content");
    table.string("imageUrl");
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("statuses");
};
