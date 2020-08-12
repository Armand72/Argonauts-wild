const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const api = require("./routes");
const connectDB = require("./config/db");

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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = require("http").createServer(app);
server.listen(SERVER_ADDRESS, () => {
  console.log("server is listening on port 4000");
});

module.exports = server;
