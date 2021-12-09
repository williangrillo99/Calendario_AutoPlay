const sequelize = require('sequelize')
const config = require('config')

const connection = new sequelize(
    config.get("mysql.database"),
    config.get("mysql.usuario"),
    config.get("mysql.senha"),
    {
        host: config.get("mysql.host"),
        dialect: "mysql"
    }
)

module.exports = connection;