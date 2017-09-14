const pg = require('pg')

const dbName = 'nomad'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

const pgp = require('pg-promise')()
const db = pgp(connectionString)

module.exports = {
  connectionString,
  db,
}
