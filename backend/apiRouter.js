const express = require('express');
const db = require('./modals.js'); // SQL file
const userController = require('./userController.js'); // controller file with business logic of routers

const router = express.Router();

router.get('/', async (req, res) => {
  const text = `select * from people`;

  // const people = await db.query(text);
  // console.log(people.rows);

  res.status(200).json({ hi: 'api start' });
});

// save user mortgages
router.post('/savevalues', async (req, res) => {
  const { loan_term, loan_amount, interest } = req.body;
  let { person } = req.body;

  console.log(req.body);

  if (!person) {
    person = 1;
  }

  const newmortgageId = `SELECT MAX(id) FROM mortgages`;

  const mortgagesId = await db.query(newmortgageId);

  const id = Number(mortgagesId.rows[0].max) + 1;

  const INSERTpeople = `INSERT into mortgages 
                      values ($1, $2, $3, $4, $5, $6)`;// db queries into SQL
  const array = [id, loan_term, loan_amount, null, person, interest];

  await db.query(INSERTpeople, array);

  res.status(200).json({ hi: 'saved values' });
});

// new user
router.get('/user', async (req, res) => {
  const person = req.body.name;

  console.log(req.body.name);

  const newpeopleId = `SELECT MAX(id) FROM people`;

  const peopleId = await db.query(newpeopleId);

  console.log(peopleId.rows[0].max);
  const id = Number(peopleId.rows[0].max) + 1;

  const INSERTpeople = `INSERT into people
                      values ($1, $2)`;
  const array = [id, person];

  await db.query(INSERTpeople, array);

  res.status(200).json({ hi: 'new user' });
});

//delete Mortgage
router.get('/deleteMortgage', async (req, res) => {
  const array = [req.body.id];

  const deleteMortgages = `DELETE FROM mortgages WHERE id = $1;`;
  await db.query(deleteMortgages, array);

  res.status(200).json({ hi: 'deleted Mortgage' });
});

//update
router.get('/updateMortgage', async (req, res) => {
  const { loan_term, loan_amount, interest, id } = req.body;
  const array = [loan_term, loan_amount, interest, id];

  const updateMortgages = `UPDATE mortgages
SET loan_term = $1 , loan_amount = $2, interest = $3
WHERE id = $4;`;
  await db.query(updateMortgages, array);

  res.status(200).json({ hi: 'updated Mortgage' });
});

router.post('/saveuser', userController.createUser, (req, res) => {
  res.status(200).json({ hi: 'saved user' });
});

router.post('/checkuser', userController.getUser, (req, res) => {
  res.status(200).json({ hi: 'got user' });
});

//   res.status(200).json({ hi: 'got user' });
// })

module.exports = router;
