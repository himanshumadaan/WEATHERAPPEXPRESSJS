const express = require("express");
const { templates } = require("handlebars");
const app = express();
const port = 3100;
const path = require('path');
const hbs= require('hbs');



// public  static path
 const static_path=(path.join(__dirname, "../PUBLIC"));
 const template_path=(path.join(__dirname, "../templates/views"));
 const partials_path=(path.join(__dirname, "../templates/partials"));


 //  templates engine start ===>

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
//  templates engine ends ===>

app.use(express.static(static_path));


// routing start

app.get("/", (req, res) => {
    res.render("index.hbs",);
});

app.get("/about", (req, res) => {
    res.render("about.hbs",);
});


app.get("/weather", (req, res) => {
    res.render('weather.hbs');
});


app.get("*", (req, res) => {
    res.render("404error.hbs",{
        errmessage:"Opps! Page Not Found"

    })
       
});



app.listen(port, () => {
    console.log(`listening to the port at ${port}`)

});

