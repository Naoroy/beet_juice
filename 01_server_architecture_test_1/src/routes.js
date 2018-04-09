const router = require('express').Router();
const user = require('./models/user');

router.get('/', (request, response) => {
    response.status(200).send('ayyyy!!!');
})
.get('/user', (request, response) => {
	user.get((data) => {
		response.status(200).send(JSON.stringify(data));
	});
})
.post('/user', (request, response) => {
	user.create(request.body, (error, data) => { // (error, data)
		if (error) {
			response.status(400).send("invalid parameters!");
			return;
		}
		console.log(result);
		response.status(200).send('user created');
	});
})
.patch('/user/:id', (request, response) => {
	user.patch(request.body, (error, data) => { // (error, data)
		if (error) {
			response.status(400).send("invalid parameters!");
			return;
		}
		response.status(200).send('user modified');
	});
})
.delete('/user/:id', (request, response) => {
	user.delete(request.body.id, (error, data) => { // (error, data)
		if (error) {
			response.status(400).send("invalid parameters!");
			return;
		}
		response.status(200).send('user deleted');
	});
})
.get('/user/collection', (request, response) => {
    response.status(200).send('user\'s collection!!!');
})
.get('/user/collection/song', (request, response) => {
    response.status(200).send('collection\'s song!!!');
})

module.exports = router;
