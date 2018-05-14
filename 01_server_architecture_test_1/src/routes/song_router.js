const song = require('../models/song_model');
const songRouter = require('express').Router();

songRouter.get('collection/song', (request, response) => {
  song.get((data) => {
    response.status(200).send(data);
  });
});

module.exports = songRouter;
