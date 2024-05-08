const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send("Server is operational")
})

app.listen(port, () => {
  console.log(`Serving running on Port ${port}`)
})
