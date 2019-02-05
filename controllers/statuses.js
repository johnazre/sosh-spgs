const knex = require('../db/knex')

function getFriendsByUserId(userId) {
  console.log('userId', userId)
  return knex('friend_requests')
    .where('approved', true)
    .andWhere('sent_by', userId)
    .orWhere('received_from', userId)
    .then(friendsArr => {
      return friendsArr.map(friend =>
        friend.sent_by == userId ? friend.received_from : friend.sent_by
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
    getFriendsByUserId(req.params.user_id).then(result => {
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
    const { author_id, content } = req.body
    knex('statuses')
      .insert({ author_id, content })
      .then(newStatus => res.json(newStatus))
  },
  deleteOne(req, res) {
    knex('statuses')
      .where('id', req.params.status_id)
      .del()
      .returning('*')
      .then(removedStatus => res.json(removedStatus))
  }
}
