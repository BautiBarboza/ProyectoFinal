const express = require('express');
const MessageController = require("../controllers/message");

const api = express.Router();

api.get("/hello-world", MessageController.helloWorld);

module.exports = api;
