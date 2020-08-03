import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MySnackbarContent from './components/MySnackbarContent';
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(),
  },
}));
function CustomizedSnackbars(props) {
  const classes = useStyles();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.open}
      autoHideDuration={2000}
      onClose={props.onClose}
    >
      <MySnackbarContent
        onClose={props.onClose}
        variant={props.variant ? props.variant : 'success'}
        message={props.message}
      />
    </Snackbar>
  );
}

export default CustomizedSnackbars;
