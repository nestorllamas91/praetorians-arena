import Player from '@/menu/players/model';
import { handleResponseSuccess, HandlerResponseError } from '@/utils/handlers';

export async function getPlayers(req, res, next) {
  try {
    const players = await Player.find({});
    handleResponseSuccess(res, players, __filename);
  } catch (err) {
    next(new HandlerResponseError(500, err, __filename));
  }
}
