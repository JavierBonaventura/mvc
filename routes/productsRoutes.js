const express = require ("express")
const router = express.Router()
const productController = require("../controllers/productsControllers")

const products = [
    {
        id:1,
        nombre: "caja",
        cantidad:200,
    },
    {
        id:2,
        nombre: "mesa",
        cantidad: 300,
    }
]
router.get('/', productController.getAtll )
  
  router.get('/:id', productController.getById)

  module.exports = router