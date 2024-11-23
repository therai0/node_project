import experss from "express";

const app = experss();



app.get("/",(req,res)=> {
    return res.status(200).json({message:"hello world"});
});


app.listen(8000,()=> {
    console.log("App is running at", port);
})