const express = require("express");

const app = express();

const dbconfig = require("./db")

const port = process.env.Port || 5001;

app.listen(port, () => console.log(`Node server started using nodemon`));