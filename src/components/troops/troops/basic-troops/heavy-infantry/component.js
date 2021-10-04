import styles, { stylesMaterialUI } from '@/components/troops/troops/basic-troops/heavy-infantry/styles';
import { withStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function HeavyInfantry(props) {
  const { classes } = props;

  return (
    <div className="container-table">
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Legionaries [romans]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Warriors [barbarians]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Soldiers [egyptians]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited troops
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(HeavyInfantry);
