const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "Rocklin K S":"Welcome to My Testing Nodejs"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
