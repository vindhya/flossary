const { SECRET } = require('../utils/constants');
// const bcrypt = require('bcrypt');
const { model: User } = require('../routes/users/user.model');

// const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  }),
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (user) {
        console.log('email has already been used');
        return done(null, false, { message: 'email has already been used' });
      } else {
        const newUser = new User({ email, password });
        newUser.save().then(() => {
          console.log('user created');
          return done(null, newUser);
        });
      }
    } catch (e) {
      done(e);
    }
  }
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false
    },
    async (email, password, done) => {
      try {
        const foundUser = await User.findOne({ email });
        if (foundUser === null) {
          return done(null, false, { message: 'email not found' });
        } else {
          const match = await foundUser.comparePassword(password);
          if (match) {
            console.log('user found and authenticated');
            return done(null, foundUser);
          } else {
            console.log('password does not match');
            return done(null, false, { message: 'password does not match' });
          }
        }
      } catch (e) {
        done(e);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: SECRET
};

passport.use(
  'jwt',
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const foundUser = await User.findOne({ email: jwt_payload.id });
      if (foundUser) {
        console.log('user found in db in passport');
        done(null, foundUser);
      } else {
        console.log('user not found in db');
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  })
);
