/**
 *
 * UserView
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserView from './selectors';
import reducer from './reducer';
import saga from './saga';

import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import Header from './components/Header';
import Summary from './components/Summary';
import Question from './components/Question';
import { getUser, editUser, deleteUser, getQuestion, reset } from './actions';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));
export function UserView(props) {
  const {
    onGetUser,
    onGetQuestion,
    onDeleteUser,
    userView,
    onEditUser,
    onReset,
    match,
  } = props;
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [user, setUser] = useState();
  const [question, setQuestion] = useState();
  useInjectReducer({ key: 'userView', reducer });
  useInjectSaga({ key: 'userView', saga });
  useEffect(() => {
    onGetUser(match.params.id);
    // onGetQuestion(match.params.id);
  }, []);
  useEffect(() => {
    if (userView) {
      setUser(userView.users);
      // setQuestion(userView.questions);
    }
  }, [props]);
  return (
    <div>
      <Header user={user} />
      <Tabs
        className={classes.tabs}
        onChange={(event, newValue) => {
          setTab(newValue);
        }}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        <Tab label="Sinh Viên" value={0} />
        <Tab label="Câu hỏi" value={1} />
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 0 && (
          <Summary
            student={user}
            onEditUser={onEditUser}
            onDelete={() => {
              onDeleteUser(user._id);
              props.history.push('/user');
            }}
            onReset={() => {
              onReset(user._id);
              props.history.push('/user');
            }}
          />
        )}
        {tab === 1 && <Question questions={question} />}
      </div>
    </div>
  );
}

UserView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onGetUser: PropTypes.func,
  onGetQuestion: PropTypes.func,
  onEditUser: PropTypes.func,
  userView: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userView: makeSelectUserView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetUser: query => dispatch(getUser(query)),
    onEditUser: query => dispatch(editUser(query)),
    onDeleteUser: data => dispatch(deleteUser(data)),
    onGetQuestion: data => dispatch(getQuestion(data)),
    onReset: data => dispatch(reset(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserView);
