const { Pool } = require('pg');

// .env
const PG_URI =
  'postgresql://postgres.cdibcxjbcjmfhtolyxxq:humfa1-fuZtyr-rezkig@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString: PG_URI,
});
console.log('connecting sql...');

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
