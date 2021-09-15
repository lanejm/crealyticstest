const router = require("express").Router();
const Items = require("../db").import("../models/data");
const { Op } = require("sequelize");


//get all items
router.get("/", (req, res) => {
  Items.findAll()
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(500).json({ error: err }));
});

//get item by name
router.get("/title/:title", (req, res) => {
  Items.findAll({
    where: {
      title: { [Op.iLike]: "%" + req.params.title + "%" },
    },
  })
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(500).json({ error: "Item not found" }));
});

//get item by price
router.get('/price/:price', (req, res) => {
    Items.findAll({
        where: {
            price: {
                [Op.iLike]: '%' + req.params.price + '%'
            }
        }
    })
        .then(item => res.status(200).json(item))
        .catch(err => res.status(500).json({ error: "Price not found" }))
})

module.exports = router;