const express = require("express");
var ejsLayouts = require("express-ejs-layouts");
const app = express();

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("hello");
});
app.get("/biography", (req, res) => {
  res.render("biography", {
    menu: [
      '<li><a href="#">Παιδικά Χρόνια</a></li> <li><a href="#">bio</a></li> <li><a href="#">bio</a></li>',
    ],
  });
});

app.listen(3000);
