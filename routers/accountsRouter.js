const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
	db
		.select('*')
    .from('accounts')
		.then((accounts) => {
			res.status(200).json({ data: accounts });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ errorMessage: 'there was an error trying to retrive all accounts' });
		});
});



module.exports = router;