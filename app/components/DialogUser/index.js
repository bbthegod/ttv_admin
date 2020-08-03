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
    student,
    staticContext,
    className,
    isEdit,
    handleEdit,
    ...rest
  } = props;
  const [studentCode, setStudentCode] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const classes = useStyles();
  useEffect(() => {
    clearData();
    if (student) {
      setStudentCode(student.studentCode);
      setStudentName(student.studentName);
      setStudentClass(student.studentClass);
      setStudentPhone(student.studentPhone);
    }
  }, [props]);
  function clearData() {
    setStudentCode('');
    setStudentName('');
    setStudentClass('');
    setStudentPhone('');
  }

  function onSubmit() {
    handleEdit({
      ...student,
      ...{ studentCode },
      ...{ studentName },
      ...{ studentClass },
      ...{ studentPhone },
    });
    onClose();
    props.history.push('/user');
  }
  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h3">
            {isEdit ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}
          </Typography>
          <ValidatorForm onSubmit={onSubmit}>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Student Code"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  value={studentCode}
                  validators={['required', 'matchRegexp:[0-9]{10}']}
                  errorMessages={[
                    'This field is required',
                    'Student code is not valid, exam: 2017604482',
                  ]}
                  onChange={e => {
                    setStudentCode(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Student Name"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={studentName}
                  onChange={e => {
                    setStudentName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Student Class"
                  variant="outlined"
                  fullWidth
                  validators={[
                    'required',
                    'matchRegexp:[A-Z]{4}[0-9]-[K][1][0-9]',
                  ]}
                  errorMessages={[
                    'This field is required',
                    'Class is not valid, exam: HTTT1-K12',
                  ]}
                  value={studentClass}
                  onChange={e => {
                    setStudentClass(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Student Phone"
                  variant="outlined"
                  fullWidth
                  label="Phone Number"
                  validators={['required', 'matchRegexp:[0-9]{10}']}
                  errorMessages={[
                    'This field is required',
                    'Phone number is not valid',
                  ]}
                  value={studentPhone}
                  onChange={e => {
                    setStudentPhone(e.target.value);
                  }}
                />
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
