const { Pool } = require('pg');

// .env
const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});
console.log('connecting sql...');

module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
