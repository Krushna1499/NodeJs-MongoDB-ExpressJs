"# NodeJs-MongoDB-ExpressJs" 
"# NodeJs-MongoDB-ExpressJs" 

:username hr ek colon wali chiz ko params kehte hai

route parameter
-to make any route dyanmic you can use : at the place where you want to make it dyanamic and to access there value use req.params
/profile/:username
/author/books/issued/krishna

template engine
=ejs  setup krne ke liye

1) ejs install npm i ejs

2)configure ejs
app.set("view engine","ejs");
3)ek views foler banao

4)usmein ejs files banao

5) send ki jagah render karo ==> render krte waqt make sure aap views folder ke andar wali hi koi file ka naam likhein aur render fnc ejs mention na karein

template engine ==>  ye ek style of markup

ejs is very very similar to html

--static files
1) create a folder called public
2) create three folders inside it ,images,stylesheet,javascripts
3)configure the express static in script.js file
4) understand the path  
http methods
error handling
