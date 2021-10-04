import styles, { stylesMaterialUI } from '@/components/account/my-combats/combat/styles';
import { withStyles } from '@mui/styles';

import Router from 'next/router';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Combat(props) {
  const { classes } = props;

  function handleUploadCombat() {
    Router.push(`/account/my-combats/combat?combatId=${props.combatId}`);
  }

  return (
    <div>
      <div className="ranking-table">
        <Paper>
          <Table>
            <TableHead>
              <TableRow classes={{ root: classes.tableHeadRow }}>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Season
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Competition
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Ranking ID
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Combat ID
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Date
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Opponents
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody classes={{ root: classes.tableBody }}>
              <TableRow classes={{ root: classes.tableBodyRow }}>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  {props.season}
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  {props.competition}
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  {props.rankingId}
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  {props.combatId}
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  <div className="dates">
                    <span>Start: {props.startDate}</span>
                    <span>End: {props.endDate}</span>
                  </div>
                </TableCell>
                <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                  <div className="dates">
                    <span>Opponent 1: {props.teamName1}</span>
                    <span>Opponent 2: {props.teamName2}</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div className="button-upload">
        <button onClick={handleUploadCombat} className="button">
          UPLOAD COMBAT
        </button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}

export default withStyles(stylesMaterialUI)(Combat);
