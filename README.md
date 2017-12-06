"# NodeJsresfulExpressMongoDB"

Install >> npm install <br/>
Run >> node server.js<br/>
<br/>
// Collection name is users
<br/>
Model User
<br/>
http://localhost:9999/users/<br/>
http://localhost:9999/users/{user._id}   --5a2761fd3656fc5737749223<br/>
<br/>
and
<br/>
  // route by method sender<br/>
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);
<br/>
  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);
    
    Credits: https://github.com/prabhatpankaj/mongouserrestapi.git
