const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const api = require("./routes");
const connectDB = require("./config/db");
const path = require("path");

require("dotenv").config();

connectDB();

const SERVER_ADDRESS = process.env.SERVER_ADDRESS;

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", api);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 4000;

const server = require("http").createServer(app);
server.listen(port, () => {
  console.log("server is listening on port 4000");
});

module.exports = server;
