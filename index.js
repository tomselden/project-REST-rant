require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("./places", require("./controllers/places"));

let places = [
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "http://placekitten.com/250/250",
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "http://placekitten.com/250/250",
  },
];

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
