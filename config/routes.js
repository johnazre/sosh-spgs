const express = require('express')
const router = express.Router()

// Imported controllers
const users = require('../controllers/users')
const statuses = require('../controllers/statuses')
const messages = require('../controllers/messages')

/* Auth Routes */
// TODO: Need auth routes

/* Users Routes */
router.get('/users', users.getAll)
router.get('/users/:id', users.getById)
router.post('/users', users.addOne)

// TODO: Route - Add route to get a list of friends for a particular users
// router.get('/users/:id/friends', users.getFriendsOfUserById)

router.patch('/users/:id', users.updateOne)
router.delete('/users/:id', users.deleteOne)

/* Friend Requests */
router.post('/friend-request/:from_user/:to_user', users.requestFriend)
router.delete('/friend-request/:from_user/:to_user', users.removeFriendRequest)

/* Status Routes */
router.get('/statuses/:user_id', statuses.getAllByUserId)
router.get('/statuses/:user_id/friends', statuses.getAllFriendStatuses)
router.post('/statuses', statuses.addOne)
router.delete('/statuses/:id', statuses.deleteOne)

/* Messages Routes */
router.get('/messages/:user_id', messages.getAllByUserId)
router.post('/messages', messages.addOne)

module.exports = router
