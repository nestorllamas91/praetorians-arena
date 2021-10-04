import { Fragment } from 'react';
import styles, { stylesMaterialUI } from '@/components/competitions/ranking/styles';
import { withStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Ranking(props) {
  const { classes } = props;

  return (
    <div className="ranking-table">
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              {props.viewData === 'ranking3' ? (
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Ranking
                </TableCell>
              ) : (
                <Fragment></Fragment>
              )}
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Rank
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                {props.numPlayersPerGame === 2 ? <span>Player</span> : <span>Team</span>}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Points
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Victories
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Defeats
              </TableCell>
              {props.viewData === 'ranking1' ? (
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Action
                </TableCell>
              ) : (
                <Fragment></Fragment>
              )}
              {props.viewData === 'ranking3' ? (
                <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                  Action
                </TableCell>
              ) : (
                <Fragment></Fragment>
              )}
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>{props.children}</TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(Ranking);
