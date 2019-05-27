const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("sequelize");
const passport = require("passport");
const db = require("./models");
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const bcrypt = require('bcrypt')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(passport.initialize());
app.use(passport.session());
app.get('/all_homes', (req, res) => {
  db.home.findAll()
    .then(homes => {
      res.json(homes);
    });
});
app.get('/some_homes/', (req, res) => {
  let sql_s = "select * from homes where price between ? and ? " +
   "and lot_size >= ? " +
   "and beds >= ? " +
   "and baths >= ? " +
   "and square_feet >= ? " ; 
  db.sequelize.query(sql_s,
    { replacements: [req.query.min, req.query.max, req.query.lot_size, req.query.beds,
      req.query.baths, req.query.square_feet ], type: sequelize.QueryTypes.SELECT }
  )
    .then(homes => {
      res.json(homes);
    });
});


app.get('/home/:id', (req, res) => {

  db.home.findOne({ where: { id: req.params.id } })
    .then(homes => {
      res.json(homes);
    });
});

app.get('/agent/:id', (req, res) => {
  db.agent.findOne({ where: { id: req.params.id } })
    .then(agent => {
      res.json(agent);
    });
});

app.post('/signup', (req, res) => {
  let hashed_pw  = bcrypt.hashSync(req.body.sign_up_password, 4);
  db.user.create({
    username: req.body.sign_up_name,
    email: req.body.sign_up_email,
    password: hashed_pw, //req.body.sign_up_password,
  }) 
    .then(newUser => {
      console.log(`New user with id ${newUser.id} has been created.`);
    }); 
});

app.post('/post_lead', (req, res) => {


  db.lead.create({
    agent_id: req.body.agent_id,
    property_id: req.body.property_id,
    address: req.body.address,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  })
    .then(newLead => {
      console.log(`New Lead with id ${newLead} has been created.`);
    });
/* commented out - reqquires linux w/ shell script installed!
    spawn('sh', ['maillead.sh',
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.address,
    req.body.property_id,
    'tom'
  ], {
      cwd: '/usr/local/bin'
    }); */
    
});





app.get('/signin', (req, res) => {


  db.user.findOne({ where: { email: req.query.email } })
   .then(user => { 
      if(bcrypt.compareSync(req.query.password, user.password)) {
        res.json(user);
     } else {
        console.log("fail");
        res.json(null);
      
     }
     
    });





});



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
