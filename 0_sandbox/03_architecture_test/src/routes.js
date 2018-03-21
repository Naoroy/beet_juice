const router = require('express').Router();
const user = require('./models/user');

console.log(user);

router
.get('/', (req, res) => {
    res.send('ayyyy!!!');
})

.get('/user', (req, res) => {
    res.send('userlist!!!');
})

module.exports = router;
