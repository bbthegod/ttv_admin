/**
 *
 * questionListPage
 *
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectquestionListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//----------------------------------------------------
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { getQuestion, createQuestion, getAllQuestion } from './actions';

export function questionListPage(props) {
  const {
    onGetQuestion,
    onCreateQuestion,
    questionListPage,
    onGetAllQuestion,
  } = props;
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState();
  const [search, setSearch] = useState('');
  const [allQuestions, setAllQuestions] = useState();
  useInjectReducer({ key: 'questionListPage', reducer });
  useInjectSaga({ key: 'questionListPage', saga });
  //===========================================================================
  useEffect(() => {
    onGetQuestion({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
    });
    onGetAllQuestion();
  }, [rowsPerPage, page, search]);
  useEffect(() => {
    if (questionListPage) {
      if (questionListPage.questions) {
        setCount(questionListPage.questions.count);
        setRows(questionListPage.questions.data);
        setAllQuestions(questionListPage.allQuestions);
      }
    }
  }, [props]);
  //===========================================================================
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  //===========================================================================
  return (
    <>
      <Header onCreate={onCreateQuestion} allQuestions={allQuestions} />
      <SearchBar search={search} setSearch={setSearch} />
      <DataTable
        rows={rows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        count={count}
        rowsPerPage={rowsPerPage}
        history={props.history}
      />
    </>
  );
}

questionListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onGetQuestion: PropTypes.func,
  questionListPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  questionListPage: makeSelectquestionListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetQuestion: query => dispatch(getQuestion(query)),
    onCreateQuestion: data => dispatch(createQuestion(data)),
    onGetAllQuestion: () => dispatch(getAllQuestion()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(questionListPage);
