const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const userRouter = require("./routes/userRouter");

app.use(cors())
app.set("port", process.env.PORT);
app.use(express.json());
app.use("/api", userRouter);
app.use(cors());

module.exports = app;