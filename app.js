
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const TotalCases = 0;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get("/totalCases", (req, res, next) => {res.json([TotalCases]);})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
