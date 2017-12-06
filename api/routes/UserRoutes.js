'use strict';
module.exports = function(app) {
  var user = require('../controllers/UserController');

  // route by method sender
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);


  // route by method sender
  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
};