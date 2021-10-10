import Game from '@/menu/games/model';
import { handleResponseSuccess, HandlerResponseError } from '@/utils/handlers';

export async function getGames(req, res, next) {
  try {
    const games = await Game.find({});
    handleResponseSuccess(res, games, __filename);
  } catch (err) {
    next(new HandlerResponseError(500, err, __filename));
  }
}
