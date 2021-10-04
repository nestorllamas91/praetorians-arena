import styles, { stylesMaterialUI } from '@/components/troops/header/styles';
import { withStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Header(props) {
  const { classes } = props;

  return (
    <div className="container-table">
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                {(() => {
                  switch (props.type) {
                    case 'troops':
                      return <span>Type of troop</span>;
                    case 'units':
                      return <span>Type of unit</span>;
                    case 'constructions':
                      return <span>Type of construction</span>;
                  }
                })()}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Limit at the same time
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Limit throughout all the game
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(Header);
