const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const api = require("./routes/index")
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).json({message: "Express root route working!"})
})

app.listen(PORT, () => console.log(`You are listening to the port ${PORT}`))