const express = require('express');
const db = require('./modals.js')

const router = express.Router();

router.get('/', async (req, res) => {
  const text = `select * from people`;

  const people = await db.query(text);
  console.log(people.rows);

  res.status(200).json({ hi: 'h1' });
});

module.exports = router;
