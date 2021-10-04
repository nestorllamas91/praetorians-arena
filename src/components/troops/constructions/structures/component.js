import styles, { stylesMaterialUI } from '@/components/troops/constructions/structures/styles';
import { withStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Structures(props) {
  const { classes } = props;

  return (
    <div className="container-table">
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Watchtowers [all civilizations]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Maximum 4 constructions
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited constructions
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Bridges [all civilizations]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                <i>Unavailable constructions</i>
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                <i>Unavailable constructions</i>
              </TableCell>
            </TableRow>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Garrisons [all civilizations]
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited constructions
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                Unlimited constructions
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(Structures);
