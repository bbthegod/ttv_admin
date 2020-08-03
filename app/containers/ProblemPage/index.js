/**
 *
 * ProblemPage
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProblemPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//----------------------------------------------------
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { getProblem, createProblem } from './actions';
export function ProblemPage(props) {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState();
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');
  useInjectReducer({ key: 'problemPage', reducer });
  useInjectSaga({ key: 'problemPage', saga });
  //===========================================================================
  useEffect(() => {
    props.onGetProblem({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
      filter: { title: { $regex: search, $options: 'i' } },
    });
  }, [rowsPerPage, page, order, search]);
  useEffect(() => {
    if (props.problemPage) {
      if (props.problemPage.users) {
        setCount(props.problemPage.users.count);
        setRows(props.problemPage.users.data);
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
      <Header onCreate={props.onCreate} />
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

ProblemPage.propTypes = {
  //onCreateCurrency: PropTypes.func.isRequired,
  onGetProblem: PropTypes.func.isRequired,
  problemPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  problemPage: makeSelectProblemPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetProblem: query => dispatch(getProblem(query)),
    onCreate: data => dispatch(createProblem(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProblemPage);
