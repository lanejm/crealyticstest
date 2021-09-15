const Sequelize = require('sequelize')

const database = new Sequelize('crealytics', 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

database
.authenticate()
.then(() => {
    console.log("connection has been established")
})
.catch(err => {
    console.error('unable to connect to database', err)
})

module.exports = database;