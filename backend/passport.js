const linkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");

const linkedin_CLIENT_ID ="77unej4lu1raxz";
const linkedin_CLIENT_SECRET = "XZRuQH8Po3CxO9Ox";

passport.use(
  new linkedinStrategy(
    {
      clientID: linkedin_CLIENT_ID,
      clientSecret: linkedin_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/linkedin/callback",
      scope:['r_emailaddress','r_liteprofile'],
      

    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});