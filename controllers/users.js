const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('users').then(users => res.json(users))
  },
  getById(req, res) {
    knex('users')
      .where('id', req.params.id)
      .then(user => res.json(user))
  },
  addOne(req, res) {
    let { name, email, bio, profilePhotoURL, location } = req.body
    knex('users')
      .insert({ name, email, bio, profilePhotoURL, location }, '*')
      .then(newUser => res.json(newUser))
  },
  updateOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update(req.body)
      .then(updatedUser => res.json(updatedUser))
  },
  deleteOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(removedUser => res.json(removedUser))
  },

  // Friend request handlers
  requestFriend(req, res) {
    let { sent_by, recieved_by } = req.body
    knex('friend_requests')
      .insert({ sent_by, recieved_by }, '*')
      .then(newFriendRequest => res.json(newFriendRequest))
  },
  approveFriendRequst(req, res) {
    knex('friend_requests')
      .where('id', req.params.request_id)
      .update({ approved: true }, '*')
      .then(updatedFriendRequest => res.json(updatedFriendRequest))
  },
  removeFriendRequest(req, res) {
    knex('friend_requests')
      .where('id', req.params.request_id)
      .del()
      .returning('*')
      .then(removedFriendRequest => res.json(removedFriendRequest))
  }
}
