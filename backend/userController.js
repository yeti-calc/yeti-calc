const bcrypt = require('bcrypt');
const db = require('./modals.js');
const saltRounds = 5;

const userController = {};

userController.createUser = async (req, res, next) => {
  const { name, username, password } = req.body;

  //console.log('controller', name, username, password);
  let hashpassword;

  const newLoginName = `SELECT MAX(id) FROM people`;

  const loginnameId = await db.query(newLoginName);

  //console.log(loginnameId);

  const loginkeyname = Number(loginnameId.rows[0].max) + 1;

  let queryname = `INSERT into people
VALUES ($1, $2)`;

  let nameArray = [loginkeyname, name];

  db.query(queryname, nameArray);

  bcrypt.hash(password, saltRounds, function (err, hash) {
    //console.log(hash);
    hashpassword = hash;
  });

  const newloginId = `SELECT MAX(id) FROM login`;

  const loginId = await db.query(newloginId);

  //console.log(loginId);

  const loginkey = Number(loginId.rows[0].max) + 1;
  //console.log(loginId); // expected 3

  let array = [loginkey, username, hashpassword, loginkeyname];

  let query = `INSERT into login
VALUES ($1 ,$2, $3, $4)`;

  await db.query(query, array);

  next();
};


userController.getUser = async (req, res, next) => {
  const { username, password } = req.body;

}

module.exports = userController;

//
