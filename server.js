const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("sequelize");
const passport = require("passport");
const db = require("./models");
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const bcrypt = require('bcrypt')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(passport.initialize());
app.use(passport.session());
// Send every other request to the React app
// Define any API routes before this runs
//app.get("*", (req, res) => {
//res.sendFile(path.join(__dirname, "./client/build/index.html"))[]
//});
app.get('/all_homes', (req, res) => {
  db.home.findAll()
    .then(homes => {
      console.log("zzzzzquery" + homes);
      res.json(homes);
    });
});
/*
Post.findAll({
  where: {
    authorId: 12,
    status: 'active'
  }
}); */
app.get('/some_homes/', (req, res) => {
  console.log("/some_homes got qqqparmparm=======" + JSON.stringify(req.query));

  console.log("voop" + req.query.min + "   " + req.query.max);
  let sql_s = "select * from homes where price between ? and ? " +
   "and lot_size >= ? " +
   "and beds >= ? " +
   "and baths >= ? " +
   "and square_feet >= ? " ; 
   //let sql_s = "select * from homes";
   console.log(sql_s);
  db.sequelize.query(sql_s,
    { replacements: [req.query.min, req.query.max, req.query.lot_size, req.query.beds,
      req.query.baths, req.query.square_feet ], type: sequelize.QueryTypes.SELECT }
  )
    .then(homes => {
      console.log("zzzzzquery" + homes);
      res.json(homes);
    });
});


app.get('/home/:id', (req, res) => {

  db.home.findOne({ where: { id: req.params.id } })
    .then(homes => {
      console.log("zzzzzquery" + homes);
      res.json(homes);
    });
});

app.get('/agent/:id', (req, res) => {
  db.agent.findOne({ where: { id: req.params.id } })
    .then(agent => {
      console.log("zzzzzquery agent" + agent);
      res.json(agent);
    });
});

app.post('/signup', (req, res) => {
  console.log("sighnup" + JSON.stringify(req.body));
  db.user.create({
    username: req.body.sign_up_name,
    email: req.body.sign_up_email,
    password: req.body.sign_up_password,
  })
    .then(newUser => {
      console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
    });
});

app.post('/post_lead', (req, res) => {
  console.log("agent:" + req.body.agent);
  console.log("property:" + req.body.property);
  console.log("address:" + req.body.address);
  console.log("phone:" + req.body.phone);
  console.log("postlead" + JSON.stringify(req.body));
  console.log("");


  //fix at class
  db.lead.create({
    //agent_id: req.body.agent_id,
    //property_id: req.body.property_id,
    address: req.body.address,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  })
    .then(newLead => {
      console.log(`New Lead with id ${newLead} has been created.`);
    });
    /*
  spawn('sh', ['maillead.sh',
    'firstname lastname',
    '555-1212',
    'email@thisplace.com',
    '32768 Overflow lane',
    'propid',
    'tom'
  ], {
      cwd: '/usr/local/bin'
    });*/
    
});





app.get('/signin', (req, res) => {
  db.user.findOne({ where: { email: req.query.email, password: req.query.password } })
    .then(user => {
      console.log("11zzzzzquery" + JSON.stringify(user));
      res.json(user);
    });





});

/*
app.get('/home/:id', function (req, res) {
  console.log("zirkserv got" + req.params.id);
  db.home.findOne({ where: { id: res.params.id } }).then(home => {
      res.json(home);
  })
}); */

require('./config/passport.js')(passport, db.user);


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
