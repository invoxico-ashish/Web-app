// console.log("hello api's");


const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const urlPath = require("./Router")

const port = 7000;

app.use(bodyparser.json());
app.use(cors());

app.use("/", urlPath);
app.use ("/api/user", urlPath);
app.use("/api/country",urlPath);
app.use("/api/state/:id",urlPath);
app.use("/api/adduser",urlPath);
app.use("/api/registeruserdata", urlPath);
app.listen(port,()=>console.log("server runnig on port 7000"));