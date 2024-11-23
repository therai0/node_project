const express = require("express");

const app = express();

app.get("/",(req,res)=> {
 return res.status(200).json({"message":"Hello world"});
})

app.listen(8080,()=> {
    console.log("App is running at port 8080");
})