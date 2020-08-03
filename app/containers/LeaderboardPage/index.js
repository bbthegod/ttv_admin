/**
 *
 * LeaderboardPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLeaderboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//----------------------------------------------------
import Header from './components/Header';
import DataTable from './components/DataTable';
import { getPlay } from './actions';

export function LeaderboardPage(props) {
  const { onGetPlay, leaderboardPage } = props;
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [rows, setRows] = useState();
  const [order, setOrder] = useState(true);
  useInjectReducer({ key: 'leaderboardPage', reducer });
  useInjectSaga({ key: 'leaderboardPage', saga });
  //===========================================================================
  useEffect(() => {
    onGetPlay({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
      sort: order ? '-totalScore' : 'totalScore',
    });
  }, [rowsPerPage, page, order]);
  useEffect(() => {
    const interval = setInterval(() => {
      onGetPlay({
        limit: rowsPerPage,
        skip: page * rowsPerPage,
        sort: order ? '-totalScore' : 'totalScore',
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (leaderboardPage) {
      if (leaderboardPage.plays) {
        setCount(leaderboardPage.plays.count);
        setRows(leaderboardPage.plays.data);
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

  function handleChangeSort() {
    setOrder(!order);
  }
  //===========================================================================
  return (
    <>
      <Header />
      <DataTable
        rows={rows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangeSort={handleChangeSort}
        order={order}
        page={page}
        count={count}
        rowsPerPage={rowsPerPage}
        history={props.history}
      />
    </>
  );
}
LeaderboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leaderboardPage: makeSelectLeaderboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetPlay: query => dispatch(getPlay(query)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LeaderboardPage);
