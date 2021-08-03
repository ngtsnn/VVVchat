'use strict';

// dependencies
const express = require('express');
const { urlencoded, json } = express;
const app = express();
const path = require("path");
const cors = require("cors");
// env
require('dotenv').config({ path: path.join(__dirname, "env/.env") });
// custom files
const middlewares = require("./utils/middlewares");

// third-party middleware
const thirdPartyMiddlewares = [cors(), urlencoded({
  limit: '50mb',
  extended: true,
}), json({ limit: "50mb" })];
app.use(thirdPartyMiddlewares);


// custom middleware
// app.use(middlewares); //comment this line unless you have any middlewares

app.get('/', (req, res) => res.send('Hello World!'));


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`VVVchat is listening on port ${port}!\nVVVchat is now running on http:127.0.0.1:${port}`));