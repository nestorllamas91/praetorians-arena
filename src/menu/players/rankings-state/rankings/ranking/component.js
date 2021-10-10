import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles, { stylesMaterialUI } from '@/menu/players/rankings-state/rankings/ranking/styles';
import { fixRankingSelectors } from '@/utils/functions';

function Ranking(props) {
  const { classes } = props;
  const MySwal = withReactContent(Swal);
  const { season, competition } = fixRankingSelectors(props.ranking.season, props.ranking.competition);

  function handleUpdateState(state) {
    MySwal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are going to change the state of this ranking.',
      width: '550px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(async result => {
      if (result.value) {
        try {
          const url = `/api/account/rankings-state/change-state/${props.ranking.rankingID}/${state}`;
          await axios.put(url);
          props.handleUpdateRankingState();
          MySwal.fire({
            icon: 'success',
            title: 'State updated!',
            text: 'The state of this ranking has been changed.',
            width: '550px'
          });
        } catch (err) {
          MySwal.fire({
            icon: 'error',
            title: 'State not updated!',
            text: 'The state of this ranking could not be changed.',
            width: '550px'
          });
        }
      }
    });
  }

  return (
    <>
      <TableRow classes={{ root: classes.tableBodyRow }}>
        <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
          {props.ranking.rankingID}
        </TableCell>
        <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
          {season}
        </TableCell>
        <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
          {competition}
        </TableCell>
        <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
          {(() => {
            switch (props.ranking.state) {
              case 'inscription':
                return (
                  <div className="state-inscription">
                    <button onClick={() => handleUpdateState('playing')} className="button button-playing">
                      CHANGE TO "PLAYING"
                    </button>
                    <button onClick={() => handleUpdateState('canceled')} className="button">
                      CHANGE TO "CANCELED"
                    </button>
                  </div>
                );
              case 'playing':
                return (
                  <button onClick={() => handleUpdateState('played')} className="button">
                    CHANGE TO "PLAYED"
                  </button>
                );
              case 'closed':
                return (
                  <button onClick={() => handleUpdateState('playing')} className="button">
                    CHANGE TO "PLAYING"
                  </button>
                );
              case 'canceled':
                return (
                  <button onClick={() => handleUpdateState('inscription')} className="button">
                    CHANGE TO "INSCRIPTION"
                  </button>
                );
            }
          })()}
        </TableCell>
      </TableRow>
      <style jsx>{styles}</style>
    </>
  );
}
export default withStyles(stylesMaterialUI)(Ranking);
