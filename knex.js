var conString = 'postgres://postgres:grizvok5@localhost:5432/scifit';
var knex = require('knex')({
  client: 'pg',
  connection: conString
});

module.exports = knex;