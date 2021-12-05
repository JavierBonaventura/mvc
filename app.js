const express = require('express')
const { measureMemory } = require('vm')
const app = express()
const port = 3000

const product = [
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


app.get('/', (req, res) => {
  res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


