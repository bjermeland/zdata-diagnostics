// Import dependencies
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

// Create a new express application called 'app'
const app = express()

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`)
  next()
})

// Set up the express middleware
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// Set up the CORS middleware
app.use(cors())

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

// Set our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`))
