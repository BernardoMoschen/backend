require('dotenv').config()
const Sequelize = require('sequelize')
const dbConfig = require('../../../config')

Sequelize.DATE.prototype._stringify = function _stringify (date: any, options: any) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss')
}

class Database {
public sequelizeInstance!: any

constructor () {
  this.init()
}

init (): void {
  this.sequelizeInstance = new Sequelize(dbConfig)
}
}

const database: Database = new Database()

export default database
