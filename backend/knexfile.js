const { sqlServerConect } = require("./.env")

module.exports = {

    client: 'mssql',
    connection: sqlServerConect,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
  };