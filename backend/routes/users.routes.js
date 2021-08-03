'use strict';

const express = require("express");
const router = express.Router();

// [GET] /users/
router.get("/", (req, res, next) => {
  res.status(200).json({messase: "This route is /users/..."});
});


module.exports = Router;