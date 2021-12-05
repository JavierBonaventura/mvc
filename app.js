const express = require('express')
const { measureMemory } = require('vm')
const app = express()
const port = 3000
const productsRoutes = require("./routes/productsRoutes")




app.use ("/productos", productsRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


