const express = require("express");

const app = express();

const post = 8000;

app.get("/",(req,res) => {
    return res.send("hello there");
});

app.listen(port,() => {
    console.log("server is up and running...");
});