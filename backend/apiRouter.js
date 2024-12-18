const express = require('express');
const db = require('./modals.js');

const router = express.Router();

router.get('/', async (req, res) => {
  const text = `select * from people`;

  const people = await db.query(text);
  console.log(people.rows);

  res.status(200).json({ hi: 'h1' });
});

router.post('/savevalues', (req, res) => {
  const { loan_term, loan_amount, interest } = req.body;

  console.log(req.body);

  // const newpeopleId = `SELECT MAX(id) FROM people`;

  // const peopleId = await db.query(newpeopleId);

  // console.log(peopleId.rows[0].max)
  // const id = Number(peopleId.rows[0].max) + 1

  // const INSERTpeople = `INSERT into people
  //                     values ($1, $2)`
  // const array = [id, person];

  // const insertpeople = await db.query(INSERTpeople, array);

  res.status(200).json({ hi: 'h1' });
});

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

  const insertpeople = await db.query(INSERTpeople, array);

  res.status(200).json({ hi: 'h1' });
});

module.exports = router;
