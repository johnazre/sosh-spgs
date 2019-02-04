exports.up = function(knex, Promise) {
  return knex.schema.createTable("friend_requests", function(table) {
    table.increments();
    table
      .integer("sent_by")
      .references("id")
      .inTable("users");
    table
      .integer("received_by")
      .references("id")
      .inTable("users");
    table.boolean("approved").defaultTo(false);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("friend_requests");
};
