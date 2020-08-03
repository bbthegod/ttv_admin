/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

import { makeStyles, useTheme } from '@material-ui/styles';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Snackbar from '../../components/Snackbar';
import { closeSnackbar } from './actions';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    paddingTop: 64,
    backgroundColor: theme.palette.background.default,
  },
  content: {
    marginLeft: 240,
    padding: '20px',
    minHeight: '100vh',
  },
}));

export function Dashboard(props) {
  const { children } = props;

  const classes = useStyles();
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return (
    <div className={classes.root}>
      <Snackbar
        open={props.dashboard.status}
        variant={props.dashboard.variant}
        message={props.dashboard.message}
        onClose={props.onCloseSnackBar}
      />
      <Topbar />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCloseSnackBar: () => dispatch(closeSnackbar()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
