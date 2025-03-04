const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine","ejs");


app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("views",path.join(__dirname,"/views"));

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});
app.get ("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/project",(req,res)=>{
    res.render("project.ejs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
});

app.listen(port,(req,res)=>{
    console.log(`server is starting ${port}`);
})