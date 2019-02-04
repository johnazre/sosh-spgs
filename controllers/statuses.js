const knex = require('../db/knex')

function getFriendsByUserId(userId) {
  return knex('friend_requests')
    .where('approved', true)
    .andWhere('sent_by', userId)
    .orWhere('received_by', userId)
    .then(friendsArr => {
      return friendsArr.map(friend =>
        friend.sent_by == userId ? friend.received_by : friend.sent_by
      )
    })
}

module.exports = {
  getAllByUserId(req, res) {
    knex('statuses')
      .where('author_id', req.params.user_id)
      .then(userStatuses => res.json(userStatuses))
  },
  getAllFriendStatuses(req, res) {
    getFriendsByUserId(10).then(result => {
      const arrOfFriendStatusQueries = result.map(friendId =>
        knex('statuses').where('author_id', friendId)
      )
      Promise.all(arrOfFriendStatusQueries).then(arrsOfFriendStatuses => {
        let allStatusesSorted = arrsOfFriendStatuses
          .flat()
          .sort((a, b) => a.created_at > b.created_at)
        res.json(allStatusesSorted)
      })
    })
  },
  addOne(req, res) {
    const { author_id, content, created_at } = req.body
    knex('statuses')
      .insert({ author_id, content, created_at })
      .then(newStatus => res.json(newStatus))
  },
  deleteOne(req, res) {
    knex('statuses')
      .where('author_id', req.params.user_id)
      .del()
      .returning('*')
      .then(removedStatus => res.json(removedStatus))
  }
}
