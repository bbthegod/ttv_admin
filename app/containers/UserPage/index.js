/**
 *
 * UserPage
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//----------------------------------------------------
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import DataTable from './components/DataTable';
import { getUser } from './actions';
export function UserPage(props) {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState();
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('user');
  useInjectReducer({ key: 'userPage', reducer });
  useInjectSaga({ key: 'userPage', saga });
  //===========================================================================
  useEffect(() => {
    props.onGetUser({
      limit: rowsPerPage,
      skip: page * rowsPerPage,
      filter: {
        studentId: { $regex: search, $options: 'i' },
        role: role == '' ? undefined : role,
      },
    });
  }, [rowsPerPage, page, role, search]);
  useEffect(() => {
    if (props.userPage) {
      if (props.userPage.users) {
        setCount(props.userPage.users.count);
        setRows(props.userPage.users.data);
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
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
      />
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

UserPage.propTypes = {
  //onCreateCurrency: PropTypes.func.isRequired,
  onGetUser: PropTypes.func.isRequired,
  userPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userPage: makeSelectUserPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetUser: query => dispatch(getUser(query)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserPage);
