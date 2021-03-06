const express = require("express");

const PORT = process.env.PORT || 3030;

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set use of handlebars
const exHbs = require("express-handlebars");

app.engine("handlebars", exHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);



app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
