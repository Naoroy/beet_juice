const collection = require('../models/collection_model');
const collectionRouter = require('express').Router();

collectionRouter.get('/user/collection/:id', (request, response) => {
  collection.get((data) => {
    if (!data || !data.length) {
      response.status(404).send('collection not found');
      return;
    }
    response.status(200).send(JSON.stringify(data));
  }, Number(request.params.id));
})
  .post('/user/collection/:id', (request, response) => {
    const { id } = request.params;
    const { name } = request.body;
    collection.create(id, name, () => {
      response.status(200).send(`Collection "${name}" successfully created`);
    });
  })
  .delete('/user/collection/:collection', (request, response) => {
    const collectionID = request.params.collection;
    collection.delete(collectionID, () => {
      response.status(200).send('Collection deleted successfully');
    });
  });

module.exports = collectionRouter;
