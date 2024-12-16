const express = require("express");

const app = express();

app.get("/home/key:key",(req,res)=> {
    const key = req.params.key;
    if(key == 123) 
    {
        return res.status(200).json({
       
           message:"Hello world",
           username:"DBsir",
           firstname:"Bhaskar",
           lastname:"Rai",
           education:"Pursuing bachelor of Information Technology at Balmiki lincoln college",
           skills:"HTML,CSS,JS,React js and node js",
           email:"imraibhaskar@gmail.com",
           contact:"+977 9815048958"
        });
    }
    else {
        res.status(401).json({message:"unauthorize access"});
    }
})

app.listen(8080,()=> {
    console.log("App is running at port 8080");
})