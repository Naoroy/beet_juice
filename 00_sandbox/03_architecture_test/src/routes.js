const router = require('express').Router();
const user = require('./models/user');

router
.get('/', (request, response) => {
    response.send('ayyyy!!!');
})

.get('/user', (request, response) => {
    response.send('userlist!!!');
})

module.exports = router;
