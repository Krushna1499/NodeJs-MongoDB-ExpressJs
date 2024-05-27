// var data = require("./script.js");  //by using this we import all data from script file

// console.log(data);
const express = require('express');
const app = express();

app.get('/',function(req,res)
{
    res.send("hello haye hoii");
});
app.get('/profile',function(req,res)
{
    res.send("hello profile");
});
app.listen(3000);