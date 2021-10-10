import passportJwt from 'passport-jwt';

import Player from '@/menu/players/model';

// Set the strategy options for the Passport.
const options = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

// Set the verify callback for the Passport.
async function verify({ player }, done) {
  try {
    // Check if the player is already registered in the database.
    const playerRead = await Player.findOne({ 'steam._id': player.steam._id });
    return playerRead ? done(null, playerRead) : done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

// Create the strategy for the Passport.
const jwtPassportStrategy = new passportJwt.Strategy(options, verify);

export default jwtPassportStrategy;
