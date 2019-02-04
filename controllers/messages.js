const knex = require('../db/knex')

module.exports = {
  getAllByUserId(req, res) {
    knex('messages')
      .where('fromUser', req.params.user_id)
      .orWhere('toUser', req.params.user_id)
      .orderBy('created_at', 'asc')
      .then(messages => {
        res.json(messages)
      })
  },
  addOne(req, res) {
    const { fromUser, toUser, subject, body } = req.body
    knex('messages')
      .insert(
        {
          fromUser,
          toUser,
          subject,
          body,
          created_at: new Date()
        },
        '*'
      )
      .then(newMessage => res.json(newMessage))
  }
}
