import jwt from 'jsonwebtoken';

export const logInPlayer = (request, response) => {
  jwt.sign({ player: request.player }, process.env.JWT_SECRET, (error, token) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.cookie('player_session', token);
    response.redirect('/');
    return response.status(200).json(request.player);
  });
};

export const logOutPlayer = async (request, response) => {
  try {
    const player = request.player;
    if (player) {
      player.isLoggedIn = false;
      await player.save();
      return response.status(200).end();
    } else {
      return response.status(404).send('Error: player not found in the database.');
    }
  } catch (error) {
    return response.status(500).send(error);
  }
};
