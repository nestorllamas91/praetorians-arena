import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';

import DataDescription from '@/menu/games/game/data-description/component';
import styles, { muiStyles } from '@/menu/games/game/game/styles';

function GameData(props) {
  const { classes } = props;
  return (
    <div className="container-table-game-data">
      <DataDescription description="GAME" imgFilename="/assets/images/icons/games/data-types/game.png" />
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Play date
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                <div>
                  <span>Number</span>
                  <span>of players</span>
                </div>
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Modality
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Map name
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Map image
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Play time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                <div style={{ marginBottom: '10px' }}>
                  {props.data.playDate.playDateUTC}
                  <br />
                  {props.data.playDate.playTimeUTC}
                </div>
                <div>
                  {props.data.playDate.playDateLocal}
                  <br />
                  {props.data.playDate.playTimeLocal}
                </div>
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.numPlayers}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.modality}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.map.name}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                <img src={props.data.map.imagePath} />
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.playTime}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(muiStyles)(GameData);
