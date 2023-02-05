const router = require("express").Router();
const passport = require("passport");

// const CLIENT_URL = "http://localhost:3000/";

router.get("/auth/linkedin/callback",
passport.authenticate('linkedin',{
    scope:['r_emailaddress', 'r_liteprofile'],
    successRedirect:process.env.CLIENT_URL
})
)
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }else{
    res.status(403).json({error:true,message:"Not Authorized"})
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get('linkedin/callback',passport.authenticate('linkedin'   ,{
    successRedirect:process.env.CLIENT_URL,
    failureRedirect:'/login/failure'
}))

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

// router.get("/linkedin", passport.authenticate("linkedin", { scope: ["profile"] }));

// router.get(
//   "/linkedin/callback",
//   passport.authenticate("linkedin", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router;