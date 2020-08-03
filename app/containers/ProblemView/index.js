/**
 *
 * ProblemView
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProblemView from './selectors';
import reducer from './reducer';
import saga from './saga';

import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider } from '@material-ui/core';
import Header from './components/Header';
import Summary from './components/Summary';
import { getProblem, editProblem, deleteProblem } from './actions';
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
export function ProblemView(props) {
  const {
    onGetProblem,
    onDeleteProblem,
    problemView,
    onEditProblem,
    onReset,
    match,
  } = props;
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState();
  useInjectReducer({ key: 'problemView', reducer });
  useInjectSaga({ key: 'problemView', saga });
  useEffect(() => {
    onGetProblem(match.params.id);
  }, []);
  useEffect(() => {
    if (problemView) {
      setRow(problemView.problems);
    }
  }, [props]);
  return (
    <div>
      <Header row={row} />
      <Tabs
        className={classes.tabs}
        onChange={(event, newValue) => {
          setTab(newValue);
        }}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        <Tab label="Vấn Đề" value={0} />
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 0 && (
          <Summary
            row={row}
            onEditProblem={data => {
              onEditProblem(data);
              props.history.push('/problem');
            }}
            onDelete={() => {
              onDeleteProblem(row._id);
              props.history.push('/problem');
            }}
          />
        )}
      </div>
    </div>
  );
}

ProblemView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onGetProblem: PropTypes.func,
  onGetQuestion: PropTypes.func,
  onEditProblem: PropTypes.func,
  problemView: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  problemView: makeSelectProblemView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetProblem: query => dispatch(getProblem(query)),
    onEditProblem: query => dispatch(editProblem(query)),
    onDeleteProblem: data => dispatch(deleteProblem(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProblemView);
