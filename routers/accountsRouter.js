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

router.post('/', (req, res) => {
  const postData = req.body
	db('accounts')
    .insert(postData, 'id')
    .then(ids => {
      const id = ids[0]
        db('accounts')
        .where({ id })
        .first()
        .then(account => {
            res.status(201).json({data: account});
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: 'There was an error with POST of that account data' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db('accounts')
  .where({ id })
  .update(changes)
  .then((count) => {
    res.status(200).json({ message: `updated ${count} account(s)`})
  })
})

module.exports = router;