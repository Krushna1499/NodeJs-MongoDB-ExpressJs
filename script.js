// var a = 12;

// console.log(a);

// module.exports= a; //we can export the existing data to another file
var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});