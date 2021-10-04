import styles, { stylesMaterialUI } from '@/components/troops/troops/special-units/generals/styles';
import { withStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Generals(props) {
  const { classes } = props;

  return (
    <div className="container-table">
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Centurions [romans]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Chieftains [barbarians]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Officials [egyptians]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited units
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(Generals);
