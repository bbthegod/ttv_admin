/**
 *
 * LoginPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//--------------------------------------------------------------
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import styles from './styles';
const useStyles = makeStyles(styles);
import { login } from './actions';
//--------------------------------------------------------------
export function LoginPage(props) {
  const classes = useStyles();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  useEffect(() => {
    if (localStorage.getItem('token')) {
      return props.history.push('/');
    } else {
      return props.history.push('/login');
    }
  }, [props.loginPage.loading]);

  function handleSubmit() {
    props.onLogin(code, password);
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Sign in
          </Typography>
          <ValidatorForm onSubmit={handleSubmit} className={classes.loginForm}>
            <div className={classes.fields}>
              <TextValidator
                fullWidth
                label="Mã Sinh Viên"
                variant="outlined"
                validators={['required']}
                errorMessages={['Trường này không được để trống']}
                value={code}
                onChange={event => setCode(event.target.value)}
              />
              <TextValidator
                fullWidth
                label="Mật Khẩu"
                type="password"
                variant="outlined"
                validators={['required']}
                errorMessages={['Trường này không được để trống']}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <Button
              className={classes.submitButton}
              color="primary"
              variant="contained"
              size="large"
              type="submit"
              variant="contained"
            >
              Sign in
            </Button>
          </ValidatorForm>
        </CardContent>
      </Card>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLogin: (code, password) => dispatch(login(code, password)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
