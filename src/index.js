const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const app = express();
const port = 3000;

const db = require("./config/db");

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware xu ly du lieu tu form submit len
app.use(express.json()); // Gui du lieu tu code js

app.use(methodOverride("_method")); //có thêm sự lựa chọn cho form submit

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
