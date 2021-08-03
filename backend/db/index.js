'use strict';

const mongoose = require('mongoose');


// Using connect string in .env, otherwise default connect string gonna be used
const connectString = process.env.DB_CONNECT_STRING || "mongodb://localhost:27017/vvvchat-live-dev";


// Create this function to be called in app.js
const conn = async () => {
  try {
    await mongoose.connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log("Connect to database successfully!!!!");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { conn }