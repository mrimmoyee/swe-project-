const express = require('express')//import korechi
const app = express()//now calling the express functions
const port = 3000

app.get('/', (req, res) => {//get info from anywhere
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})