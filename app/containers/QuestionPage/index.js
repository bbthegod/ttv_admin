/**
 *
 * QuestionPage
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
import makeSelectQuestionPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//----------------------------------------------------
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { getQuestion, createQuestion } from './actions';

export function QuestionPage(props) {
  const { onGetQuestion, onCreateQuestion, questionPage } = props;
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState();
  const [search, setSearch] = useState('');
  useInjectReducer({ key: 'questionPage', reducer });
  useInjectSaga({ key: 'questionPage', saga });
  //===========================================================================
  useEffect(() => {
    onGetQuestion({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
      filter: { content: { $regex: search, $options: 'i' } },
    });
  }, [rowsPerPage, page, search]);
  useEffect(() => {
    if (questionPage) {
      if (questionPage.questions) {
        setCount(questionPage.questions.count);
        setRows(questionPage.questions.data);
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
      <Header onCreate={onCreateQuestion} />
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

QuestionPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onGetQuestion: PropTypes.func,
  questionPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  questionPage: makeSelectQuestionPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetQuestion: query => dispatch(getQuestion(query)),
    onCreateQuestion: data => dispatch(createQuestion(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuestionPage);
