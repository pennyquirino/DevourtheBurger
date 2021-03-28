const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on: ${PORT}`);
  }
});
