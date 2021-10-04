import * as rankingsData from '@/utils/populate-database/mock-rankings';
import { handleResponseSuccess, HandlerResponseError } from '@/utils/handlers';

const populateDatabase = async (req, res, next) => {
  try {
    const populatedRankings = await Promise.all(Object.values(rankingsData).map(ranking => ranking.save()));
    const populatedDatabase = { populatedRankings };
    return handleResponseSuccess(res, populatedDatabase, __filename);
  } catch (error) {
    return next(new HandlerResponseError(500, error, __filename));
  }
};

export default populateDatabase;
