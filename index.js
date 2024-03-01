require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({"text": "hello there"}));
console.log(process.env.USER);
console.log(process.env.VAR_NUM);
app.listen(3002, () => console.log("Server ready on port 3002."));
