const express = require("express");
let app = express();

let cors = require('cors');
app.use(cors())

const { chats } = require("./Data/Data");

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((chat) => (chat._id = req.params.id));
  res.send(singleChat);
});

const PORT = process.env.port || 1000;
app.listen(PORT, console.log(`listening on ${PORT}`));
