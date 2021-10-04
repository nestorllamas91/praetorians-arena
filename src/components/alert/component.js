import styles, { stylesMaterialUI } from '@/components/alert/styles';
import { withStyles } from '@mui/styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';

function Alert(props) {
  const { classes } = props;

  function handleClose(event, reason) {
    if (reason === 'clickaway') return;
    props.setOpened(false);
  }

  return (
    <div>
      <Snackbar
        open={props.opened}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={
            {
              success: classes.success,
              error: classes.error
            }[props.type]
          }
          aria-describedby="client-snackbar"
          message={
            <span className={classes.message}>
              {
                {
                  success: <CheckCircleIcon classes={{ root: classes['icon-type'] }} />,
                  error: <ErrorIcon classes={{ root: classes['icon-type'] }} />
                }[props.type]
              }
              {props.message}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon classes={{ root: classes['icon-close'] }} />
            </IconButton>
          ]}
        />
      </Snackbar>
      <style jsx>{styles}</style>
    </div>
  );
}
export default withStyles(stylesMaterialUI)(Alert);
