/**
 *
 * QuestionListView
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectQuestionView from './selectors';
import reducer from './reducer';
import saga from './saga';

import { makeStyles } from '@material-ui/styles';
import { Grid, Tabs, Tab, Divider, colors } from '@material-ui/core';
import Header from './components/Header';
import Information from './components/Information';
import OtherActions from './components/OtherActions';
import Question from './components/Question';
import { getQuestion, getAllQuestion } from './actions';
import { deleteQuestion, editQuestion } from '../QuestionListPage/actions';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));
export function QuestionListView(props) {
  const {
    onEdit,
    onDelete,
    onGetQuestion,
    onGetAllQuestion,
    match,
    questionListView,
  } = props;
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [row, setRow] = useState();
  const [allQuestions, setAllQuestions] = useState();
  useInjectReducer({ key: 'questionListView', reducer });
  useInjectSaga({ key: 'questionListView', saga });
  useEffect(() => {
    onGetQuestion(match.params.id);
    onGetAllQuestion();
  }, []);
  useEffect(() => {
    if (questionListView) {
      setRow(questionListView.questions);
      setAllQuestions(questionListView.allQuestions);
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
        <Tab label="Câu hỏi" value={0} />
        <Tab label="Danh sách câu hỏi" value={1} />
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 0 && (
          <Grid
            container
            spacing={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Grid item lg={4}>
              <Information
                row={row}
                allQuestions={allQuestions}
                onEdit={data => {
                  onEdit(data);
                  props.history.push('/questionlist');
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <OtherActions
                onDelete={() => {
                  onDelete(row._id);
                  props.history.push('/questionlist');
                }}
              />
            </Grid>
          </Grid>
        )}
        {tab === 1 && (
          <Question questions={row.questions} history={props.history} />
        )}
      </div>
    </div>
  );
}

QuestionListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questionListView: makeSelectQuestionView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetQuestion: query => dispatch(getQuestion(query)),
    onGetAllQuestion: () => dispatch(getAllQuestion()),
    onEdit: data => dispatch(editQuestion(data)),
    onDelete: data => dispatch(deleteQuestion(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuestionListView);
