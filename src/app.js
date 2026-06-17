const express = require('express');
const app = express();
require('dotenv').config();

// Importing API routes
const authRouter = require('./routes/auth.route');



app.use(express.json());



//  API  Routes
app.use('/', (req, res) => {
  res.send('Welcome to the Banking App API');
});

app.use('/api/auth', authRouter)




module.exports = app;