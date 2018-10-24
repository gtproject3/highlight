const express = require("express");
const Cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

require('./backend/config/passport');

require('./backend/routes/registerUser')(app);
require('./backend/routes/loginUser')(app);
require('./backend/routes/findUsers')(app);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(Cors());
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static("client/build"));

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));
}


// app.use(routes);
app.use('/user', user);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
