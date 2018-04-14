const user = require('../models/user_model');
const userRouter = require('express').Router();

userRouter.get('/user', (request, response) => {
  user.get((data) => {
    response.status(200).send(JSON.stringify(data));
  });
})
  .get('/user/:id', (request, response) => {
    const userID = Number(request.params.id);
    if (userID) {
      user.get((data) => {
        response.status(200).send(JSON.stringify(data));
      }, userID);
    } else {
      response.status(400).send('unknow user');
    }
  })
  .post('/user', (request, response) => {
    user.create(request.body, (error) => {
      if (error) {
        response.status(400).send('invalid parameters!');
        return;
      }
      response.status(200).send('user created');
    });
  })
  .patch('/user/:id', (request, response) => {
    user.patch(request.body, (error) => {
      if (error) {
        response.status(400).send('invalid parameters!');
        return;
      }
      response.status(200).send('user modified');
    });
  })
  .delete('/user/:id', (request, response) => {
    user.delete(request.params, (error) => {
      if (error) {
        response.status(400).send('invalid parameters!');
        return;
      }
      response.status(200).send('user deleted');
    });
  });

module.exports = userRouter;
