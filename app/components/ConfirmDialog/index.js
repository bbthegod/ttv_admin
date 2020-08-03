/**
 *
 * ConfirmDialog
 *
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ConfirmDialog(props) {
  const { message, setOpen, open, handleAction } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const clickAction = () => {
    handleAction();
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Huỷ
          </Button>
          <Button onClick={clickAction} color="primary" autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ConfirmDialog.propTypes = {};

export default withRouter(ConfirmDialog);
