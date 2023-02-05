const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const router = require("./routes/auth");
const app = express();
const port = process.env.port || 5000;
require('dotenv').config();
app.use(
  cookieSession({ name: "session", keys: ["zain "], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended :false}))
app.use("/", router);

app.listen(port, (error) => {
  if(error )console.log(error)
  else console.log(`Server listen at ${port}`)
});