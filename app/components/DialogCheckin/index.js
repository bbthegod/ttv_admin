import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  colors,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  closeButton: {
    color: theme.palette.white,
    backgroundColor: colors.blue[500],
    '&:hover': {
      backgroundColor: colors.blue[700],
    },
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[500],
    '&:hover': {
      backgroundColor: colors.green[700],
    },
  },
}));

const DialogUser = props => {
  const {
    open,
    onClose,
    row,
    staticContext,
    className,
    isEdit,
    handleEdit,
    onCreate,
    onEdit,
    ...rest
  } = props;
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isExam, setIsExam] = useState('');
  const classes = useStyles();
  useEffect(() => {
    clearData();
    if (row) {
      setName(row.name);
      setStudentId(row.studentId);
      setIsExam(row.isExam);
    }
  }, [props]);
  function clearData() {
    setName('');
    setStudentId('');
    setIsExam('');
  }

  function onSubmit() {
    if (isEdit) {
      onEdit({
        ...row,
        ...{ name },
        ...{ studentId },
        ...{ isExam },
      });
    } else {
      onCreate({
        ...{ name },
        ...{ studentId },
        ...{ isExam },
      });
    }
    onClose();
  }
  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h3">
            {isEdit ? 'Chỉnh sửa đăng kí' : 'Thêm đăng kí'}
          </Typography>
          <ValidatorForm onSubmit={onSubmit}>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Tên Sinh Viên"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  value={name}
                  validators={['required']}
                  errorMessages={['This field is required']}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Mã Sinh Viên"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={studentId}
                  onChange={e => {
                    setStudentId(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextValidator
                  label="Trạng Thái"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={[
                    'This field is required',
                    'Class is not valid, exam: HTTT1-K12',
                  ]}
                  select
                  value={isExam}
                  onChange={e => {
                    setIsExam(e.target.value);
                  }}
                >
                  <MenuItem key={1} value="true">
                    Đã Thi
                  </MenuItem>
                  <MenuItem key={0} value="false">
                    Chưa Thi
                  </MenuItem>
                </TextValidator>
              </Grid>
            </Grid>
          </ValidatorForm>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            onClick={onClose}
            variant="contained"
            className={classes.closeButton}
          >
            Đóng
          </Button>
          <Button
            className={classes.saveButton}
            onClick={onClose}
            variant="contained"
            onClick={() => onSubmit()}
          >
            Lưu
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

DialogUser.displayName = 'DialogUser';

DialogUser.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default withRouter(DialogUser);
