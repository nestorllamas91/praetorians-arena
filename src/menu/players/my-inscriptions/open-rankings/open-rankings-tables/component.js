import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';

import styles, { stylesMaterialUI } from '@/menu/players/my-inscriptions/open-rankings/open-rankings-tables/styles';

function OpenRankings(props) {
  const { classes } = props;
  return (
    <div className="rankings-table">
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
                State
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>{props.children}</TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}

export default withStyles(stylesMaterialUI)(OpenRankings);
