require('dotenv').config();
const Express = require('express');
const app = Express();
const database = require('./db')

database.sync()
app.use(Express.json());
// app.use(require('./middleware/headers'));

const itemController = require('./controllers/itemcontroller')
app.use('/items', itemController)

const itemModel = require('./itemModel')
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  itemModel.getItems()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.listen(3000, () => {
  console.log(`Crealytics is running on port 3000.`);
});