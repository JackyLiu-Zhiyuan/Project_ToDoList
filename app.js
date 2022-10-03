const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

var items = ["Buy Food","Cook Food","Eat Food"];

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

})

app.post("/",function(req,res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function(req, res) {
  console.log("server is running.")
})
