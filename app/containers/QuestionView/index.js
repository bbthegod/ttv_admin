/**
 *
 * QuestionView
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
import { Grid, colors } from '@material-ui/core';
import Header from './components/Header';
import Information from './components/Information';
import OtherActions from './components/OtherActions';
import { getQuestion } from './actions';
import { deleteQuestion, editQuestion } from '../QuestionPage/actions';
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
export function QuestionView(props) {
  const { onEdit, onDelete, onGetQuestion, match, questionView } = props;
  const classes = useStyles();
  const [question, setQuestion] = useState();
  useInjectReducer({ key: 'questionView', reducer });
  useInjectSaga({ key: 'questionView', saga });
  useEffect(() => {
    onGetQuestion(match.params.id);
  }, []);
  useEffect(() => {
    if (questionView) {
      setQuestion(questionView.questions);
    }
  }, [props]);
  return (
    <div>
      <Header question={question} />
      <div className={classes.content}>
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
              question={question}
              onEdit={data => {
                onEdit(data);
                props.history.push('/question');
              }}
            />
          </Grid>
          <Grid item lg={4}>
            <OtherActions
              onDelete={() => {
                onDelete(question._id);
                props.history.push('/question');
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

QuestionView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questionView: makeSelectQuestionView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetQuestion: query => dispatch(getQuestion(query)),
    onEdit: data => dispatch(editQuestion(data)),
    onDelete: data => dispatch(deleteQuestion(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuestionView);
