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
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

module.exports = router;
