import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import ConfirmDialog from '../../../../components/ConfirmDialog';
const useStyles = makeStyles(theme => ({
  root: {},
  notice: {
    marginTop: theme.spacing(1),
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));
function OtherActions(props) {
  const { className, onDelete, ...rest } = props;

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader title="Hành động khác" />
        <Divider />
        <CardContent>
          <Typography className={classes.notice} variant="body2">
            Nút này sẽ xoá tất cả dữ liệu về mục câu hỏi, hãy chắc chắn rằng bạn
            muốn xoá mục câu hỏi này
          </Typography>
          <Button
            className={classes.deleteButton}
            onClick={() => setOpen(true)}
            disabled={localStorage.getItem('role') != 'admin'}
          >
            <DeleteIcon className={classes.buttonIcon} />
            Xoá câu hỏi
          </Button>
        </CardContent>
      </Card>
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        message="Bạn có muốn xoá câu hỏi này"
        handleAction={onDelete}
      />
    </>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string,
};

export default OtherActions;
