const bcrypt = require('bcrypt');
const db = require('./modals.js');
const saltRounds = 5;


const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  let { id } = req.body;
  console.log('controller', username, password);
  let hashpassword;

    if (!id) {
        id = 1;
    }

  bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log(hash);
    hashpassword = hash
});

const newloginId = `SELECT MAX(id) FROM login`;

const loginId = await db.query(newloginId);

console.log(loginId)

const loginkey = Number(loginId.rows[0].max) + 1;
console.log(loginId) // expected 3

let array = [loginkey, username, hashpassword, id]

let query = `INSERT into login
VALUES ($1 ,$2, $3, $4)`

await db.query(query, array);

  next();
};

// userController.createUser = async () => {

// }

module.exports = userController;




//