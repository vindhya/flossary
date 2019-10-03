const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const { SECRET } = require('../utils/constants');
const { model: User } = require('../routes/users/user.model');

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (username, password, done) => {
      User.findOne({ email: username }, async (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'incorrect username' });
        }
        if (!(await user.comparePassword(password))) {
          return done(null, false, { message: 'incorrect password' });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

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
