const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
	db
		('accounts')
		.then((accounts) => {
			res.status(200).json({ data: accounts });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ errorMessage: 'there was an error trying to retrive all accounts' });
		});
});

router.get('/:id', (req, res) => {
  db
  ('accounts')
  .where({ id: req.params.id })
  .first()
  .then((account) => {
    res.status(200).json({data: account})
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({ errorMessage: 'there was an error retrieveing that account' })
  })
})


module.exports = router;