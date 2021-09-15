const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crealytics',
    password: process.env.PASS,
    port: 5432
})

const getItems = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM productData ORDER BY title ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {
      getItems
  }
