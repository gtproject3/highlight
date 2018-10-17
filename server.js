const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//for Passport
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./backend/config/keys");
const routes = require("./backend/routes");
require("./backend/services/passport.js")(passport, db.User);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//to use cookies for session
app.use(
  cookieSession({
    //keep cookie session for 15 days
    maxAge: 15*24*60*1000,
    keys: [keys.cookieKey]
  })
);
//tell passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
