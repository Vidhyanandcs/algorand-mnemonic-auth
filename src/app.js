const path = require('path')
const express = require('express')
require('dotenv').config()
require('./algosdk')

// Create Express app
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))