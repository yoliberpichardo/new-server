const express = require('express');
require("dotenv").config()

const setDatabase = require('./src/config/database');
const app = express();
const PORT = 8080;
setDatabase();

app.use(express.json());
app.use("/api", require("./src/routes/newsRoute"))
app.use("/post", require("./src/routes/newsRoute"))
app.use("/put", require("./src/routes/newsRoute"))


app.listen(PORT,() =>{
    console.log('server connect');
})    