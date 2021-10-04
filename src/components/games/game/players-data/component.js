import styles, { muiStyles } from '@/components/games/game/players-data/styles';
import { withStyles } from '@mui/styles';

import DataDescription from '@/components/games/game/data-description/component';
import Paper from '@mui/material/Paper';
import Players from '@/components/games/game/players-data/players/component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function PlayersData(props) {
  const { classes } = props;
  return (
    <div className="container-table-players-data">
      <DataDescription
        description="PLAYERS"
        imgFilename="/assets/images/icons/games/data-types/players.png"
        style={{ borderBottom: 'none !important' }}
      />
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Nickname
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Team
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Color
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Civilization
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Kills
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Losses
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                <div>
                  <span>Units</span>
                  <span>trained</span>
                </div>
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Score
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Play time
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Winner
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>
            <Players
              playerSelected={props.playerSelected}
              teamsData={props.sequenceData.teamsData}
              numTotalPlayers={props.sequenceData.gameData.numPlayers}
            />
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(muiStyles)(PlayersData);
