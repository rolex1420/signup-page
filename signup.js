const express=require("express");
const app=express();
const fs=require("fs");

app.use(express.urlencoded({extended : false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

app.post("/signup",(req,res)=>{
    let input=req.body;
    fs.readFile(__dirname+"/signup.txt","utf-8",(err,data)=>{
        data=JSON.parse(data);
            data.push(input);
            fs.writeFile(__dirname+"/signup.txt",JSON.stringify(data),(err)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send("signup sucessFully");
                }
    })
    })
    
})
app.get("*",(req,res)=>{
    res.send("Invalid request method - 1");
})
app.listen(4004,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is strated....");
})