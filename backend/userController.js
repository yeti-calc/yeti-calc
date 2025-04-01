const bcrypt = require('bcrypt');
const db = require('./modals.js');
const saltRounds = 5;

const userController = {};

userController.createUser = async (req, res, next) => {
  const { name, username, password } = req.body; // destructures client's login info when inputted


  /* 

  Check to make sure username is unique --STRETCH GOAL
  
  */


  //console.log('controller', name, username, password);
  let hashpassword;

  const newLoginName = `SELECT MAX(id) FROM people`; // selects highest id # in db

  const loginnameId = await db.query(newLoginName);

  //console.log(loginnameId);

  const loginkeyname = Number(loginnameId.rows[0].max) + 1; // selecting latest id and adding a 1 to make it a new id

  let queryname = `INSERT into people 
VALUES ($1, $2)`; // adds into people table

  let nameArray = [loginkeyname, name]; // userid, and their name -- params in the modals

  db.query(queryname, nameArray);

  bcrypt.hash(password, saltRounds, function (err, hash) {
    //console.log(hash);
    hashpassword = hash;
  });

  const newloginId = `SELECT MAX(id) FROM login`;

  const loginId = await db.query(newloginId); // same thing, but for the login table (whereas before was for people's table)

  //console.log(loginId);

  const loginkey = Number(loginId.rows[0].max) + 1;
  //console.log(loginId); // expected 3

  let array = [loginkey, username, hashpassword, loginkeyname];

  let query = `INSERT into login
VALUES ($1 ,$2, $3, $4)`;

  await db.query(query, array);

  next();
};

//! Verifies the user's pw is valid //
userController.getUser = async (req, res, next) => {
  const { username, password } = req.body;

  console.log( username, password);

  const findUserArray = [username]; // deconstructed UN, that is dynamic UN entry from client

  const findUserText = `SELECT password from login
                        WHERE username = $1` // $1 checks first elem in array, [username] array only has what client enters

  const results = await db.query(findUserText, findUserArray)

  console.log(results.rows)

  /*
    if the username isn't found return response 404
    cookie settime
  */

// disappearing text when pw entry is successful (or not)
  bcrypt.compare(password, results.rows[0].password, function(err, result) { // param2 is hashed pw inside returning array
    console.log(result)

    if (result) {
     return res.status(200).json({ result: true });
    } else {
      return res.status(200).json({ result: false });
    }
    
});

}

module.exports = userController;

//
