import experss from "express";

const app = experss();

const port = 8000;

app.get("/",(req,res)=> {
    return res.status(200).json({message:"hello world"});
});


app.listen(port,()=> {
    console.log("App is running at", port);
})