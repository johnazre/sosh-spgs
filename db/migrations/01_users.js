exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.text('bio');
    table.string('profilePhotoURL')
    table.string('location')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};