const knex = require('knex')({
    client: 'pg',
    connection: {
        user: "postgres",
        host: "db",
        database: "DB_RWR_ONE",
        password: "123",
      //port: 5432,
    }
})

module.exports = knex