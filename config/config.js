require('dotenv').config()
const env = process.env.NODE_ENV || 'development'

const configs = [
  {
    type: 'development',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  },
  {
    type: 'test',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      server: process.env.DB_HOST,
      authentication: {
        type: process.env.DB_TYPE || 'ntlm',
        options: {
          domain: process.env.DB_DOMAIN,
          userName: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          requestTimeout: 30000
        }
      },
      options: {
        instanceName: '',
        database: process.env.DB_NAME
      }
    },
    logging: false
  },
  {
    type: 'production',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    server: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      server: process.env.DB_HOST,
      authentication: {
        type: process.env.DB_TYPE || 'ntlm',
        options: {
          domain: process.env.DB_DOMAIN,
          userName: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          requestTimeout: 30000
        }
      },
      options: {
        instanceName: '',
        database: process.env.DB_NAME
      }
    }
  }
]

const currentConfig = configs.find((config) => config.type === env)
const dbConfig = { ...currentConfig }
delete dbConfig.type

module.exports = dbConfig
