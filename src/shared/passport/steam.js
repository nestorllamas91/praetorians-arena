import passportSteam from 'passport-steam';

import Player from '@/menu/players/model';

// Set the strategy options for the Passport.
const options = {
  returnURL: `${process.env.HOST}/api/players/auth/login/steam/return`,
  realm: process.env.HOST,
  apiKey: process.env.STEAM_API_KEY
};

// Set the validate callback for the Passport.
const validate = async (identifier, profile, done) => {
  try {
    // Get the data from the Steam profile of the player.
    const { steamid, personaname, realname, profileurl, loccountrycode, avatar, avatarmedium, avatarfull } =
      profile._json;
    // Check if the player is already registered in the database.
    let playerRead = await Player.findOne({ 'steam._id': steamid });
    if (!playerRead) {
      // If the player is not registered, create a new player from the data read of the Steam profile of the player.
      Player.countDocuments({}, async (error, numPlayers) => {
        playerRead = new Player({
          _id: numPlayers + 1,
          steam: {
            id: steamid,
            nickname: personaname,
            name: realname,
            profileUrl: profileurl,
            country: loccountrycode,
            avatarUrl: {
              smallSize: avatar,
              mediumSize: avatarmedium,
              bigSize: avatarfull
            }
          },
          isLoggedIn: true
        });
      });
    } else {
      // If the player is registered, just state that the player does login.
      playerRead.isLoggedIn = true;
    }
    // Create (register) or update (login) the player in the database.
    await playerRead.save();
    return done(null, playerRead);
  } catch (error) {
    return done(error, false);
  }
};

// Create the strategy for the Passport.
const steamPassportStrategy = new passportSteam.Strategy(options, validate);

export default steamPassportStrategy;
