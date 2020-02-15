// tomnudd, 15-16 February 2020
const express = require("express");
const app = express();
const session = require("express-session");

const bodyParser = require("body-parser");
const path = require("path");
//require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "REDACTED";
const GOOGLE_CLIENT_SECRET = "REDACTED";

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const CONNECTION_URL = "mongodb+srv://REDACTED@cluster0-gieip.gcp.mongodb.net/test?retryWrites=true&w=majority";
const DB_NAME = "CovHack";

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
  if (err) {
    throw err;
  };
  database = client.db(DB_NAME);
  collection = database.collection("User");
  console.log("Connected to " + DB_NAME + "!");
})

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:8090/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    await collection.findOne({_id: profile.id}, function(err, rsp) {
      if (err) {
        console.log(err);
      } else {
        if (rsp != null) {
          console.log(rsp);
        } else {
          collection.insertOne({_id: profile.id, first_name: profile.name.givenName.replace(/\s+$/g, "") || null});
        }
      }
    })
    return cb(null, profile);
    /*
User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });*/


  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(session({
  name: "CovHack",
  secret: "Ks8aK*2bj&dsAjaTxc9!&xn",
  resave: false,
  saveUninitialized: true
}))

app.use(express.static("public"))

app.use(express.static(__dirname + '/public', {extensions: ['html']}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
app.get("/", (req, res) => {
  res.render("index.html");
});
*/


app.get('/login',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function(req, res) {
    res.redirect('/');
  });

app.get("/isLoggedIn", async function(req, res) {
  if (req.user && req.user.id) {
    res.status(200);
    res.json({loggedIn: true});
  } else {
    res.status(200);
    res.json({loggedIn: false});
  }
});

app.get("/logout", async function (req, res) {
	await req.logout();
	res.redirect("/");
});

app.get("/user/data", async function(req, res) {
  if (req.user && req.user.id) {
    collection.findOne({_id: req.user.id}, function(err, resp) {
      if (err) {
        throw err;
      } else {
        res.status(200);
        res.send(resp);
      }
    })
  }
})

module.exports = app;
