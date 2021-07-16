const passport = require("passport");
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require("../models/users");
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY,
  };

  const strategy = new JwtStrategy(opts, (payload, next) => {
    //getting user id from db
    //console.log(payload);
   // mongo find by id code will go here 
    let user_data = await User.findById(id)

  });
  
  passport.use(strategy);
  
  module.exports = passport;
