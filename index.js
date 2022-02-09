const express = require('express');
require("dotenv").config()

const setDatabase = require('./config/database.js');
const app = express();
const PORT = 8080;
setDatabase();

app.use(express.json());
app.use("/api", require("./routes/newsRoute"))
app.use("/post", require("./routes/newsRoute"))


app.listen(PORT,() =>{
    console.log('server connect');
})    