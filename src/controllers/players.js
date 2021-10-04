import { handleResponseSuccess } from '@/utils/handlers';
import { HandlerResponseError } from '@/utils/handlers';

import Player from '@/models/user';

export async function getPlayers(req, res, next) {
  try {
    const players = await Player.find({});
    handleResponseSuccess(res, players, __filename);
  } catch (err) {
    next(new HandlerResponseError(500, err, __filename));
  }
}
