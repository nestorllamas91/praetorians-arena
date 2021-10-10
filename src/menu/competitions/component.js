import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import NameRanking from '@/menu/competitions/name-ranking/component';
import Ranking from '@/menu/competitions/ranking/component';
import Row from '@/menu/competitions/ranking/teams/component';
import styles from '@/menu/competitions/styles';
import { fixRankingSelectors } from '@/utils/functions';

export default function Competitions() {
  const player = useSelector(({ player }) => player);
  const router = useRouter();
  let rankingId = null;
  let player = null;
  if (router) {
    rankingId = router.query.rankingId;
    player = router.query.player;
  }
  const [currentCompetitionsError, setCurrentCompetitionsError] = useState(null);
  const [currentCompetitions, setCurrentCompetitions] = useState([]);
  const [rankingError, setRankingError] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [rankingHasParticipants, setRankingHasParticipants] = useState(false);

  useEffect(() => {
    if (rankingId) {
      getRanking();
    }
  }, [rankingId, rankingHasParticipants]);

  useEffect(() => {
    if (ranking) {
      getCompetitionsCurrentSeason();
    }
  }, [ranking, rankingHasParticipants]);

  async function getRanking() {
    try {
      const url = `/api/competitions/ranking/${rankingId}`;
      const res = await axios.get(url);
      setRanking(res.data.output.data);
      if (res.data.output.data !== '') {
        let hasParticipants = false;
        res.data.output.data.data.map(row => {
          if (row.enrollmentState === 'accepted') {
            hasParticipants = true;
          }
        });
        if (hasParticipants === true) {
          setRankingHasParticipants(true);
        } else {
          setRankingHasParticipants(false);
        }
      }
    } catch (err) {
      setRankingError(err.response.data.status.code);
    }
  }

  async function getCompetitionsCurrentSeason() {
    try {
      const url = `/api/competitions/competitions/${ranking.season}`;
      const res = await axios.get(url);
      setCurrentCompetitions(res.data.output.data);
    } catch (err) {
      setCurrentCompetitionsError(err.response.data.status.code);
    }
  }

  function handleClickCompetition(competition) {
    const typeCompetition = competition.competition.split('-')[0];
    if (player.isAuthenticated && typeCompetition === 'dueling') {
      Router.push(`/competitions/${competition.rankingID}?player=true`);
    } else {
      Router.push(`/competitions/${competition.rankingID}`);
    }
  }

  return (
    <div>
      {!rankingId ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>
          <h2 className="heading2 subtitle">Season</h2>
          <div className="selector-competition">
            {currentCompetitions.length === 0 ? (
              <Fragment></Fragment>
            ) : (
              currentCompetitions.map(myCompetition => {
                const { competition } = fixRankingSelectors(undefined, myCompetition.competition);
                return (
                  <div
                    key={uuidv4()}
                    className={`selector ${Number(rankingId) === myCompetition.rankingID ? 'active-page' : ''}`}
                  >
                    <a key={uuidv4()} onClick={() => handleClickCompetition(myCompetition)} className="link">
                      {competition}
                    </a>
                  </div>
                );
              })
            )}
          </div>
          <div className="main-container rankings-container">
            <div className="ranking">
              {ranking === null ? (
                <Fragment></Fragment>
              ) : rankingHasParticipants === false ? (
                <Fragment>
                  <NameRanking
                    season={ranking.season}
                    competition={ranking.competition}
                    fontSize="big"
                    alignment="center"
                  />
                  <hr />
                  <span className="no-ranking">This ranking currently has no participants yet.</span>
                </Fragment>
              ) : (
                <Fragment>
                  <NameRanking
                    season={ranking.season}
                    competition={ranking.competition}
                    fontSize="big"
                    alignment="center"
                  />
                  <hr />
                  <div className="ranking-table">
                    <h3 className="heading3 first-heading my-heading">Ranking</h3>
                    <Ranking
                      numPlayersPerGame={ranking.numPlayersPerGame}
                      viewData={player === 'true' ? 'ranking1' : 'ranking2'}
                    >
                      {ranking.data.map(row => {
                        if (row.enrollmentState === 'accepted') {
                          return (
                            <Row
                              key={uuidv4()}
                              ranking={ranking}
                              row={row}
                              viewData={player === 'true' ? 'ranking1' : 'ranking2'}
                            />
                          );
                        }
                      })}
                    </Ranking>
                  </div>
                  <div className="combats-list">
                    {(() => {
                      switch (ranking.competition.split('-')[0]) {
                        case 'dueling':
                          return <h3 className="heading3 my-heading">Combats</h3>;
                        case 'scoring':
                          return <h3 className="heading3 my-heading">Games</h3>;
                        case 'tournament':
                          return <h3 className="heading3 my-heading">Combats</h3>;
                      }
                    })()}
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      )}
      <style jsx>{styles}</style>
    </div>
  );
}
