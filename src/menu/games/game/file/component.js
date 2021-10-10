import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';

import DataDescription from '@/menu/games/game/data-description/component';
import styles, { muiStyles } from '@/menu/games/game/file/styles';

function FileData(props) {
  const { classes } = props;

  return (
    <div className="container-table-file-data">
      <DataDescription description="FILE" imgFilename="/assets/images/icons/games/data-types/file.png" />
      <Paper classes={{ root: classes.paper }}>
        <Table>
          <TableHead classes={{ root: classes.tableHead }}>
            <TableRow classes={{ root: classes.tableHeadRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Filename
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Size
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Upload date
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Uploader
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableHeadCell }}>
                Download
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody classes={{ root: classes.tableBody }}>
            <TableRow classes={{ root: classes.tableBodyRow }}>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.filenamePlayer}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.data.size}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.preview === false ? (
                  <div>
                    <div style={{ marginBottom: '10px' }}>
                      {props.data.uploadDate.uploadDateUTC}
                      <br />
                      {props.data.uploadDate.uploadTimeUTC}
                    </div>
                    <div>
                      {props.data.uploadDate.uploadDateLocal}
                      <br />
                      {props.data.uploadDate.uploadTimeLocal}
                    </div>
                  </div>
                ) : (
                  '?'
                )}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.preview === false ? props.data.uploaderPlayer : '?'}
              </TableCell>
              <TableCell align="center" padding="none" classes={{ root: classes.tableBodyCell }}>
                {props.preview === false ? (
                  <a href={`/downloads/${props.data.filenameSystem}`} download={props.data.filenamePlayer}>
                    <img src={'/assets/images/misc/download.png'} />
                  </a>
                ) : (
                  '?'
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(muiStyles)(FileData);
