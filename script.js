// var a = 12;

// console.log(a);

// module.exports= a; //we can export the existing data to another file
// var figlet = require("figlet");

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

app.use(express.static("./public"))

app.get("/",function(req,res)
{
    res.render("index");
});
app.get("/error",function(req,res,next)
{
    throw Error('Something went wrong');
});
app.get("/contact",function(req,res)
{
    res.render("contact",{name:"Rina"}); // name:rina is used to change run time values
});
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });
app.listen(3000);