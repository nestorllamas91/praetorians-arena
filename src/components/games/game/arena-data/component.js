import styles, { muiStyles } from '@/components/games/game/arena-data/styles';
import { withStyles } from '@mui/styles';

import { fixRankingSelectors } from '@/utils/functions';

import DataDescription from '@/components/games/game/data-description/component';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ArenaData(props) {
  const { classes } = props;

  const { season, competition } = fixRankingSelectors(props.data.season, props.data.competition);

  return (
    <div className="container-table-file-data">
      <DataDescription description="ARENA" imgFilename="/assets/images/icons/games/data-types/arena.png" />
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Season
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Competition
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Combat ID
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Game ID
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {season}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {competition}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.combatID}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.preview === false ? props.data.gameID : '?'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(muiStyles)(ArenaData);
