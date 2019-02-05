exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friend_requests')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('friend_requests').insert([
        { sent_by: 7, received_from: 10, approved: true },
        { sent_by: 4, received_from: 9 },
        { sent_by: 3, received_from: 5 },
        { sent_by: 6, received_from: 3 },
        { sent_by: 3, received_from: 10, approved: true },
        { sent_by: 9, received_from: 10, approved: true },
        { sent_by: 2, received_from: 1 },
        { sent_by: 2, received_from: 9 }
      ])
    })
}
