'use strict';

const express = require("express");
const usersRoutes = require("./users.routes");

const Route = (app) => {
  app.use("/users", usersRoutes);

  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Hello" });
  });
  app.get("*", (req, res, next) => {
    res.status(404).json({ message: "404 Not found!" });
  });
};

module.exports = Route;