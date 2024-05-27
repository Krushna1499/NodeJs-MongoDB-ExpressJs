// var a = 12;

// console.log(a);

// module.exports= a; //we can export the existing data to another file
var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const express =require('express');
const app =express();

app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("index");
});
app.get("/contact",function(req,res)
{
    res.render("contact");
});
app.listen(3000);