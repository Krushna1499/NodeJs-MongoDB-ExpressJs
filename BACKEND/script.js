const express = require('express')

const app =express();
app.use(function(req,res,next)
{
    console.log("dynamic ");
    next();
});
app.get('/',function(requ,res)
{
    res.send("Hello World!!")
});
app.get('/profile',function(req,res){
    res.send("hello from profile")
});
app.get('/profile/:username',function(req,res)
{
    res.send(`hello from ${req.params.username}`)
});

app.listen(3000);
