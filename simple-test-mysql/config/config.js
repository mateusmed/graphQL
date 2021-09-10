require('dotenv').config()

const environment = {
  development: {
    user: "coti",
    password: "coti",
    database: "teste",
    url: "127.0.0.1:3306",
    dialect: "mysql"
  }
}

module.exports = environment
