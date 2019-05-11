const express = require("express");
const path = require("path");
axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
//app.get("*", (req, res) => {
//res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});
app.get('/all_homes', (req, res) => {
  db.home.findAll()
    .then(homes => {
      console.log("zzzzzquery" + homes);
      res.json(homes);
    });
});

app.get('/home/:id', (req, res) => {
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzirkserv got" + req.params.id);
  db.home.findOne({ where: {id : req.params.id } } )
    .then(homes => {
      console.log("zzzzzquery" + homes);
      res.json(homes);
    });
});




/*
app.get('/home/:id', function (req, res) {
  console.log("zirkserv got" + req.params.id);
  db.home.findOne({ where: { id: res.params.id } }).then(home => {
      res.json(home);
  })
}); */




var syncOptions = { force: true };

db.sequelize.sync({ syncOptions }).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

/*
db.home.create({
  zipcode: 90210
})
.then(newUser => {
  console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
}) ;  */

/* del

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
}); */
