const router = require("express").Router();

// GET /places
app.get("/", (req, res) => {
  let places = [];
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

module.exports = router;
