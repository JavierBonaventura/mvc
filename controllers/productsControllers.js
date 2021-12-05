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

exports.getAtll= (req, res) => {
    res.send(products)
  }

  exports.getById = (req, res) => {
    const id = req.params.id
    
    const product = products.find(product => product.id == id)
  
    if (!product)
    {
      console.log("no se encuentra el producto", id)
      res.status(404).send({message:"no se encuentra el prodcuto"}) 
    }
    res.send(product)
  }