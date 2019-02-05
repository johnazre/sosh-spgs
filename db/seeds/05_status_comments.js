exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status_comments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('status_comments').insert([
        { author_id: 1, status_id: 1, content: 'hello world 1' },
        { author_id: 2, status_id: 1, content: 'hello world 2' },
        { author_id: 3, status_id: 1, content: 'hello world 3' }
      ])
    })
}
