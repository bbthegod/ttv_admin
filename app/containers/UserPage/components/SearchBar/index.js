/**
 *
 * SearchBar
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Search from './components/Search';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480,
  },
  filterButton: {
    marginLeft: 'auto',
  },
  filterIcon: {
    marginRight: theme.spacing(1),
  },
}));
function SearchBar(props) {
  const { search, setSearch, className, role, setRole, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item>
        <Search
          className={classes.search}
          search={search}
          setSearch={setSearch}
        />
      </Grid>
      <div style={{ marginRight: 7 }}>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          onClick={() => setRole('')}
        >
          Tất Cả
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={role == 'user'}
          onClick={() => setRole('user')}
        >
          Sinh Viên
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={role == 'judge'}
          onClick={() => setRole('judge')}
        >
          Giám Khảo
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={role == 'receptionist'}
          onClick={() => setRole('receptionist')}
        >
          Lễ Tân
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '0px 5px' }}
          disabled={role == 'admin'}
          onClick={() => setRole('admin')}
        >
          Quản Trị
        </Button>
      </div>
    </Grid>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
