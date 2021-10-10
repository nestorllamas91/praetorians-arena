import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';
import Router from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import Buttons from '@/menu/players/my-inscriptions/team-proposals/team-proposal/row/buttons/component';
import styles, { stylesMaterialUI } from '@/menu/players/my-inscriptions/team-proposals/team-proposal/row/styles';
import { fixRankingSelectors } from '@/utils/functions';

function Row(props) {
  const { classes } = props;
  const { season, competition } = fixRankingSelectors(props.season, props.competition);

  function handlePlayerEnrollment() {
    props.playerEnrollment();
  }

  function handleClickMyRanking() {
    const typeCompetition = props.competition.split('-')[0];
    if (typeCompetition === 'dueling') {
      Router.push(`/competitions/${props.rankingId}?player=true`);
    } else {
      Router.push(`/competitions/${props.rankingId}`);
    }
  }

  return (
    <TableRow classes={{ root: classes.tableBodyRow }}>
      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
        {competition} ({season})
      </TableCell>
      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
        {props.row.team.name}
      </TableCell>
      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
        {props.row.team.players.map(player => (
          <div key={uuidv4()} className="player">
            <span className="nickname">{player.steamNickname}</span>
            {(() => {
              switch (player.enrollmentState) {
                case 'pending':
                  return (
                    <div className="state-accepted-refused">
                      <div>
                        <img src="/assets/images/icons/team-proposals/pending.png" />
                        <span>Pending</span>
                      </div>
                    </div>
                  );
                case 'accepted':
                  return (
                    <div className="state-accepted-refused">
                      <div>
                        <img src="/assets/images/icons/team-proposals/accepted.png" />
                        <span>Accepted</span>
                      </div>
                    </div>
                  );
                case 'refused':
                  return (
                    <div className="state-accepted-refused">
                      <div>
                        <img src="/assets/images/icons/team-proposals/refused.png" />
                        <span>Refused</span>
                      </div>
                    </div>
                  );
              }
            })()}
          </div>
        ))}
      </TableCell>
      <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
        <Buttons rankingId={props.rankingId} row={props.row} playerEnrollment={handlePlayerEnrollment} />
        <a onClick={handleClickMyRanking}>View ranking</a>
      </TableCell>

      <style jsx>{styles}</style>
    </TableRow>
  );
}

export default withStyles(stylesMaterialUI)(Row);
