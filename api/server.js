const express = require("express");

const accountsRouter = require('../routers/accountsRouter');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);
server.get('/', (req, res) => {
  res.send('<h2>THE SERVER IS UP</h2>')
})

module.exports = server;
