// tomnudd, 15-16 February 2020
const express = require("express");
const app = express();
const session = require("express-session");

const bodyParser = require("body-parser");
const path = require("path");
//require("dotenv").config();

REPLACE
REPLACE
REPLACE
REPLACE

REPLACE
REPLACE
REPLACE

REPLACE
REPLACE
REPLACE
REPLACE

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
  }
));

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_API_KEY,
    consumerSecret: TWITTER_API_SECRET,
    callbackURL: "http://127.0.0.1:8090/tcallback"
  },
  async function(token, tokenSecret, profile, cb) {
    await collection.findOne({_id: profile.id}, function(err, rsp) {
      if (err) {
        console.log(err);
      } else {
        if (rsp != null) {
          console.log(rsp);
        } else {
          collection.insertOne({_id: profile.id});
        }
      }
    })
    return cb(null, profile);
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

// the
app.get('/login',
  passport.authenticate('google', { scope: ['profile'] }));

app.get("/tlogin", passport.authenticate("twitter"));
app.get("/tcallback", passport.authenticate("twitter", { failureRedirect: "/tlogin"}),
  async function(req, res) {
    res.redirect("/");
  });

app.get('/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function(req, res) {
    res.redirect('/');
  });

// route to let us test if the user is logged in!
app.get("/isLoggedIn", async function(req, res) {
  if (req.user && req.user.id) {
    res.status(200);
    res.json({loggedIn: true});
  } else {
    res.status(200);
    res.json({loggedIn: false});
  }
});

// handle logout by destroying req.user
app.get("/logout", async function (req, res) {
	await req.logout();
	res.redirect("/");
});

// return all the data we have about someone!
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

app.post("/unlock", function (req, res) {
	if (req.user && req.user.id) {
		// ensure the joke exists
    console.log(req.body);
		if (req.body.id) {
			let id = req.body.id;
      let name = "level" + id.toString();
      collection.updateOne({_id: req.user.id}, {$set: {[name]:true}})
      res.status(200);
			res.json({message:"Success"});
		} else {
			res.status(400);
			res.json({message:"id not provided"});
		}
	} else {
		res.status(403);
		res.json({message:"Not authenticated"});
	}
});

app.get("/isUnlocked", function (req, res) {
	if (req.user && req.user.id) {
		// ensure the joke exists
		if (req.query.id && req.query.id.length > 0) {
			let id = req.query.id;
      let name = "level" + id.toString();
      collection.findOne({_id: req.user.id}, function(err, resp) {
        if (err) {
          throw err;
        } else {
          if (resp[name] && resp[name] == true) {
            res.status(200);
            res.json({unlocked:true});
          } else {
            res.status(200);
            res.json({unlocked:false});
          }
        }
      })
		} else {
			res.status(400);
			res.json({message:"Joke not provided"});
		}
	} else {
		res.status(403);
		res.json({message:"Not authenticated"});
	}
});

// redirect all other requests
app.get("*", async function(req, res) {
  res.redirect("/");
})

module.exports = app;
