const express = require('express');
const userRouter = require('./routes/user_router');
const collectionRouter = require('./routes/collection_router');
const songRouter = require('./routes/song_router');
// const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).send('ayyyy!!!');
})
  .use(userRouter)
  .use(collectionRouter)
  .use(songRouter);

app.use(router);

module.exports = router;
