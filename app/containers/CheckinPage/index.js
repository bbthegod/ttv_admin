/**
 *
 * CheckinPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInterviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from './components/Header';
import DataTable from './components/DataTable';
import { Button } from '@material-ui/core';
import {
  getCheckin,
  createCheckin,
  deleteCheckin,
  editCheckin,
} from './actions';

export function CheckinPage(props) {
  const { checkinPage, onGetCheckin, onCreate, onEdit, onDelete } = props;
  useInjectReducer({ key: 'checkinPage', reducer });
  useInjectSaga({ key: 'checkinPage', saga });
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [rows, setRows] = useState();
  const [order, setOrder] = useState(true);
  const [check, setCheck] = useState(false);
  //===========================================================================
  useEffect(() => {
    onGetCheckin({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
      filter: { isExam: check == 'all' ? undefined : check },
    });
  }, [rowsPerPage, page, check]);
  useEffect(() => {
    if (checkinPage && checkinPage.checkins) {
      setRows(checkinPage.checkins.data);
    }
  }, [checkinPage]);
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
      <Header onCreate={onCreate} />
      <div style={{ margin: '10px 0px' }}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginRight: 5 }}
          onClick={() => setCheck('all')}
        >
          Tất Cả
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={check == false}
          onClick={() => setCheck(false)}
        >
          Chưa Vào Thi
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={check == true}
          onClick={() => setCheck(true)}
        >
          Đẵ Vào Thi
        </Button>
      </div>
      <DataTable
        rows={rows}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangeSort={handleChangeSort}
        order={order}
        page={page}
        count={count}
        rowsPerPage={rowsPerPage}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
}

CheckinPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkinPage: makeSelectInterviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetCheckin: query => dispatch(getCheckin(query)),
    onCreate: data => dispatch(createCheckin(data)),
    onEdit: data => dispatch(editCheckin(data)),
    onDelete: data => dispatch(deleteCheckin(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CheckinPage);
