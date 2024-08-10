const http = require('http');
const express=require("express");
const app=express();
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))
// Define the URL of the API


app.get("/",async(req,res)=>{
  const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=pimpri&appid=Enter your api key';
  let data= await fetch(apiUrl);
  let parsdata= await data.json();
  res.render("home",{parsdata});
})

app.post("/",async(req,res)=>{
    let {location}=req.body;
    let api=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=Enter your api key`
  let data= await fetch(api);
  let parsdata= await data.json();
  res.render("home",{parsdata});
  // console.log(parsdata)
})



app.listen(3001,()=>{
  console.log("your server is running in port number 3001")
})
