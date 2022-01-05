require("dotenv").config();
const express = require("express");
const app = express();
const router = require('express').Router()
const places = require('./models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("./places", require("./controllers/places"));
app.use(express.urlencoded({ extended: true }))

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
