const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB connected successfully");
});

// Routes
const portfolioRouter = require('./routes/portfolio');
const profileRouter = require('./routes/profile');

app.use('/portfolio', portfolioRouter);
app.use('/profile', profileRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});