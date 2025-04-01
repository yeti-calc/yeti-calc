const { Pool } = require('pg'); // use destructuring to get the Pool constructor from Postgres package

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});
console.log('connecting sql...');

module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query: ', text); // shows query text
    return pool.query(text, params, callback); // query into db, shows input text. params is array matched with $1 or $2 etc, callback isn't used here but is for logic after query call
  },
};
